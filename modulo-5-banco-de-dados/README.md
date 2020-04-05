# Módulo 05 - Banco de Dados
Nosso projeto Multi-banco de dados 🚀

****

## 🤯 Aulas

- [x] Criando projetos multi-bancos de dados
- [ ] Trabalhando com o padrão Strategy para multi datasources
- [ ] [Design Patterns - Strategy](#padrao-strategies)
- [ ] Demonstração multi datasources com strategy design pattern

****
<div id="padrao-strategies">

## Padrão Strategies(GOF)- é um padrão comportamental.

- Trabalhando com multi-databases.
- Trabalha fortemente com a orientação à objetos.


**** 

## Instalação do docker

1. No Windows 10 home ou enterprise é necessário instalar o docker toolbox, acesso o [tutorial](https://docs.docker.com/toolbox/toolbox_install_windows/)

- No item "Step 3: Verify your installation" do tutorial execute o "Docker Quickstart Terminal" (imagem 1), execute o comando "docker run hello-world" e verifique o resultado conforme a imagem 4.

2. Após instalar o docker, segue o vídeo.

3. Acessar o Adminer (interface): http://192.168.99.100:8080/ (no vídeo é demonstrado o link localhost:8080 porém no windows é necessário utilizar esse ip, o mesmo acontece no link do mongodb)

4. Acessar o Mongodb: http://192.168.99.100:3000/ (no vídeo é demonstrado o link localhost:3000 porém no windows é necessário utilizar esse ip)

**** 

## Inicialização e Configuração do Docker

<b>Note:</b> Todos os comandos à seguir devem ser executados no terminal do Docker ("Docker Quickstart Terminal")

## Postgres

- Configurando a imagem do postgres

```
docker run \
     --name postgres \
     -e POSTGRES_USER=leticiacampos \
     -e POSTGRES_PASSWORD=minhasenhasecreta \
     -e POSTGRES_DB=heroes \
     -p 5432:5432 \
     -d \
     postgres
```

- Ver as imagens instaladas na máquina

` docker ps -a`

- Entrar no container postgres

`docker exec -it postgres /bin/bash`

- Após entrar no container postgres, roda o comando abaixo para iniciar a interface

```
docker run \
     --name adminer \
     -p 8080:8080 \
     --link postgres:postgres \
     -d \
     adminer
```

## MongoDB

- Configurando a imagem do MongoDB

```
docker run \
     --name mongodb \
     -p 27017:27017 \
     -e MONGO_INITDB_ROOT_USERNAME=admin \
     -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
     -d \
     mongo:4
```

- Configurando um Client para o MongoDB

```
docker run \
     --name mongoclient \
     -p 3000:3000 \
     --link mongodb:mongodb \
     -d \
     mongoclient/mongoclient
```

- Cria um usuário (admin) para acessar o mongo, também criar um banco de dados (herois) e realiza o login no mesmo

```
docker exec -it mongodb \
     mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
     --eval "db.getSiblingDB('herois').createUser({user: 'leticiacampos', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"
```

## Outros comandos necessários do docker

- Para ver todas as imagens que estão na máquina:

`docker ps -a`

- Para iniciar uma imagem que está instalada na máquina:

`docker start id_ou_nome_da_imagem`

- Para parar uma imagem que está instalada na máquina:

`docker stop id_ou_nome_da_imagem`

- Para Remover uma imagem da máquina:

`docker rm id_ou_nome_da_imagem`

****

<b>Note:</b> [outros comandos mais utilizados no docker](https://woliveiras.com.br/posts/comandos-mais-utilizados-no-docker/#Comoeuseiquaisasimagensdisponveisnomeurepositriolocal)
