const express = require('express')
const modelDemand = require('../models')


async function createDemand(req, res){

    try {
        const post ={
            userName: req.body.userName,
            adresseEmail: req.body.adresseEmail,
            sujetDemande: req.body.sujetDemande,
            message: req.body.message,
        }
    
        const user = await modelDemand.PostDemand.create(post)
    
        return res.status(201).json({
            message: 'Message envoyé avec success',
            info: user
        })
        
    } catch (e) {
        return res.status(500).json({
            message: 'Error',
            error: e.message
        })
    }

}

function getD(req, res) {
    return res.json({
        message: 'Hello world'
    })
}

module.exports ={
    createDemand,
    getD
}