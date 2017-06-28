var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {type:String, required:[true, 'omg like name errors']},

})

mongoose.model('User', UserSchema)
