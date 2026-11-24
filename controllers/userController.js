const model = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


async function createU(req, res) {
    const salt = bcrypt.genSaltSync(10)
    const post ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt)

    }

    const ifExist = await model.User.findOne({where: {email : post.email}})
    if (ifExist) {
        res.status(409).json({
            message : 'Utilisateur existe déjà'
        })
    }

    const user = await model.User.create(post).then(result =>{
        res.json({
            'message': 'user cree',
            'status': 201,
            'data': result,
        })
    }).catch(err => err)

}

async function get(req, res) {
    res.send('Gouud monning every body')
}

async function login(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(401).json({
            "message" : 'email ou mot de passe incorrect',
        })
    }

    const user = await model.User.findOne({where: {email}})
    if (!user) {
        return res.status(401).json({
            'message': 'Email ou Mot de passe incorrect'
        })
    }
    const verification = bcrypt.compareSync(password, user.password)
    if (!user || !verification) {
        return res.status(401).json({
            'message': 'Email ou Mot de passe incorrect'
        })
    }

    const token = jwt.sign({userId: user.id}, process.env.JWT_KEY, {expiresIn: "24h"})
    res.json({
        'message': "connexion reussie",
        'name': user.firstName,
        'lasname': user.lastName,
        'email': user.email,
        'token': token
    })
}

module.exports ={
    createU,
    get,
    login
}