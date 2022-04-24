const { response } = require('express');

const usuariosGET = (req, res = response) => {

    //obtener parametros query
    const {nombre = "Sin nombre", apikey = " No ApiKey "} = req.query;

    res.json({
        msg: 'GET API - Controlador',
        nombre,
        apikey
    })
}

const usuariosPOST = (req, res = response) => {

    // Obtener el body de la petición
    const {nombre, edad} = req.body;

    res.json({
        msg: 'POST API - Controlador',
        nombre,
        edad
    })
}

const usuariosPUT = (req, res = response) => {

    const { id } = req.params;
 
    res.json({
        msg: 'PUT API - Controlador',
        id
    })
}

const usuariosDELETE = (req, res = response) => {

    res.json({
        msg: 'DELETE API - Controlador'
    })
}

const usuariosPATCH = (req, res = response) => {

    res.json({
        msg: 'PATCH API - Controlador'
    })
}


module.exports = {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosDELETE,
    usuariosPATCH
}