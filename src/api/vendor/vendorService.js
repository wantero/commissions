const Vendor = require('./vendor')

Vendor.methods(['get','post','put','delete'])
Vendor.updateOptions({new: true, runValidators: true})

module.exports = Vendor