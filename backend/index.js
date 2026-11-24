const express = require('express');
const cors = require('cors');
const Producto = require('./modelos/Producto')
const sequelize = require('./conexion/db');

const app = express();

app.use(cors());
app.use(express.json());


// la ruta
// metodo (GET, post, put, delelt,e patch)
// entrada - salida request, reponse
// codigo respuesta

// 1. Contar productos en la tabla:
app.get('/contar-productos', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('*')), 'total_productos']
            ]
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 2. Calcular el valor total de todos los productos
app.get('/suma-valor', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ]
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 3. Obtener el valor promedio de los productos
app.get('/promedio-valor', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio']
            ]
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 4. Encontrar el producto con el valor más alto
app.get('/valor-maximo', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                [sequelize.fn('MAX', sequelize.col('value')), 'valor_maximo']
            ]
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 5. Encontrar el producto con el valor más bajo
app.get('/valor-minimo', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                [sequelize.fn('MIN', sequelize.col('value')), 'valor_minimo']
            ]
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 6. Contar el número de productos por tipo de moneda
app.get('/contar-por-moneda', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'valueCurrency',
                [sequelize.fn('COUNT', sequelize.col('*')), 'cantidad_total']
            ],
            group: ['valueCurrency']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 7. Calcular el valor promedio por tipo de moneda
app.get('/promedio-por-moneda', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'valueCurrency',
                [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio']
            ],
            group: ['valueCurrency']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 8. Obtener el valor total por tipo de producto
app.get('/suma-por-tipo', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ],
            group: ['productType']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 9. Encontrar el valor máximo y mínimo por tipo de producto
app.get('/max-min-por-tipo', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('MAX', sequelize.col('value')), 'valor_maximo'],
                [sequelize.fn('MIN', sequelize.col('value')), 'valor_minimo']
            ],
            group: ['productType']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 10. Calcular el valor promedio por categoría
app.get('/promedio-por-categoria', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio']
            ],
            group: ['categoryCode']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 11. Contar productos disponibles en cada estado
app.get('/contar-por-estado', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'status',
                [sequelize.fn('COUNT', sequelize.col('*')), 'cantidad_total']
            ],
            group: ['status']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 12. Calcular el valor total en cada marca
app.get('/suma-por-marca', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'brandCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
            ],
            group: ['brandCode']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 13. Obtener el número total por código de producto
app.get('/contar-por-codigo', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'partNumber',
                [sequelize.fn('COUNT', sequelize.col('*')), 'cantidad_total']
            ],
            group: ['partNumber']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 14. Calcular el valor promedio y la cantidad por cada línea
app.get('/promedio-cantidad-por-linea', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'lineCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio'],
                [sequelize.fn('COUNT', sequelize.col('*')), 'cantidad_total']
            ],
            group: ['lineCode']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

// 15. Encontrar el valor más alto por planner
app.get('/maximo-por-planificador', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'plannerCode',
                [sequelize.fn('MAX', sequelize.col('value')), 'valor_maximo']
            ],
            group: ['plannerCode']
        })

        if (result.length > 0) {
            resp.status(200).json(result)
        }
        else {
            resp.status(400).json({ 'mensaje': 'No hay data' })
        }
    } catch (error) {
        resp.status(500).json({ 'mensaje': 'Ocurrio un error' + error })
    }
});

app.listen(5000, () => {
    console.log('ejecutando backend')
})