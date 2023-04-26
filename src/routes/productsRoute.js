const express = require('express');
const productsControllers = require('../controllers/productsControllers');

const productsRoutes = express.Router();

productsRoutes.get('/', productsControllers.getAll);
productsRoutes.get('/:id', productsControllers.findById);
productsRoutes.post('/', productsControllers.createProduct);


module.exports = productsRoutes;