const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require ('./../server/models/todo.js');

const {User} = require('./../server/models/user.js');

/*var id = '5b75d6f5f7cecd129f1f57ac';
if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.find({
  _id : id
}).then((todos) => {
  console.log('Todos ', todos)
}).catch((e) => {
  console.log('Error = ', e.message);
});

Todo.findOne({
  _id : id
}).then((todo) =>{
  console.log('Todo', todo);
}).catch((e) => {
  console.log('Error = ', e.message);
});

Todo.findById(id).then((todo) =>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('By ID', todo);
}).catch((e) => {
  console.log('Error = ', e.message);
});*/

var id = '5b75f5a3ddc1310ac5f4c025';
if(ObjectID.isValid(id)){
User.findById(id).then((user) =>{
  if(!user){
    return console.log('User does not exist');
  }
  console.log(user);
}).catch((e) =>{
  console.log('Error', e.message);
})}
else{console.log('Invalid Id')};
