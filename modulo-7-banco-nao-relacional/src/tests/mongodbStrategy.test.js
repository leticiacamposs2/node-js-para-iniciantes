const assert = require('assert')
const MongoDb = require('../db/strategies/mongodb')
const Context = require('../db/strategies/base/contextStrategy')

const context = new Context(new MongoDb())
describe('MongoDB Suite de testes', function () {
    this.beforeAll(async () => {
        await context.connect()
        // await context.create(MOCK_HEROI_DEFAULT)
        // const result = await context.create(MOCK_HEROI_ATUALIZAR)
        // MOCK_HEROI_ID = result._id;
    })

    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = 'Conectado'

        assert.deepEqual(result, expected)
    })
})
