const express = require('express');

const salesProductsService = require('../controllers/salesControllers');
const {
  productIdValidation,
  quantityVailidation,
} = require('../middlewares/salesValidation');

const salesProductsRoutes = express.Router();

salesProductsRoutes.post('/',
  productIdValidation,
  quantityVailidation,
  salesProductsService.createSales);

module.exports = salesProductsRoutes;