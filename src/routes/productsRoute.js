const express = require('express');
const productsControllers = require('../controllers/productsControllers');
const nameValidation = require('../middlewares/nameValidation');

const productsRoutes = express.Router();

productsRoutes.get('/', productsControllers.getAll);
productsRoutes.get('/:id', productsControllers.findById);
productsRoutes.post('/', nameValidation, productsControllers.createProduct);
productsRoutes.put('/:id', nameValidation, productsControllers.putProduct);
productsRoutes.delete('/:id', productsControllers.deleteProduct);

module.exports = productsRoutes;