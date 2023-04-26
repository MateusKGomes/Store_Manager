const productsModels = require('../models/productsModels');

const getAll = async () => {
  const result = await productsModels.getAll();
  return { type: null, message: result };
};

const findById = async (id) => {
  const result = await productsModels.findById(id);
  if (!result) {
    return { type: 404, message: { message: 'Product not found' } };
  }
  return { type: null, message: result };
};

module.exports = {
  getAll,
  findById,
};
