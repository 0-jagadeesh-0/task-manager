const express = require('express');
const { registerUser, getUser } = require('../controller/user');
const { addTask } = require('../controller/task');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', getUser);
router.post('/add', addTask);

// router.get('/tasks', getTask);

module.exports = router;