const { Router } = require('express');
const { nuevoUsuario, signin, obtieneUsuarios } = require('../controller/usuario.controller');
const { validateToken } = require('../middleware/validate-token.middleware');

const router = Router();

router.post('/', nuevoUsuario);
router.post('/signin', signin);
router.get('/', validateToken, obtieneUsuarios)

module.exports = router;