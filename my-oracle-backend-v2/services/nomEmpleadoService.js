
const BaseService = require('./BaseService');

class NomEmpleadoService extends BaseService {
  constructor() {
    super('NOM_EMPLEADO', 'EMP_EMPLEADO_ID');
  }
}

module.exports = new NomEmpleadoService();
