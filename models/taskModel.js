const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  taskName: String,
  status: String,
  TimeStamp: { type: Date, default: Date.now },
  comments : {
    type : Array
  }
}, {
  collection : 'Tasks'
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
