const Vendor = require('./vendor')
const errorHandler = require('../common/errorHandler')

Vendor.methods(['get','post','put','delete'])
Vendor.updateOptions({new: true, runValidators: true})
Vendor.after('post', errorHandler).after('put', errorHandler)

module.exports = Vendor