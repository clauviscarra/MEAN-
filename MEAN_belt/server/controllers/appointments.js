var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment')


function AppointmentsController(){
  this.index=function(req, res){
    Appointment.find({}, function(err, appointments){
      if(err){
        console.log(err)
      }
      else{
        res.json(appointments)
      }
    })


  }

  this.create=function(req, res){
    console.log(req.body.date)
    var date = new Date(req.body.date)
    var today = new Date();
    if (date < today){
      
      res.json({error:true, messages:"You can only set appointments in the future."})
    }
    else{
      Appointment.create(req.body, function(err, appointment){
        if(err){
          console.log(err)

        }
        else{
          res.json(appointment)
        }
      })

    }


  }

  this.remove=function(req, res){
    var appointment_id = req.params.id
    Appointment.remove({_id:appointment_id}, function(err, appointments){
      if (err){
        console.log(err)
      }
      else{
        res.json(appointments)
      }
    })
  }

}

module.exports = new AppointmentsController
