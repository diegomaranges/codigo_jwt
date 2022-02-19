const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.SOURCE_DATABASE_MONGO);
        console.log('connect DB');
    } catch (error) {
        console.log('error de conexion');
        console.log(error);
    }
};

module.exports = {
    dbConnection
};