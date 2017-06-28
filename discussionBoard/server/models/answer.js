var mongoose = require('mongoose');
var AnswerSchema = new mongoose.Schema({
	answer: {
    type:String,
    required: [true, 'Answer is required'],
    minlength: [5, "Answer must be at least 5 characters long"]
  },
	details: String,
  user: String,
  likes:{
    type: Number,
    default: 0
  },
	_question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
});

AnswerSchema.methods.like = function(callback){
  this.likes += 1;
  this.save(function(err){
    callback(err);
  });

}

mongoose.model("Answer", AnswerSchema);
