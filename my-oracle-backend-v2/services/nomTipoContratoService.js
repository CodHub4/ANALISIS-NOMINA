
const BaseService = require('./BaseService');

class NomTipoContratoService extends BaseService {
  constructor() {
    super('NOM_TIPO_CONTRATO', 'TCO_TIPO_CONTRATO_ID');
  }
}

module.exports = new NomTipoContratoService();
