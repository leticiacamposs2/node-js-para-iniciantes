# 🤯 Módulo 9 - Node.js e Web Services - Criando serviços profissionais com Hapi.js

## Aulas

- [x] Introdução ao Capítulo
- [x] [Conhecendo o Módulo HTTP](./modulo-http)
- [x] Introdução ao Hapi.js
- [x] [Criando estrutura para criação de APIs com Hapi.js](./api-com-hapi)
- [x] [Entendendo o padrão RestFull para desenvolvimento de APIs](./padrao-restfull)
- [x] [Listando Heróis - GET](./padrao-restfull)
- [x] [Listando Heróis - Validando requisições com Joi](./padrao-restfull)
- [x] [Cadastrando Heróis - POST](./padrao-restfull)
- [x] [Atualizando Heróis - PATCH / PUT](./padrao-restfull)
- [x] [Removendo Heróis - DELETE](./padrao-restfull)

***

## Instalações

- `npm install hapi` 


## Dicas

```
function mapRoutes() {
    ['list', 'create', 'update'] // esses são os meus methods
    new HeroRoutes()['list']() //essa é a minha instancia chamando o objeto, pego a chave da classe e excuto ela para que se possa trabalhar dinâmicamente
}
```

Minhas rotas

```
    app.route([
        new HeroRoutes().list()
        new HeroRoutes().create()
        new HeroRoutes().update()
    ])
```

Tudo isso da para ser substituido pegando dinamicamente via parametro a instancia e o metodo

```
function mapRoutes(instance, methods) {
    return methods.map(method => instance[method]())
}
```

```
app.route([
    ...mapRoutes(new HeroRoute(context), HeroRoute.methods())
])
```

usando o rest/spread eu consigo destruir o objeto e tranformar em um item do meu array, de forma que não fique um array de array

resultado final: [ list(), create(), read() ]

## Resumo

Foi criado um teste para injetar uma requisição para mandar uma rota especifica só para testar se esta funcionando, a gente colocou para que a rota seja dinamica a partir dos metodos da classe, retornando so o necessario para que toda vez que eu precisar de uma nova rota eu altere em um unico lugar.