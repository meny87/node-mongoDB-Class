//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  //deleteMany
  // db.collection('Todos').deleteMany({
  //   text:'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({
  //   text : 'Eat Lunc'
  // }).then((result) => {
  //   console.log(result);
  // });
  //findOnAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed:false
  // }).then((result) =>{
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({
  //   name : 'Emmanuel'
  // }).then((result) => {
  //   console.log(result.result);
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('5b73556bda7d890c3604247b')
  }).then((result) => {
    console.log(result);
  }, (err) =>{
    console.log(err);
  });


  client.close();
}); //url where server lives //callback function triggered once connection is stablished
