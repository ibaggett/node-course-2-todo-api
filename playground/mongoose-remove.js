const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findOneAndRemove(

// Todo.findOneAndRemove({_id: '5babe3d24d7f0f98c16e6425'}).then((todo) => {
//
// });

// Todo.findByIdAndRemove('5babe3d24d7f0f98c16e6425').then((todo) => {
//   console.log(todo);
// });
