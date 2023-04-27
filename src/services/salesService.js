const salesProductsModels = require('../models/salesModels');

const createSales = async (param) => {
  const result = await salesProductsModels.createSales(param);
  return { type: null, message: result };
};

module.exports = {
  createSales,
};
