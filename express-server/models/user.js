var mongoose = require('../config/database'); 

// create mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// create mongoose model
module.exports = mongoose.model('User', userSchema);

