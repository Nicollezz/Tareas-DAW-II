const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Carrito = sequelize.define('Carrito', {
    idcarrito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idproducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'idproducto'
    },
    isvProducto: {
        type: DataTypes.DOUBLE,
        field: 'isvProducto'
    },
    ordenCompra: {
        type: DataTypes.INTEGER,
        field: 'ordenCompra'
    }
}, {
    tableName: 'carrito',
    timestamps: false
});

module.exports = Carrito;