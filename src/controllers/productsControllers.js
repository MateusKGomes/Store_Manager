const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  const result = await productsServices.getAll();
  return res.status(200).json(result.message);
};

const findById = async (req, res) => {
  const result = await productsServices.findById(req.params);
  console.log(result);
  if (result.type) {
    return res.status(404).json(result.message);
  }
  return res.status(200).json(result.message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const result = await productsServices.createProduct(req.body);
  if (result.type) {
    return res.status(404).json(result.message);
  }
  return res.status(201).json({ id: result.message.insertId, name });
};

module.exports = {
  getAll,
  findById,
  createProduct,
};
