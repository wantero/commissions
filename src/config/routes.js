const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //USER Routes
    const userService = require('../api/user/userService')
    userService.register(router, '/user')

    //VENDOR Routes
    const vendorService = require('../api/vendor/vendorService')
    vendorService.register(router, '/vendor')
}