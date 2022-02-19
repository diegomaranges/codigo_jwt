const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuariosRouter = require('./router/usuarios.router');
const { dbConnection } = require('./config/mongodb');

require('dotenv').config();

const app = express();

dbConnection();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/users', usuariosRouter);

app.listen(process.env.PORT, () => {
    console.log('run server...');
});
