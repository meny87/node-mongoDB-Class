//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert ToDo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // }); //Insert a Document into Collection

  var user = {
    name: 'Emmanuel',
    age : 31,
    location: 'Mexico'
  };

  db.collection('Users').insertOne(user, (err, result) =>{
    if(err){
      return console.log('Unable to insert User', err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
}); //url where server lives //callback function triggered once connection is stablished
