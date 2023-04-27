const { findById } = require('../models/productsModels');

const productIdValidation = async (req, res, next) => {
  const getBody = req.body;
  const valideProductId = getBody.every((validate) => validate.productId);
  if (!valideProductId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  const validateId = await Promise.all(getBody
    .map((value) => findById(value.productId)));
  if (validateId.includes(undefined)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
};

const quantityVailidation = async (req, res, next) => {
  const getBodyValidation = req.body;
  const valideQuantity = getBodyValidation.every((validate) => {
    if (validate.quantity === 0) {
      return true;
    }
    return validate.quantity;
  });
  if (!valideQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  const validateValue = getBodyValidation.map((el) => el.quantity).every((value) => value > 0);
  console.log('validate', validateValue);
  if (!validateValue) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

module.exports = {
  productIdValidation,
  quantityVailidation,
};