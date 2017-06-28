var users = require('../controllers/users.js')
var questions = require('../controllers/questions.js')
var answers = require('../controllers/answers.js')


module.exports = function(app){
    app.post('/login', (req,res)=>{
        users.login(req, res);
    })

    app.get('/dashboard', (req,res)=>{
        console.log("inside routes (home)")
        console.log(req.body)
        questions.index(req, res)
    })
    app.post('/answers/:id', (req,res)=>{
        console.log("inside routes")
        answers.create(req, res);
    })
    app.get('/questions/:id', (req,res)=>{
        console.log("inside routes (answer)")
        console.log(req.body)
        questions.show(req, res)
    })
    app.post('/newquestions', (req,res)=>{
        console.log("inside routes")
        questions.create(req, res);
    })
    app.post('/answers/:id/like', (req,res)=>{
        console.log("inside routes")
        answers.like(req, res);
    })

}
