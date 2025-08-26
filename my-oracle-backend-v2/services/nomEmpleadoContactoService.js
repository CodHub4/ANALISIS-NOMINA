const BaseService = require('./BaseService');

class NomEmpleadoContactoService extends BaseService {
  constructor() {
    super('NOM_EMPLEADO_CONTACTO', 'ECO_CONTACTO_ID');
  }

  async findByEmpleadoId(empleadoId) {
    return await this.findAll(
      'WHERE EMP_EMPLEADO_ID = :empleadoId ORDER BY ECO_CONTACTO_ID',
      { empleadoId }
    );
  }

  async create(data) {
    const columns = ['EMP_EMPLEADO_ID', 'ECO_TIPO', 'ECO_NOMBRE', 'ECO_PARENTESCO', 'ECO_TELEFONO', 'ECO_EMAIL'];
    return await super.create(data, columns);
  }

  async update(id, data) {
    const columns = ['ECO_TIPO', 'ECO_NOMBRE', 'ECO_PARENTESCO', 'ECO_TELEFONO', 'ECO_EMAIL'];
    return await super.update(id, data, columns);
  }
}

module.exports = new NomEmpleadoContactoService();
