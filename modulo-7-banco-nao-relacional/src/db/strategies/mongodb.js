const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')

class MongoDB extends ICrud {
    constructor() {
        super()
        this._herois = null
        this._driver = null
    }

    isConnected() {

    }

    defineModel() {
        this._herois = new Mongoose.Schema({
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

        const model = Mongoose.model('herois', this._herois)
    }

    connected() {
        Mongoose.connect('mongodb://leticiacampos:minhasenhasecreta@localhost:27017/herois',
            { useNewUrlParser: true }, function (error) {
                if (!error) return;
                console.log('Falha na conexão: ', error)
            })

        const connection = Mongoose.connection
        connection.once('open', () => console.log('database rodando'))
    }

    create(item) {
        console.log('O item foi salvo em MongoDB')
    }
}

module.exports = MongoDB