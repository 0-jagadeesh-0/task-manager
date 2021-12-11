const User = require('../models/user');

const registerUser = async (req, res) => {
    const newUser = await User(req.body);
    console.log(newUser);
    await newUser.save();
    res.send("Sucess");
}
const getUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && user.password === password) {
        res.status(200).json(`Hi,${user.username}`);
    }
    else {
        res.status(400).json("User not found");
    }

}
module.exports = { registerUser, getUser };