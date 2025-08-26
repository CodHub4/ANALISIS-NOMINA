const BaseService = require('./BaseService');

class NomDepartamentoService extends BaseService {
  constructor() {
    super('NOM_DEPARTAMENTO', 'DEP_DEPARTAMENTO_ID');
  }
}

module.exports = new NomDepartamentoService();


