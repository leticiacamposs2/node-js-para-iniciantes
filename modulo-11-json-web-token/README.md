# 🤯 Módulo 11 - Autenticação com Json Web Token
Aprendendo conceitos de manipulação de usuários, autenticação e padrão Json Web Token, trabalhando com a máquina do cliente.

***

## Padrão JSON Web Token

- API envia um Token para acesso aos serviços
- Cliente envia este <i>token</i> via <i>headers</i>
- A cada request este token é validado
- Refresh Token
- O site [jwt.io](https://jwt.io/) é um decodificador

***

## Aulas

- [x] Introdução ao Capítulo
- [x] Como funciona o Json Web Token?
- [ ] Configurando o JWT - plugins, testes e rota de login
- [ ] Criando o módulo de autenticação de usuários e hash de senha com bcrypt

***

## Pacotes utilizados

- `npm i jsonwebtoken`
- `npm i hapi-auth-jwt2`