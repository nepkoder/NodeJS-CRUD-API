var config = {
    PORT: 3000,
    site: 'http://locahost/node-crud-operation/#/',

    //database credentials

    mongo: {
        hostname: 'localhost',
        port: '27017',
        // username
        db: 'nodejs-api'
    }
};
config.mongo.url = 'mongodb://'+config.mongo.hostname+ ':' + config.mongo.port +"/" +config.mongo.db;

module.exports = config;