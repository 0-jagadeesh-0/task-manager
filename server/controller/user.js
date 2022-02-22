const User = require('../models/user');
const bcrypt = require('bcrypt');
const { generateToken } = require('../middlewares/generateToken');

const registerUser = async (req, res) => {
    const newUser = await User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    await newUser.save();
    res.send(newUser);
}
const getUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && bcrypt.compareSync(password, user.password)) {
            let token = generateToken(user._id);
            res.status(200).json({
                title: "login success",
                userId: user._id,
                token: token
            });
        }
        else {
            res.status(400).json("User not found");
        }
    }
    catch {
        res.status(400).json({
            error: "Invalid details"
        })
    }

}


module.exports = { registerUser, getUser };