const BaseService = require('./BaseService');

class NomConceptoService extends BaseService {
  constructor() {
    super('NOM_CONCEPTO', 'CNC_CONCEPTO_ID');
  }

  async findByTipo(tipo) {
    return await this.findAll(
      'WHERE CNC_TIPO = :tipo AND CNC_ACTIVO = \'S\' ORDER BY CNC_CODIGO',
      { tipo }
    );
  }

  async create(data) {
    const columns = [
      'CNC_CODIGO', 'CNC_NOMBRE', 'CNC_TIPO', 'CNC_GRAVA_IGSS', 'CNC_GRAVA_ISR',
      'CNC_ES_HORAS_EXTRA', 'CNC_ES_AUSENCIA', 'CNC_ES_VACACION', 'CNC_FORMULA', 'CNC_ACTIVO'
    ];
    return await super.create(data, columns);
  }

  async update(id, data) {
    const columns = [
      'CNC_CODIGO', 'CNC_NOMBRE', 'CNC_TIPO', 'CNC_GRAVA_IGSS', 'CNC_GRAVA_ISR',
      'CNC_ES_HORAS_EXTRA', 'CNC_ES_AUSENCIA', 'CNC_ES_VACACION', 'CNC_FORMULA', 'CNC_ACTIVO'
    ];
    return await super.update(id, data, columns);
  }
}

module.exports = new NomConceptoService();
