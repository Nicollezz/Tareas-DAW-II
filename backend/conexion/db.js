
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'empresa_agregaciones',
    'root',
    'Oapj_1804.',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(() => console.log('conexion establecida'))
    .catch((error) => console.log(error))

module.exports = sequelize