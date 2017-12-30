// const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb'); //This code is identical to the one above

//With destructuring we can easly access any property we wont
 const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany => delete multiple documents
    // db.collection('Todos').deleteMany({text: 'Send email to Giorgio'})
    //     .then((result) => {
    //         console.log(result);
    //     });


    //delteOne => delete only one document
    // db.collection('Todos').deleteOne({text: 'Send email to Giorgio'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    //findOneAndDelete => it returns the document and delete
    // db.collection('Todos').findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').deleteMany({name: 'Piervalerio'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a470c34faae097ad4d2e46d')
        }).then((result) => {
            console.log(result);
        });

    // db.close();
});
