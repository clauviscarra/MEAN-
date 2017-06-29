var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {type:String, required:[true, 'omg like name errors']},
  appointments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Appointment'}]

})

mongoose.model('User', UserSchema)
