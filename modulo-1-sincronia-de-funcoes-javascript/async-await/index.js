/*
    0 Obter um usuário
    1 Obter o número de telefone de um usuário a partir de seu Id
    2 Obter o endereço pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    // quando der algum problema --> reject(ERRO)
    // quando sucess --> RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('DEU RUIM DE VERDADE!'))

            return resolve({
                id: 1,
                nome: 'Leticia',
                dataNascimento: new Date(),
            });
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 86,
            });
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, {
            rua: 'Dos bobos',
            numero: 0,
        }, 2000);
    });
}

// 1º Passo adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main() {
    try {
        const usuario = await obterUsuario()
        const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id)

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
    } catch(error) {
        console.log('DEU RUIM', error)
    }
}