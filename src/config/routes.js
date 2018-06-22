const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    //API Routes protected by Token JWT
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    //USER Routes
    const userService = require('../api/user/userService')
    userService.register(protectedApi, '/user')

    //VENDOR Routes
    const vendorService = require('../api/vendor/vendorService')
    vendorService.register(protectedApi, '/vendor')

    //Open API Routes
    const openApi = express.Router()     
    server.use('/oapi', openApi)
       
    const AuthService = require('../api/user/AuthService')     
    openApi.post('/login', AuthService.login)     
    openApi.post('/signup', AuthService.signup)     
    openApi.post('/validateToken', AuthService.validateToken)     
}