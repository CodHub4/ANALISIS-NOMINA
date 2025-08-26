const BaseService = require('./BaseService');

class NomPuestoService extends BaseService {
  constructor() {
    super('NOM_PUESTO', 'PUE_PUESTO_ID');
  }
}

module.exports = new NomPuestoService();
