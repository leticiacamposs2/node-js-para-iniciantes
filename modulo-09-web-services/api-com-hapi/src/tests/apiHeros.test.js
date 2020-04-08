const assert = require('assert')
const api = require('../api')

let app = {}

describe('Suite de testes da API Heroes', function () {
    this.beforeAll(async () => {
        app = await api
    })

    it('listar /herois', async () => {
        const result = await app.inject({
            method: 'GET',
            url: '/herois'
        })

        const dados = JSON.parse(result.payload)
        const statusCode = result.statusCode

        console.log('result', result)

        assert.deepEqual(statusCode, 200)
        assert.ok(Array.isArray(dados))

    })
})