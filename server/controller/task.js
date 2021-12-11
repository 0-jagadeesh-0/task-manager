const Task = require('../models/tasks');

const addTask = async (req, res) => {
    const newTask = await Task(req.body);
    // console.log(newTask);
    await newTask.save();
    res.send("Sucess");
}

const getTask = async (req, res) => {

    await Task.find({}).then((task) => {
        res.json(task);
    })
}

const deleteById = async (req, res) => {
    await Task.findOneAndDelete({ _id: req.params.id }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.send("User not found");
    })
}

module.exports = { addTask, getTask, deleteById };