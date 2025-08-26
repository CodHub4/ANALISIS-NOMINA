const BaseService = require('./BaseService');

class NomNominaDetalleService extends BaseService {
  constructor() {
    super('NOM_NOMINA_DETALLE', 'NOD_DETALLE_ID');
  }

  async findByNominaId(nominaId) {
    const sql = `
      SELECT nd.*, 
             c.CNC_CODIGO, c.CNC_NOMBRE, c.CNC_TIPO,
             con.CON_CONTRATO_ID,
             emp.EMP_NOMBRES || ' ' || emp.EMP_APELLIDOS AS EMPLEADO_NOMBRE
      FROM NOM_NOMINA_DETALLE nd
      LEFT JOIN NOM_CONCEPTO c ON nd.CNC_CONCEPTO_ID = c.CNC_CONCEPTO_ID
      LEFT JOIN NOM_CONTRATO con ON nd.CON_CONTRATO_ID = con.CON_CONTRATO_ID
      LEFT JOIN NOM_EMPLEADO emp ON con.EMP_EMPLEADO_ID = emp.EMP_EMPLEADO_ID
      WHERE nd.NOM_NOMINA_ID = :nominaId
      ORDER BY emp.EMP_APELLIDOS, emp.EMP_NOMBRES, c.CNC_TIPO, c.CNC_CODIGO
    `;
    const result = await this.executeCustomQuery(sql, { nominaId });
    return result.rows;
  }

  async create(data) {
    const columns = [
      'NOM_NOMINA_ID', 'CON_CONTRATO_ID', 'CNC_CONCEPTO_ID',
      'NOD_CANTIDAD', 'NOD_MONTO_UNITARIO', 'NOD_MONTO_TOTAL',
      'NOD_ES_GRAVADO_IGSS', 'NOD_ES_GRAVADO_ISR'
    ];
    return await super.create(data, columns);
  }
}

module.exports = new NomNominaDetalleService();
