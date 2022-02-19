const jwt = require('jsonwebtoken');

const generateToken = (objUser) => {
    return new Promise((resolve, reject) => {
        const payload = {
            id: objUser.id,
            username: objUser.username,
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
            }
        );
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { generateToken, verifyToken }
