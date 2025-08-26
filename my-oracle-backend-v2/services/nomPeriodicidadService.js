
const BaseService = require('./BaseService');

class NomPeriodicidadService extends BaseService {
  constructor() {
    super('NOM_PERIODICIDAD', 'PER_PERIODICIDAD_ID');
  }
}

module.exports = new NomPeriodicidadService();
