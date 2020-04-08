const BaseRoute = require('./base/baseRoutes')
const Joi = require('joi')

class HeroRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            config: {
                validate: {
                    // payload -> body
                    // headers -> header
                    // params -> na URL : id
                    // query -> ?skip=10&limit=100
                    failAction: (request, headers, erro) => {
                        throw erro;
                    },
                    query: {
                        skip: Joi.number().integer().default(0),
                        limit: Joi.number().integer().default(10),
                        nome: Joi.string().min(3).max(100)
                    }
                }
            },
            handler: (request, headers) => {
                try {
                    const { skip, limit, nome } = request.query
                    
                    // const query = nome ? { nome: nome } : {}
                    // dessa forma ele filtra literalmente o nome digitado exemplo "homem aranha"

                    // modificando um pouco se eu digitar aranh
                    // consigo filtrar tudo o que contem no nome a palavra aranh

                    const query = {
                        nome: {
                            $regex: `.*${nome}*.`
                        }
                    }

                    return this.db.read(nome ? query : {}, skip, limit)
                }
                catch (error) {
                    console.log('Erro: ', error)
                    return "Erro interno no servidor"
                }
            }
        }
    }

    // create() {
    //     return {
    //         path: '/herois',
    //         method: 'POST',
    //         handler: (request, headers) => {
    //             return this.db.read()
    //         }
    //     }
    // }
}

module.exports = HeroRoutes