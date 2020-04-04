const service = require('./service')

async function main() {
    try {
        const results = await service.obterPessoas('a')

        const names = []
        results.results.forEach(function (item) {
            names.push(item.name);
        })

        console.log('names', names)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()
