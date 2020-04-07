# 🤯 Entendendo o padrão RestFull para desenvolvimento de APIs


## Diferenças Rest x Restfull

- Restful segue o padrão a risco
- Rest alguns conceitos

****

## Vantagens/Recursos

- Stateless -> salva o token
- Dados de clientes são armazenados em seus respectivos navegadores
- Em geral retornam JSON
- Nomenclatura
- Status de erro e sucesso

****

## Métodos HTTP

- GET - Obtém dados de um recurso
- POST - Criar item de um recurso
- PUT - Atualizar um recurso com uma nova representação (mando tudo para ele a alteração sobreescreve a anterior)
- PATCH - Atualiza um recurso parcialmente
- DELETE - Remove um recurso

****

## Padrões de URL

- `GET - /heroes`
- `POST - /heroes`
- `PUT - /heroes/:id` -> body { name, date, power }
- `PATCH - /heroes/:id` -> body { name }
- `DELETE - /heroes/:id`

- `GET - /heroes/:id` - filtra por id
- `GET - /heroes/:id/headquarters` - filtra por id e lista os headquartes existentes
- `GET - /heroes/:id/headquarters/:id` - filtra por id e trás o headquartes especifico
