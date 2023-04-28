const express = require('express');

const salesController = require('../controllers/salesControllers');
const {
  productIdValidation,
  quantityVailidation,
} = require('../middlewares/salesValidation');

const salesRoutes = express.Router();

salesRoutes.post('/',
  productIdValidation,
  quantityVailidation,
  salesController.createSales);

salesRoutes.get('/', salesController.getAll);

salesRoutes.get('/:id', salesController.findById);

module.exports = salesRoutes;