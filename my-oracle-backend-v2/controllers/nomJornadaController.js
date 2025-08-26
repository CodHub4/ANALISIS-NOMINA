
const service = require('../services/nomJornadaService');

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
    const columns = ['JOR_CODIGO', 'JOR_NOMBRE', 'JOR_HORAS_DIARIAS'];
    const id = await service.create(req.body, columns);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const columns = ['JOR_CODIGO', 'JOR_NOMBRE', 'JOR_HORAS_DIARIAS'];
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
