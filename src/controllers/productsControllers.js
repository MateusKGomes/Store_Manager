const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  const result = await productsServices.getAll();
  return res.status(200).json(result.message);
};

const findById = async (req, res) => {
  // const { id } = req.params;
  const result = await productsServices.findById(req.params);
  console.log(result);
  if (result.type) {
    return res.status(404).json(result.message);
  }
  return res.status(200).json(result.message);
};

module.exports = {
  getAll,
  findById,
};
