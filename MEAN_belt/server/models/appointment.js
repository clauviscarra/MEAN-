var mongoose = require('mongoose');
var AppointmentSchema = new mongoose.Schema({
	complaint: {
    type:String,
    required: [true, 'complaint is required'],
    minlength: [10, "Answer must be at least 5 characters long"]
  },
	date: Date,
  time: String,
  user: String,
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})



mongoose.model("Appointment", AppointmentSchema);
