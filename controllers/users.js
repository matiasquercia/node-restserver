
const { response, request } = require('express');


const usersGet = (req = request, res = response) => {

    const { name, age, id = 'no ID' } = req.query;

    res.json({
        msg: 'get API - controlador',
        name,
        age,
        id
    });
}

const usersPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}

const usersPost = (req, res = response) => {

    const {name, age} = req.body;

    res.status(201).json({
        msg: 'post API',
        name,
        age
    });
}

const usersDelete = (req, res = response) => {

    res.json({
        msg: 'delete API',
    });
}

const usersPatch = (req, res = response) => {

    res.json({
        msg: 'patch API',
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
}