// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // const db = client.db('Todos');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5ba106234d7f0f98c16e6422")
  }, {
    $set: { name: 'Pamela' },
    $inc: { age: 1 }
  }, {
      returnOriginal: false
  }).then((result) => {
      console.log(result);
  });




  //client.close();
});
