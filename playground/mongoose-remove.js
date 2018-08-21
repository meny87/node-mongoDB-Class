const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose.js');
const {
  Todo
} = require('./../server/models/todo.js');

const {
  User
} = require('./../server/models/user.js');

//Deleting records:
// Todo.remove() if empty parameter is passed {} all documents are removed.
//remove gets the number of documents removed and the status ok(0,1)
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//findOneAndRemove gets the doc removed as returned value.
Todo.findOneAndRemove({_id: '5b7c30ccddc1310ac5f4c03e'}).then((todo) =>{
  console.log(todo);
});
//findByIdAndRemove
Todo.findByIdAndRemove('5b7c300cddc1310ac5f4c037').then((todo) =>{
  console.log(todo);
});
