const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null;
        this._herois = null;
    }

    async isConnected() {
        try {
            await this._driver.authenticate()
            return true;
        }
        catch (error) {
            console.log("Erro:", error)
            return false;
        }
    }

    async create(item){
        const {dataValues} = await this._herois.create(item);
        return dataValues;
    }

    async connect() {
        this._driver = new Sequelize(
            'heroes',
            'leticiacampos',
            'minhasenhasecreta',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )
        await this.defineModel()
    }

    async defineModel() {
        this._herois = this._driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: Sequelize.STRING,
                required: true
            },
            poder: {
                type: Sequelize.STRING,
                required: true
            }
        }, {
            tableName: 'TB_HEROIS',
            freezeTableName: false,
            timestamps: false
        })
        await this._herois.sync()
    }
}

module.exports = Postgres