const mongoose = require('mongoose');

dbConfig = {
    remoteUrl : process.env.DB_URL,
    localUrl: 'mongodb://127.0.0.1:27017/mean-docker'
};

// MongoDB URL 
const dbHost = dbConfig.remoteUrl || dbConfig.localUrl;

// Connect to mongodb
mongoose.connect(dbHost, function(){
    console.log("mongodb connected...");
});

module.exports = mongoose;
