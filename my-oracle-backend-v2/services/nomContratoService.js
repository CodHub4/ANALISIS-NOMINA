const BaseService = require('./BaseService');

class NomContratoService extends BaseService {
  constructor() {
    super('NOM_CONTRATO', 'CON_CONTRATO_ID');
  }

  async findAllWithDetails() {
    const sql = `
      SELECT c.*, 
             e.EMP_NOMBRES || ' ' || e.EMP_APELLIDOS AS EMPLEADO_NOMBRE,
             p.PUE_NOMBRE AS PUESTO_NOMBRE,
             d.DEP_NOMBRE AS DEPARTAMENTO_NOMBRE,
             tc.TCO_NOMBRE AS TIPO_CONTRATO_NOMBRE,
             per.PER_NOMBRE AS PERIODICIDAD_NOMBRE,
             j.JOR_NOMBRE AS JORNADA_NOMBRE
      FROM NOM_CONTRATO c
      LEFT JOIN NOM_EMPLEADO e ON c.EMP_EMPLEADO_ID = e.EMP_EMPLEADO_ID
      LEFT JOIN NOM_PUESTO p ON c.PUE_PUESTO_ID = p.PUE_PUESTO_ID
      LEFT JOIN NOM_DEPARTAMENTO d ON c.DEP_DEPARTAMENTO_ID = d.DEP_DEPARTAMENTO_ID
      LEFT JOIN NOM_TIPO_CONTRATO tc ON c.TCO_TIPO_CONTRATO_ID = tc.TCO_TIPO_CONTRATO_ID
      LEFT JOIN NOM_PERIODICIDAD per ON c.PER_PERIODICIDAD_ID = per.PER_PERIODICIDAD_ID
      LEFT JOIN NOM_JORNADA j ON c.JOR_JORNADA_ID = j.JOR_JORNADA_ID
      ORDER BY c.CON_CONTRATO_ID
    `;
    const result = await this.executeCustomQuery(sql);
    return result.rows;
  }

  async findByIdWithDetails(id) {
    const sql = `
      SELECT c.*, 
             e.EMP_NOMBRES || ' ' || e.EMP_APELLIDOS AS EMPLEADO_NOMBRE,
             p.PUE_NOMBRE AS PUESTO_NOMBRE,
             d.DEP_NOMBRE AS DEPARTAMENTO_NOMBRE,
             tc.TCO_NOMBRE AS TIPO_CONTRATO_NOMBRE,
             per.PER_NOMBRE AS PERIODICIDAD_NOMBRE,
             j.JOR_NOMBRE AS JORNADA_NOMBRE
      FROM NOM_CONTRATO c
      LEFT JOIN NOM_EMPLEADO e ON c.EMP_EMPLEADO_ID = e.EMP_EMPLEADO_ID
      LEFT JOIN NOM_PUESTO p ON c.PUE_PUESTO_ID = p.PUE_PUESTO_ID
      LEFT JOIN NOM_DEPARTAMENTO d ON c.DEP_DEPARTAMENTO_ID = d.DEP_DEPARTAMENTO_ID
      LEFT JOIN NOM_TIPO_CONTRATO tc ON c.TCO_TIPO_CONTRATO_ID = tc.TCO_TIPO_CONTRATO_ID
      LEFT JOIN NOM_PERIODICIDAD per ON c.PER_PERIODICIDAD_ID = per.PER_PERIODICIDAD_ID
      LEFT JOIN NOM_JORNADA j ON c.JOR_JORNADA_ID = j.JOR_JORNADA_ID
      WHERE c.CON_CONTRATO_ID = :id
    `;
    const result = await this.executeCustomQuery(sql, { id });
    return result.rows[0];
  }

  async findByEmpleadoId(empleadoId) {
    const sql = `
      SELECT c.*, 
             p.PUE_NOMBRE AS PUESTO_NOMBRE,
             d.DEP_NOMBRE AS DEPARTAMENTO_NOMBRE
      FROM NOM_CONTRATO c
      LEFT JOIN NOM_PUESTO p ON c.PUE_PUESTO_ID = p.PUE_PUESTO_ID
      LEFT JOIN NOM_DEPARTAMENTO d ON c.DEP_DEPARTAMENTO_ID = d.DEP_DEPARTAMENTO_ID
      WHERE c.EMP_EMPLEADO_ID = :empleadoId
      ORDER BY c.CON_FECHA_INICIO DESC
    `;
    const result = await this.executeCustomQuery(sql, { empleadoId });
    return result.rows;
  }

  async create(data) {
    const columns = [
      'EMP_EMPLEADO_ID', 'PUE_PUESTO_ID', 'DEP_DEPARTAMENTO_ID', 
      'TCO_TIPO_CONTRATO_ID', 'PER_PERIODICIDAD_ID', 'JOR_JORNADA_ID',
      'CON_FECHA_INICIO', 'CON_FECHA_FIN', 'CON_SALARIO_BASE',
      'CON_FORMA_PAGO', 'CON_ESTADO', 'CON_SUBSIDIO', 'CON_OBSERVACIONES'
    ];
    return await super.create(data, columns);
  }

  async update(id, data) {
    const columns = [
      'PUE_PUESTO_ID', 'DEP_DEPARTAMENTO_ID', 'TCO_TIPO_CONTRATO_ID', 
      'PER_PERIODICIDAD_ID', 'JOR_JORNADA_ID', 'CON_FECHA_INICIO', 
      'CON_FECHA_FIN', 'CON_SALARIO_BASE', 'CON_FORMA_PAGO', 
      'CON_ESTADO', 'CON_SUBSIDIO', 'CON_OBSERVACIONES'
    ];
    return await super.update(id, data, columns);
  }
}

module.exports = new NomContratoService();
