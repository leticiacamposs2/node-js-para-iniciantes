# Módulo 02 - Manipulação de listas 📜

Neste módulo é feito o entendimento de manipulação de listas.

For, Foreach, ForIn, Map, Filter, Reduce

map([🐄, 🍠, 🐔, 🌽], cook)
=> [🍔, 🍟, 🍗, 🍿]

filter([🍔, 🍟, 🍗, 🍿], isVegetarian)
=> [🍟, 🍿]

reduce([🍔, 🍟, 🍗, 🍿], eat)
=> 💩

---

## 🤯 Aulas:

- [x] Introdução ao Capítulo
- [x] [Manipulando listas com For/ForIn/ForOf](./for-forin-forof)
- [x] [Criando nosso próprio Array.Map](./array-map)
- [x] [Criando nosso próprio Array.Filter](./array-filter)
- [x] [Criando nosso próprio Array.Reduce](./array-reduce)

---

## 🚀 Instalação

- `npm init -y` => Inicia o projeto com Node.js
- `npm install axios` => Instala a biblioteca Axios

---

## 🤯 Desestruturação de objetos

- Para pegar somente alguns atributos do item:

```
const item = {
	nome: 'Leticia',
	idade: 25,
}

const {nome} = item;
const {nome, idade} = item;
```

## Utilizado neste módulo

- [Api Star Wars](https://swapi.co/)
- Biblioteca axios: `npm install axios`