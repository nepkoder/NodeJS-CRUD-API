var express = require('express');
var router = express.Router();

var products = require('./controllers/products');

router.get('/myapi/products/', products.getAll);
router.get('/myapi/product/:id', products.getOne);
router.post('/myapi/product/', products.create);
router.put('/myapi/product/:id', products.update);
router.delete('/myapi/product/:id', products.delete);


module.exports = router;