/*
    0 Obter um usuário
    1 Obter o número de telefone de um usuário a partir de seu Id
    2 Obter o endereço pelo Id
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '11349494',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario) {

}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.error('DEU RUIM EM USUÁRIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM EM USUÁRIO', error1)
            return;
        }
    })
})