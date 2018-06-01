const mongoose = require('mongoose')
mongoose.Promise = global.Promise //remove alert message
module.exports = mongoose.connect('mongodb://localhost/commissions')