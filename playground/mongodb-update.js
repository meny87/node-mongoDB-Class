//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID('5b7382dbddc1310ac5f4bf94')},
  //   { $set: { text: 'Go to the movies'}},
  //   { returnOriginal: false }
  // ).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    { _id : new ObjectID('5b738d08ddc1310ac5f4bfc8')},
    { $set: { name: 'Emmanuel'}, $inc: {age : 3}},
    { returnOriginal : false}
  ).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Error: ', err);
  });


  client.close();
}); //url where server lives //callback function triggered once connection is stablished
