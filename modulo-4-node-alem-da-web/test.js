const { deepEqual, ok } = require('assert')

const DEFAULT_ITEM_CADASTRAR = { 
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Heróis', () => {
    it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        //
        ok(null, expected)
    })    
});