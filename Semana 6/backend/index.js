const express = require('express')
const Alumno = require('./Modelos/Alumno')

const app = express()

app.use(express.json())

// punto de entrada
// metodo (get, post, put, delete)
// request , response
// codidos respuesta 200,400,500

app.get('/alumno', async (req, resp) => {
    try {

        //select *from alumnos

        const alumno = await Alumno.findAll();

        if (alumno.length > 0) {
            resp.status(200).json(alumno)
        }
        else {
            resp.status(402).json({ 'mensaje': 'Sin alumnos para mostrat' })
        }


    } catch (error) {
        resp.status(500).json(error)
    }
})


app.post('/alumno', async (req, resp) => {
    try {

        //insert into alumnos values(?,?)

        const alumno = await Alumno.create(req.body)
        resp.status(200).json(alumno)

    } catch (error) {
        resp.status(500).json(error)
    }
})

app.put('/alumno/:id', async (req, resp) => {

    try {


        //update alumbo set columna=? where=?

        const [updated] = await Alumno.update(req.body, {
            where: { id: req.params.id }
        })

        if (updated) {
            resp.status(200).json({ mensaje: 'Alumno actualziado' })
        }
        else {
            resp.status(400).json({ mensaje: 'Alumno no se actualizo' })
        }

    } catch (error) {
        resp.status(500).json(error)
    }
})


app.delete('/alumno/:id', async (req, resp) => {
    try {

        //delete from alumnos where

        const deleted = await Alumno.destroy({
            where: { id: req.params.id }
        })

        if (deleted) {
            resp.status(200).json({ mensaje: 'Alumno eliminado' })
        }
        else {
            resp.status(400).json({ mensaje: 'Alumno no se elimno' })
        }

    } catch (error) {
        resp.status(500).json(error)
    }
})
app.listen(5000, () => {
    console.log('Aplicacion ejecutando')
})