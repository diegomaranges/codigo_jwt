const bcrypt = require('bcrypt')

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, passwordDB) => {
    return bcrypt.compareSync(password, passwordDB)
};

module.exports = { comparePassword, encryptPassword };
