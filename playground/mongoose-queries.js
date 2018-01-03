const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a476ac1cea87e86806f0cd3';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
};

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne( {
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));


var userId = '5a4d3edd90790d168fcdcba3'

User.findById(userId).then((user) => {
    if(!user) {
        console.log('User not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));
