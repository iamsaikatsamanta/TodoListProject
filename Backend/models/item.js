const mongoose=require('mongoose');

var itemSchema=mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Item',itemSchema);
