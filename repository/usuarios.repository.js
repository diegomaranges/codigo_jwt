const Usuario = require('../models/usuarios.model');

const nuevoUsuario = async (model) => {
    const nuevoUsuario = new Usuario(model);
    const result = await nuevoUsuario.save();

    return result;
};

const buscarPorUsuario = async (username) => {
    return await Usuario.findOne({username});
};

const listarUsuarios = async () => {
    return await Usuario
        .find()
        .select({nombre: true, email: true});
};

module.exports = {
    nuevoUsuario,
    buscarPorUsuario,
    listarUsuarios
};