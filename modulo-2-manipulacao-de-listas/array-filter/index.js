const { obterPessoas } = require('../service')

/*

{
    const item = {
        name: 'Leticia',
        idade: 25
    }
}

const { nome } = item
console.log(nome)

-- desta forma eu extraio somente o nome da minha constante item
*/

async function main() {
    try {
        const { results } = await obterPessoas('a')

        const familiaLars = results.filter(function (item) {
            // por padrão precisa retornar um booleano
            // para informar se deve manter ou remover da lista
            // false = remove da lista
            // true = mantém
            // não encontrou = -1
            // encontrou = posicaoNoArray
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log(names)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}