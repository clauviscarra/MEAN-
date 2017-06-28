var mongoose = require('mongoose');
var User = mongoose.model('User')
function UsersController(){
  this.create = function(req, res){
  User.create(req.body, function(err, result){
    if(err){
      res.json({error:true, messages:"omg error"})
    }
    else{
      res.json({question:true, result:result})
    }
  })
}
this.login = function(req, res){
  User.findOne({name: req.body.name}, function(err, user){
    if(!user){
      User.create(req.body, function(err, user){
        if(err){
          console.log(err)
          res.json({login:false, messages:err})
        }
        else{
          res.json({login:true, user:user})
        }
      })
    }
    else{
      res.json({login:true, user:user})
    }
  })
}

}
module.exports = new UsersController();
