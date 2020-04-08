const BaseRoute = require('./base/baseRoutes')
const Joi = require('joi')

const failAction = (request, headers, erro) => {
    throw erro;
}

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
                tags: ['api'],
                description: 'Deve listar herois',
                notes: 'pode paginar resultados e filtar por nome',
                validate: {
                    // Mensagem sobre a exceção
                    // payload -> body
                    // headers -> header
                    // params -> na URL : id
                    // query -> ?skip=10&limit=100
                    failAction,
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

    create() {
        return {
            path: '/herois',
            method: 'POST',
            config: {
                tags: ['api'],
                description: 'Deve cadastrar herois',
                notes: 'deve cadastrar heroi por nome e poder',
                validate: {
                    failAction,
                    payload: {
                        nome: Joi.string().required().min(3).max(100),
                        poder: Joi.string().required().min(2).max(100)
                    }
                }
            },
            handler: async (request) => {
                try {
                    const { nome, poder } = request.payload
                    const result = await this.db.create({ nome, poder })
                    return {
                        message: 'Heroi cadastrado com sucesso',
                        _id: result._id
                    }
                }
                catch (error) {
                    console.log('Erro: ', error)
                    return error
                }
            }
        }
    }

    update() {
        return {
            path: '/herois/{id}',
            method: 'PATCH',
            config: {
                tags: ['api'],
                description: 'Deve atualizar heroi por id',
                notes: 'Pode atualizar qualquer campo',
                validate: {
                    params: {
                        id: Joi.string().required()
                    },
                    payload: {
                        nome: Joi.string().min(3).max(100),
                        poder: Joi.string().min(2).max(100)
                    }
                }
            },
            handler: async (request) => {
                try {
                    const { id } = request.params;

                    const { payload } = request
                    const dadosString = JSON.stringify(payload)
                    const dados = JSON.parse(dadosString)

                    const result = await this.db.update(id, dados)
                    if (result.nModified !== 1) return {
                        message: 'Não foi possível atualizar'
                    }
                    return {
                        message: 'Heroi atualizado com sucesso'
                    }
                }
                catch (error) {
                    console.log('Erro: ', error)
                    return 'Erro interno'
                }
            }
        }
    }

    delete() {
        return {
            path: '/herois/{id}',
            method: 'DELETE',
            config: {
                tags: ['api'],
                description: 'Deve remover o heroi por id',
                notes: 'O id tem que ser válido',                
                validate: {
                    failAction,
                    params: {
                        id: Joi.string().required()
                    }
                }
            },
            handler: async (request) => {
                try {
                    const { id } = request.params
                    const result = await this.db.delete(id)
                    if (result.n !== 1) {
                        return Boom.preconditionFailed('Id não encontrado no banco')
                    }
                    return {
                        message: "Heroi removido com sucesso"
                    }

                }
                catch (error) {
                    console.log("Erro: ", error)
                    return Boom.internal()
                }
            }
        }
    }
}

module.exports = HeroRoutes