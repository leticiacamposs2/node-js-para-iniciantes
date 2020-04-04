/*
    0 Obter um usuário
    1 Obter o número de telefone de um usuário a partir de seu Id
    2 Obter o endereço pelo Id
*/
// importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisefy(obterTelefone)

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

const usuarioPromise = obterUsuario()
// para manipular o sucesso usamos a função .then
// para manipular erros, usamos o .catch
// usuario => telefone => telefone
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        console.log('resultado', resultado)
    })
    .catch(function (error) {
        console.error('DEU RUIM', error)
    })