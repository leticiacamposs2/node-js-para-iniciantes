# Módulo 01 - Sincronia de funções Javascript 🚀

Neste módulo é feito o entendimento de como funciona as coisas por debaixo dos panos, passando por event loop e sincronia de funções Javascript. O instrutor Erick Wendel escreveu um artigo sobre este assunto: [gerenciamento do fluxo assincrono de operações em node.js](https://imasters.com.br/desenvolvimento/gerenciando-o-fluxo-assincrono-de-operacoes-em-nodejs)

---

## 🤯 Aulas:

- [x] Introdução ao Capítulo
- [x] [Entendendo o ciclo de vida de aplicações Javascript](#ciclo-de-vida-js)
- [x] [Trabalhando com Callbacks](./callbacks)
- [x] [Introdução a Promises](./promises)
- [ ] [Refatorando Callbacks para Promises](./refatoracao)
- [ ] Introdução a resolução de Promises com async/await
- [ ] Resolução de promises com sync/await
- [ ] Introdução à manipulação de eventos com EventEmitter
- [ ] Trabalhando com eventos com a classe EventEmitter


---

<div id="ciclo-de-vida-js">

## ⭕️ Ciclo de vida do JavaScript

- Funções que necessitam de recursos externos (acesso ao banco de dados ou arquivos) serão executados em background.
- O código não é executado sequencialmente.
- Lembre-se de manter a sequência do seu programa para evitar problemas.