const Vision = require('vision')
const Inert = require('inert')

const Hapi = require('hapi')
const HapiJwt = require('hapi-auth-jwt2')
const HapiSwagger = require('hapi-swagger')

const Context = require('./db/strategies/base/contextStrategy')
const MongoDb = require('./db/strategies/mongodb/mongodb')
const HeroiSchema = require('./db/strategies/mongodb/schemas/heroisSchema')

const HeroRoute = require('./routes/heroRoutes')
const AuthRoute = require('./routes/authRoutes')

const JWT_SECRET = 'MINHA_SENHA_123'

const app = new Hapi.Server({
    port: 5000
})

function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}

async function main() {
    const connection = MongoDb.connect()
    const context = new Context(new MongoDb(connection, HeroiSchema))

    const swaggerOptions = {
        info: {
            title: 'API Herois - #CursoNodeBR',
            version: 'v1.0'
        },
        lang: 'pt'
    }

    await app.register([
        HapiJwt,
        Vision,
        Inert,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ])

    app.auth.strategy('jwt', 'jwt', {
        key: JWT_SECRET,
        // options: {
        //     expiresIn: 20
        // },
        validate: (dado, request) => {
            // verificca no banco se usuário continua ativo
            // verifica no banco se usuário continua pagando
            
            return {
                isValid: true
            }
        }
    })

    app.auth.default('jwt')

    app.route([
        ...mapRoutes(new HeroRoute(context), HeroRoute.methods()),
        ...mapRoutes(new AuthRoute(JWT_SECRET), AuthRoute.methods())
    ])
    await app.start()
    console.log('Servidor rodando na porta', app.info.port)

    return app
}
module.exports = main()