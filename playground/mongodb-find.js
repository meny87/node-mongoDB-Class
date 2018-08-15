//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // var todosArr = db.collection('Todos').find({_id : new ObjectID('5b7351b1795f950bfe281f88')}).toArray().then((docs) =>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos');
  // });
  // console.log(todosArr);

  db.collection('Todos').find().count().then((count) =>{
    console.log(`Todos count: ${count}`);
  }, (err)=>{
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({
    name : 'Mikes'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to run find query');
  });


  client.close();
}); //url where server lives //callback function triggered once connection is stablished
