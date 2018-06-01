const restful = require('node-restful')
const mongoose = restful.mongoose

ObjectId = mongoose.Schema.ObjectId;

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: ObjectId, ref: 'userSchema', required: true }
})

module.exports = restful.model('Vendor', vendorSchema)