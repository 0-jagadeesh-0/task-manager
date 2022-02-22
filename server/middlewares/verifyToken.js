const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.token;
    try {
        if (authHeader) {
            const token = authHeader;
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    res.status(401).json("Invalid Token.")
                } else {
                    req.user = user;
                    next();
                }
            })
        }
        else {
            res.status(400).json("Not Authenticated.");
        }
    } catch (error) {
        res.status(400).json("Not Authenticated.")
    }
}

module.exports = { verifyToken };