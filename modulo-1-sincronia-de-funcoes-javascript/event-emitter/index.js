const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
    console.log('um usuario clicou', click)
})

const stdin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`Você digitou: ${value.toString().trim()}`)
})
