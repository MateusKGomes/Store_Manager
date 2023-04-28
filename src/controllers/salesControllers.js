const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  const param = req.body;
  const result = await salesService.createSales(param);
  return res.status(201).json(result.message);
};

const getAll = async (req, res) => {
  const result = await salesService.getAll();
  return res.status(200).json(result.message);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.findById(id);
  if (result.type) {
    return res.status(404).json(result.message);
  }
  return res.status(200).json(result.message);
};

module.exports = {
  createSales,
  getAll,
  findById,
};
