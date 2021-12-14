const Task = require('../models/tasks');
const jwt = require('jsonwebtoken');

const addTask = async (req, res) => {
    let token = req.headers.token;
    jwt.verify(token, 'secretkey', async (err, decoded) => {
        if (err) {
            return res.status(400).json("Not Authorized");
        }
        const newTask = Task({
            task: req.body.task,
            time: req.body.time,
            user: decoded.userId
        });
        // console.log(newTask);
        newTask.save();
        res.send("Sucess");
    })
}

const getTask = async (req, res) => {
    let token = req.headers.token;
    jwt.verify(token, 'secretkey', async (err, decoded) => {
        if (err) {
            return res.status(400).json("Not Authorized");
        }
        await Task.find({ user: decoded.userId }, (err, tasks) => {
            if (err) {
                return res.status(400).send("error");
            }
            return res.status(200).json({
                title: "user found",
                tasks: tasks
            })
        }).clone().catch((error) => {
            console.log(error);
        })

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