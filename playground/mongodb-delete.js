// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // const db = client.db('Todos');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndDelete({_id: new ObjectID("5ba085794d7f0f98c16e6421")}).then((result) => {
    console.log(result);
  });

  db.collection('Users').deleteMany({name: 'Ivan Baggett'}).then((result) => {
    console.log(result);
  });

  //client.close();
});
