var users = require('../controllers/users.js')
var appointments = require('../controllers/appointments.js')

module.exports = function(app){
    app.post('/login', (req,res)=>{
        users.login(req, res);
    })

    app.get('/dashboard', (req,res)=>{
        console.log("inside routes (home)")
        appointments.index(req, res)
    })
    app.post('/appointment', (req,res)=>{
        console.log("inside routes")
        appointments.create(req, res);
    })
    app.get('/appointment/:id/remove', (req,res)=>{
        console.log("inside routes (home)")
        appointments.remove(req, res)
    })


}
