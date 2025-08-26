
const service = require('../services/nomEmpleadoService');

exports.getAll = async (req, res) => {
  try {
    const data = await service.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await service.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const columns = [
      'EMP_CODIGO_EMP', 'EMP_DPI', 'EMP_NIT', 'EMP_NOMBRES', 'EMP_APELLIDOS',
      'EMP_FECHA_NAC', 'EMP_SEXO', 'EMP_EMAIL', 'EMP_TELEFONO', 'EMP_DIRECCION',
      'EMP_ESTADO_CIVIL', 'EMP_DEPENDIENTES', 'EMP_ACTIVO'
    ];
    const id = await service.create(req.body, columns);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const columns = [
      'EMP_CODIGO_EMP', 'EMP_DPI', 'EMP_NIT', 'EMP_NOMBRES', 'EMP_APELLIDOS',
      'EMP_FECHA_NAC', 'EMP_SEXO', 'EMP_EMAIL', 'EMP_TELEFONO', 'EMP_DIRECCION',
      'EMP_ESTADO_CIVIL', 'EMP_DEPENDIENTES', 'EMP_ACTIVO'
    ];
    await service.update(req.params.id, req.body, columns);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
