const express = require('express');
const { registerUser, getUser } = require('../controller/user');
const { addTask, getTask, deleteById } = require('../controller/task');
const { verifyToken } = require('../middlewares/verifyToken');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', getUser);
router.post('/add/:id', verifyToken, addTask);
router.get('/tasks/:id', verifyToken, getTask);
router.delete('/delete/:id', verifyToken, deleteById);

module.exports = router;