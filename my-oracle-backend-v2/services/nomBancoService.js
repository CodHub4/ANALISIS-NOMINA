
const BaseService = require('./BaseService');

class NomBancoService extends BaseService {
  constructor() {
    super('NOM_BANCO', 'BAN_BANCO_ID');
  }
}

module.exports = new NomBancoService();
