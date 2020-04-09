const assert = require('assert')
const api = require('../api')

let app = {}
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImEiLCJpZCI6MSwiaWF0IjoxNTg1NTk2OTE3fQ.HyLYA-DBER_zo4ePHrvfC6dBmSpDV5Q8mSEAxaTt9Vs'

describe('Auth test suite', function () {
    this.beforeAll(async () => {
        app = await api
    })

    it('deve obter um token', async () => {
        const result = await app.inject({
            method: 'POST',
            url: '/login',
            payload: {
                username: 'leticia',
                password: '123'
            }
        })

        const statusCode = result.statusCode
        const dados = JSON.parse(result.payload)

        assert.deepEqual(statusCode, 200)
        assert.ok(dados.token.length > 10)
    })
})