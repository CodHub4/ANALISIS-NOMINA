
const BaseService = require('./BaseService');

class NomJornadaService extends BaseService {
  constructor() {
    super('NOM_JORNADA', 'JOR_JORNADA_ID');
  }
}

module.exports = new NomJornadaService();
