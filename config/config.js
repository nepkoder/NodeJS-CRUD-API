// db configure
var config = {
    PORT: 3000,
    site: 'http://locahost/node-crud-operation/#/',

    //database credentials
    mongo: {
        hostname: 'localhost',
        port: '27017',
        db: 'nodejs-api'
    }
};


// database connection url
config.mongo.url = 'mongodb://'+config.mongo.hostname+ ':' + config.mongo.port +"/" +config.mongo.db;

module.exports = config;