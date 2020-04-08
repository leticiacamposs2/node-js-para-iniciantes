const BaseRoute = require('./base/baseRoutes')

class HeroRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            handler: (request, headers) => {
                try {
                    const { skip, limit, nome } = request.query

                    let query = {}
                    if (nome) {
                        query.nome = nome
                    }

                    return this.db.read(query, parseInt(skip), parseInt(limit))
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