const salesProductsService = require('../services/salesService');

const createSales = async (req, res) => {
  const param = req.body;
  const result = await salesProductsService.createSales(param);
  return res.status(201).json(result.message);
};

module.exports = {
  createSales,
};
