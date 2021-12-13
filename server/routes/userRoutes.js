const express = require('express');
const { registerUser, getUser, getus } = require('../controller/user');
const { addTask, getTask } = require('../controller/task');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', getUser);
router.post('/add', addTask);
router.get('/user', getus)
router.get('/tasks', getTask);

module.exports = router;