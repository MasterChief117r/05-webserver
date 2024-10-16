/**
 * ----------------Ejercicio - enviando argumentos desde el controlador
 * Instruccines para realizar este ejercicio
 * 1- Crear una copia de home.hbs para home2.hbs
 * 2- en el controlador de la pagina principal, crear un objeto con las
 * propiedades nombre: "tu nombre"    titulo:"Curso de Node"
 * 3- en el hbs sustituir {{}} las propiedades que queremos desplegar el
 * home2.hbs examinar el código
 * 
 */
const express = require('express')
const app = express()
const port = 8080

//utilización dehbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//Servir contenido estático public3 donde esta el templated
app.use(express.static('public3'))

//Enviando argumentos desde el controlador al template home2 (pagina renderizada)
app.get('/', (req, res) => {
    res.render('home2', {
        nombre: 'Royer Tzep',
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'public3/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname+'public3/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname+'public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * Par aejecutar este programa utilzar el comando   node app13.js
 * Visitar en el navegador la dirección http:///localhost:8080
 * ¿Se deslegó el sitio web con alguna modificacino?
 */