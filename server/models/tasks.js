const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    task: {
        type: String
    },
    time: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;