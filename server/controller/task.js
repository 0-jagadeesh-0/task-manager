const Task = require('../models/tasks');

const addTask = async (req, res) => {
    const { id } = req.params;
    try {
        const newTask = await Task({
            task: req.body.task,
            time: req.body.time,
            user: id
        });
        await newTask.save();
        res.send(newTask);
    } catch (error) {
        res.status(400).json("Something went wrong.");
    }
}

const getTask = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const tasks = await Task.find({ user: id });

        res.status(200).json({
            title: "user found",
            tasks: tasks
        })
    } catch (error) {
        res.status(400).json("Something went wrong.")
    }

}

const deleteById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndRemove({ _id: id });
        res.status(200).json(task);

    } catch (error) {
        res.status(400).json("user not found.")
    }
}

module.exports = { addTask, getTask, deleteById };