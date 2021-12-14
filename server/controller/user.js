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
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && bcrypt.compareSync(password, user.password)) {
            let token = jwt.sign({ userId: user._id }, 'secretkey');
            res.status(200).json({
                title: "login success",
                token: token
            });
            console.log("Success");
        }
        else {
            return res.status(400).json("User not found");
        }
    }
    catch {
        res.status(400).json({
            error: "Invalid details"
        })
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