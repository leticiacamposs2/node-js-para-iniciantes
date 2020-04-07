// docker ps -a
// docker exec -it 1c392b767af8 mongo -u leticiacampos -p minhasenhasecreta --authenticationDatabase herois

// mostra bancos
show dbs

// muda database
use herois

// mostra tabelas (coleções de documentos)
show collections

db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-10-10'
})

db.herois.find()
db.herois.find().pretty()

for (let i = 0; i <= 10000; i++) {
    db.herois.insert({
        nome: `Clone-${i}`,
        poder: 'Velocidade',
        dataNascimento: '1998-10-10'
    })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({ nome: -1 })

// Para trazer só a coluna de poder
db.herois.find({}, { poder: 1, _id: 0 })

//Trazer quem tiver nome de Flash
db.herois.find({ nome: 'Flash' })

//create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-10-10'
})

//create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-10-10'
})

//read
db.herois.find()

//update: apaga outros dados
db.herois.update({ _id: ObjectId("5e8ba4ddd4a4db0e3252264f") },
    { nome: 'Mulher Maravilha' })

//update: mantém outros dados
db.herois.update({ _id: ObjectId("5e8ba4ddd4a4db0e3252264f") },
    { $set: { nome: 'Lanterna Verde' } })

// Se colocar o nome da propriedade errado, ele cria um novo campo:
db.herois.update({ _id: ObjectId("5e8ba4ddd4a4db0e3252264f") },
    { $set: { name: 'Lanterna Verde' } })

db.herois.update({ poder: 'Velocidade' },
    { $set: { poder: 'Super força' } })

//delete 
db.herois.remove({ nome: 'Mulher Maravilha' })