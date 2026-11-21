const express = require('express')
const Alumno = require('./Modelos/Alumno')
const Asignatura = require('./Modelos/Asignatura')

const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/alumno', async (req, resp) => {
    try {
        const alumno = await Alumno.findAll()

        if (alumno.length > 0) {
            resp.status(200).json(alumno)
        } else {
            resp.status(402).json({ 'mensaje': 'Sin alumnos para mostrat' })
        }
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.post('/alumno', async (req, resp) => {
    try {
        const alumno = await Alumno.create(req.body)
        resp.status(200).json(alumno)
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.put('/alumno/:id', async (req, resp) => {
    try {
        const [updated] = await Alumno.update(req.body, {
            where: { id: req.params.id }
        })

        if (updated) {
            resp.status(200).json({ mensaje: 'Alumno actualziado' })
        } else {
            resp.status(400).json({ mensaje: 'Alumno no se actualizo' })
        }
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.delete('/alumno/:id', async (req, resp) => {
    try {
        const deleted = await Alumno.destroy({
            where: { id: req.params.id }
        })

        if (deleted) {
            resp.status(200).json({ mensaje: 'Alumno eliminado' })
        } else {
            resp.status(400).json({ mensaje: 'Alumno no se elimino' })
        }
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.get('/asignatura', async (req, resp) => {
    try {
        const asignatura = await Asignatura.findAll()

        if (asignatura.length > 0) {
            resp.status(200).json(asignatura)
        } else {
            resp.status(402).json({ 'mensaje': 'Sin asignaturas para mostrar' })
        }
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.post('/asignatura', async (req, resp) => {
    try {
        const asignatura = await Asignatura.create(req.body)
        resp.status(200).json(asignatura)
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.put('/asignatura/:id', async (req, resp) => {
    try {
        const [updated] = await Asignatura.update(req.body, {
            where: { idasignatura: req.params.id }
        })

        if (updated) {
            resp.status(200).json({ mensaje: 'Asignatura actualizada' })
        } else {
            resp.status(400).json({ mensaje: 'Asignatura no se actualizo' })
        }
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.delete('/asignatura/:id', async (req, resp) => {
    try {
        const deleted = await Asignatura.destroy({
            where: { idasignatura: req.params.id }
        })

        if (deleted) {
            resp.status(200).json({ mensaje: 'Asignatura eliminada' })
        } else {
            resp.status(400).json({ mensaje: 'Asignatura no se elimino' })
        }
    } catch (error) {
        resp.status(500).json(error)
    }
})

app.listen(5000, () => {
    console.log('Aplicacion ejecutando')
})