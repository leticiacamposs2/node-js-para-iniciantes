/*
    0 Obter um usuário
    1 Obter o número de telefone de um usuário a partir de seu Id
    2 Obter o endereço pelo Id
*/

function obterUsuario() {
    setTimeout(function() {
        return {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        }
    }, 1000)
}

function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            telefone: '11349494',
            ddd: 11
        }
    }, 2000);
}

function obterEndereco(idUsuario) {

}

const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)

console.log('usuario', usuario);
// console.log('telefone', telefone);