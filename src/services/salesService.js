const salesModels = require('../models/salesModels');

const createSales = async (param) => {
  const result = await salesModels.createSales(param);
  return { type: null, message: result };
};

const getAll = async () => {
  const result = await salesModels.getAll();
  return { type: null, message: result };
};

const findById = async ({ id }) => {
  const result = await salesModels.findById(id);
  if (result.length === 0) {
    return { type: 404, message: { message: 'Sale not found' } };
  }
  return { type: null, message: result };
};

module.exports = {
  createSales,
  getAll,
  findById,
};
