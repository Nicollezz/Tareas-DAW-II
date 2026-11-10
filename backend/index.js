const express = require('express')
const Producto = require('./Modelos/Producto')
const cors = require('cors')
const Carrito = require('./Modelos/Carrito') 
const sequelize = require('./db/connection')

const app = express()

app.use(express.json());

app.use(cors());

//get, post, put, delete

// punto de entrada - url
// reque - response
// metodo 
// codigos de respuesta 200, 404, 500, 401, 403 , etc...

app.get('/producto', async (req, res) => {

    try {
        //select *from producto
        const producto = await Producto.findAll();

        if (producto.length > 0) {
            res.status(200).json(producto)
        }
        else {
            res.status(400).json({ 'mensjae': 'Sin productos para mostrar' })
        }

    } catch (error) {
        res.status(500).json({ 'error': error })
    }
})

app.post('/producto', async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);

       
        const nuevoProducto = await Producto.create(req.body);

        res.status(200).json({
            mensaje: "¡Producto creado con éxito!",
            producto: nuevoProducto
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.put('/producto/:id', async (req, res) => {



    try {
        let idProducto = req.params.id

        console.log(idProducto)

        const [updated] = await Producto.update(req.body, {
            where: { idProducto: idProducto }
        });

        console.log(updated)
        if (updated > 0) {
            res.status(200).json({ mensaje: 'Se actualizó el producto' })
        } else {
            res.status(400).json({ mensaje: 'No se actualizó el producto' })
        }


    } catch (error) {
        res.status(500).json({ 'mensjae': error })
    }
})

app.delete('/producto/:id', async (req, res) => {


    try {
    

        const deleted = await Producto.destroy({
            where: { idProducto: req.params.id }
        })

        if (deleted) {
            res.status(200).json({ mensaje: 'Producto Eliminado' })
        }
        else {
            res.status(400).json({ 'mensjae': 'informacion de producto no se elimina' })
        }


    } catch (error) {
        res.status(500).json({ 'mensjae': error })
    }
})

app.listen(5000, () => {
    console.log('Backend corriendo')
})


app.get('/carrito/pagar/:ordenCompra', async (req, res) => {
    try {
        const { ordenCompra } = req.params;

        const query = `
            SELECT SUM(p.precioProducto + c.isvProducto) AS totalPagar 
            FROM carrito c
            JOIN Producto p ON c.idproducto = p.idProducto
            WHERE c.ordenCompra = :ordenCompra
        `;

        const [resultado] = await sequelize.query(query, {
            replacements: { ordenCompra },
            type: sequelize.QueryTypes.SELECT
        });

        const total = resultado && resultado.totalPagar ? Number(resultado.totalPagar) : 0;

        res.status(200).json({ totalPagar: total });

    } catch (error) {
        console.error("Error al calcular pago:", error);
        res.status(500).json({ error: error.message });
    }
})

app.get('/carrito/:ordenCompra', async (req, res) => {
    try {
        let ordenCompra = req.params.ordenCompra;

        const query = `
            SELECT c.idcarrito, c.idProducto, p.nombreProducto, p.precioProducto, c.isvProducto, c.ordenCompra 
            FROM carrito c
            JOIN Producto p ON c.idProducto = p.idProducto
            WHERE c.ordenCompra = :ordenCompra
        `;

        const itemsCarrito = await sequelize.query(query, {
            replacements: { ordenCompra },
            type: sequelize.QueryTypes.SELECT
        });

        if (itemsCarrito.length > 0) {
            res.status(200).json(itemsCarrito);
        } else {
            res.status(400).json({ mensaje: 'No hay productos en esta orden de compra' });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/carrito', async (req, res) => {
    try {
        console.log("Datos recibidos en carrito:", req.body);
        
       
        const idProd = req.body.idproducto || req.body.idProducto;
        const { isvProducto, ordenCompra } = req.body;

        if (!idProd || !ordenCompra) {
            return res.status(400).json({ error: "Faltan datos obligatorios (idproducto u ordenCompra)" });
        }

        const nuevoCarrito = await Carrito.create({
            idproducto: idProd,
            isvProducto: isvProducto || 0,
            ordenCompra: ordenCompra
        });

        res.status(200).json({
            mensaje: "¡Producto agregado al carrito con éxito!",
            carrito: nuevoCarrito
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.delete('/carrito/:id', async (req, res) => {
    try {
        const deleted = await Carrito.destroy({
            where: { idcarrito: req.params.id }
        });

        if (deleted) {
            res.status(200).json({ mensaje: 'Producto eliminado del carrito' });
        } else {
            res.status(400).json({ mensaje: 'El producto no existe en el carrito' });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});