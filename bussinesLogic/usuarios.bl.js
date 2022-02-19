const { nuevoUsuario, buscarPorUsuario, listarUsuarios } = require('../repository/usuarios.repository');
const { encryptPassword } = require('../helpers/password.utils');

const altaUsuario = async (objUsuario) => {
    objUsuario.password = encryptPassword(objUsuario.password);
    return await nuevoUsuario(objUsuario)
};

const buscarUsuarioDB = async (username) => {
    return await buscarPorUsuario(username);
};

const listarUsuariosActivos = async () => {
    return await listarUsuarios();
};

module.exports = { altaUsuario, buscarUsuarioDB, listarUsuariosActivos };