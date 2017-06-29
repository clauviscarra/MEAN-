var mongoose = require('mongoose');
var User = mongoose.model('User')
function UsersController(){
  
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
