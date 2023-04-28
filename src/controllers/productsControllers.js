const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  const result = await productsServices.getAll();
  return res.status(200).json(result.message);
};

const findById = async (req, res) => {
  const result = await productsServices.findById(req.params);
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

const putProduct = async (req, res) => {
  const result = await productsServices.putProduct(req.body, req.params);
  if (result.type) {
    return res.status(404).json(result.message);
  }
  return res.status(200).json(result.message);
};

const deleteProduct = async (req, res) => {
  const result = await productsServices.deleteProduct(req.params);
  if (result.type) {
    return res.status(404).json(result.message);
  }
  return res.status(204).json(result.message);
};

module.exports = {
  getAll,
  findById,
  createProduct,
  putProduct,
  deleteProduct,
};
