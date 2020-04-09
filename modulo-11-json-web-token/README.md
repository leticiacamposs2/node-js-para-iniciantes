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
- [x] Configurando o JWT - plugins, testes e rota de login
- [x] Criando o módulo de autenticação de usuários e hash de senha com bcrypt

***

## Pacotes utilizados

- `npm i jsonwebtoken` - gera um token de identificação
- `npm i hapi-auth-jwt2` - intercepta todas as requisições de forma que todos os serviços tenham que pasasr um token válido
- `npm install bcrypt` - cria senhas criptografadas