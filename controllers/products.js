var productModel = require('../models/product');

var products = {
    getAll: function (req, res) {
        productModel.find(function(err, data) {
            if (err) {
                res.status(500).json({
                    status: 'error',
                    message: 'Database Error' +err,
                    data: ''
                });
            } else {
                res.status(200).json({
                    status: 'success',
                    message: 'success',
                    dataValue: data
                });
            }
        });
    },

    getOne: function (req, res) {
        productModel.findById(req.params.id, function(err,data) {
            if (err) {
                throw err;
            } else {
                res.status(200).json({
                    status: 'success',
                    message: 'success',
                    oneData: data
                });
            }
        });
    },

    create: function(req, res) {
        var product = new ProductModel();
        product.name = req.body.name;
        product.price = req.body.price;

        product.save(function (err) {
            if (err) throw err;
            else {
                res.status(200).json({
                    status: 'success',
                    message: 'successfully inserted to the database',
                    data: ''
                });
            }
        });
    },
    
    update: function (req, res) {
        productModel.findById(req.params.id, function (err, data) {
            if (err) {
                throw err;
            }  else {
                res.status(200).json({
                    status: 'success',
                    message: 'successfully updated value/data',
                    data: ''
                });
            }
        });
    },

    delete: function (req, res) {
        productModel.remove({
            _id: req.params.id
        }, function (err, user) {
            if (err) throw err;
            else {
                res.status(200).json({
                    status: 'success',
                    message: 'successfully deleted',
                    data: ''
                });
            }
        });
    }
};

module.exports = products;