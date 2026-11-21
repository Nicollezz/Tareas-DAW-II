const { DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

const Asignatura = sequelize.define('Asignatura', {
    idasignatura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    codigo: {
        type: DataTypes.STRING
    },
    idestudiante: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'Asignatura',
    timestamps: false
})

module.exports = Asignatura