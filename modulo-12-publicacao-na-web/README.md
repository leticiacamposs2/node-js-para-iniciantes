# 🤯 Módulo 12 - Módulo 12 - Publicação de serviços na Web

## Aulas

- [x] Introdução ao Capítulo
- [x] Trabalhando com multi-environments (development, production)
- [x] MongoDB online e gratuito com Mongo Lab
- [x] [Publicação de nossos serviços e bancos de dados gratuitos com Heroku](./app-heroku)
- [ ] Trabalhando com PM2 para gerência de apps
- [ ] Expondo cobertura de código com Instanbul

***

## Pacotes

- `npm i dotenv`
- `npm i -g cross-env`
- `cross-env NODE_ENV=prod npm t`
- `npm run test:prod`
- `npm install -g heroku`

## Comandos heroku para publicação via terminal

- `heroku login`
- `heroku apps:list` - lista tudo o que tem na nossa conta publicado
- `heroku apps:create cursonodebr-leticiacamposs2` - Gera a url com esse comando, nesse caso: https://cursonodebr-leticiacamposs2.herokuapp.com/ e https://git.heroku.com/cursonodebr-leticiacamposs2.git
- `git remote -v`
- `git init`  
- `heroku git:remote --app cursonodebr-leticiacamposs2` - retorna: set git remote heroku to https://git.heroku.com/cursonodebr-leticiacamposs2.git
- `heroku apps:destroy` - caso queira excluir um app heroku 

- `git add .`
- `git commit -m "v1"` 
- `git push heroku master` - gera a url https://git.heroku.com/cursonodebr-leticiacamposs2.git
- `heroku logs` 