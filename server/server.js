//Library imports
var express = require ('express');
var bodyParser = require ('body-parser');

//Local imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require ('./models/todo.js');
var {User} = require ('./models/user.js');

var app = express();

app.use(bodyParser.json()); //middleware

//Create Doc => POST
app.post('/todos', (req,res) =>{
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (err) =>{
    res
    .status(400)
    .send(err);
  });
});

app.listen(3000, () =>{
  console.log('Started on port 3000');
});

module.exports = {app};

//
// var newTodo = new Todo({
//   text : 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo: ', doc);
// }, (e) =>{
//   console.log('Unable to save todo');
// });

// var newTodo = new Todo({
//   text:'  Edit this video  '
//
// });
//
// newTodo.save().then((doc) =>{
//   console.log('Doc saved', doc);
// }, (err) =>{
//   console.log('Unable to create new doc');
// })
//
//
//
// var newUser = new User({
//   email: '  emmanuel@me.com  '
// });
//
// newUser.save().then((doc) =>{
//   console.log('Document saved: ', doc);
// }, (err)=>{
//   console.log('Error saving the doc', err);
// });
