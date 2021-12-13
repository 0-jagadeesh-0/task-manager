const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { getTask, deleteById } = require('./controller/task');

dotenv.config();

connectDB();

//Server
const app = express();

//Middlewares

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: 'true' }));

app.get('/', (req, res) => {
    res.send("Hello");
})
app.get('/tasks', getTask);

app.delete('/tasks/:id', deleteById);

app.use('/', userRoutes);
app.listen(process.env.PORT || 5000, () => {
    console.log("Server running...");
})