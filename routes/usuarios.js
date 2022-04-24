const { Router } = require("express");
const {usuariosGET, usuariosPOST, usuariosPUT, usuariosDELETE, usuariosPATCH} = require('../controllers/usuarios');

const router = new Router();


router.get('/', usuariosGET);

router.post('/:id', usuariosPOST);

router.put('/:id', usuariosPUT);

router.delete('/:id', usuariosDELETE);

router.patch('/', usuariosPATCH);

module.exports = router;