var mongoose = require('mongoose');
var Question = mongoose.model('Question')
function QuestionsController(){

  this.index=function(req, res){
    Question.find({})
    .populate("answers")
    .exec(function(err, questions){
      if(err){
        console.log(err)
      }
      else{
        res.json(questions)
      }
    })


  }
  this.show=function(req, res){
    var question_id = req.params.id
    Question.findOne({_id:question_id})
    .populate("answers")
    .exec(function(err, question){

      if(err){
        console.log(err)
      }
      else{
        res.json(question)
      }

    })

  }

  this.create=function(req, res){
    Question.create(req.body, function(err, question){
      if(err){
        console.log(err)
      }
      else{
        res.json(question)
      }
    })

  }

}

module.exports = new QuestionsController
