var mongoose =require('mongoose')
var Schema = mongoose.Schema
var QuestionSchema = new Schema({
	question: String,
	description: String,
  answers:[{type: Schema.Types.ObjectId, ref: 'Answer'}]
});

mongoose.model("Question", QuestionSchema);
