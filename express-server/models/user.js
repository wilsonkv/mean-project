var mongoose = require('mongoose');
var database = require('../config/database'); 

// MongoDB URL 
const dbHost = database.remoteUrl || database.localUrl;

//TODO- verify dbconnection is open
// Connect to mongodb
//mongoose.connect(dbHost);

// create mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// create mongoose model
module.exports = mongoose.model('User', userSchema);

