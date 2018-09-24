var mongoose = require('mongoose');
var datetime = require('node-datetime');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var now = new Date(Date.now());
console.log(`Now is: ${now}`);

var newTodo = new Todo({
  text: 'Mow lawn',
  completed: true,
  completedAt: now
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});
