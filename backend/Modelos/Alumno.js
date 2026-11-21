const { DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

const Alumno = sequelize.define('Alumno', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    Carrera: {
        type: DataTypes.STRING
    },
    registro: {
        type: DataTypes.STRING
    },
    fotoPlataforma: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Alumno',
    timestamps: false
})

module.exports = Alumno