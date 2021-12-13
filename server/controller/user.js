const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const newUser = await User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    // console.log(newUser);
    await newUser.save();
    res.send("Sucess");
}
const getUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    let token = jwt.sign({ userId: user._id }, 'secretkey');
    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
            title: "login success",
            token: token
        });
        console.log("Success");
    }
    else {
        res.status(400).json("User not found");
    }
}

const getus = (req, res) => {
    let token = req.headers.token;
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(400).json("Not Authorized");
        }
        User.findOne({ _id: decoded.userId }, (err, user) => {
            if (err) {
                return res.status(400).send("error");
            }
            return res.status(200).json({
                title: "user found",
                user: {
                    username: user.username
                }
            })
        })

    })
}

module.exports = { registerUser, getUser, getus };