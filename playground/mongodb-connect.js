// const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb'); //This code is identical to the one above

//With destructuring we can easly access any property we wont
 const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Piervalerio',
    //     age: 28,
    //     address: 'Doral',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         console.log('Unable ton insert the user', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});
