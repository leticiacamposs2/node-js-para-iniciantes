const Mongoose = require('mongoose')

const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        required: true
    },
    inseredAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = Mongoose.model('herois', heroiSchema)