// packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// file includes
var config = require('./config/config');

// init app and middleware
var app = express();
var db;

// parse json
app.use(bodyParser.json());

//mkeing uploadds folder as static
app.use(express.static(__dirname+'/public'));

// set headers for cross origin
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers','COntent-type,Accept,X-Access-Token,X-Key');

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }

});

app.use('/',require('./routes'));

// if no route is matched by now, it must be a 404
app.use(function (req, res, next) {
    res.status(404).json({
        status: 'Page not found'
    }).end();
});


// app.get('/sujan', function (req, res) {
//     res.send("Sujan Shrestha");
// });

// starting server
app.set('port',config.PORT);

var server = app.listen(app.get('port'), function () {
    console.log('Application running on port ' +server.address().port);
});

// database connection
mongoose.connect(config.mongo.url, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // save database object from the callback for resuse
    db = database;
    console.log('database connection ready')
});

