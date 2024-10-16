/**
 * --------------Ejercicio - Usando parciales (partials) en HBS
 * Este ejercicio esta enfocado en la reutilización de código por medio de
 * partials. En el ejercicio anterior por ejemplo no son funcionales las partes
 * de "generic" y "elements"
 */

/**
 * -------------Pasos para realizar este ejercicio--------------
 * 1- Crear una carpeta llamada partials dentro de views
 * 2- Agregar al código con hbs.RegisterPartials el registro de la carpeta partials
 * 3- Dentro de partials crea un archivo llamado como header.hbs
 * 4- Cortar el código de home2.hbs de la parte del header y pegarlos en header.hbs
 * nota: como modificaciones el codigo de home2.hbs se verá reflejado en home3.hbs
 */
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080

//Utilizacion de Handlebars hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//Uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname+'/Views/partials')

//Servir contenido estátatico public3 donde esta el templated
app.use(express.static('public3'))

/**
 * Enviando objeto a home3.hbs, página renderizada res.render
 * Esta página tiene aplicada partials
 */
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Royer Tzep',
        titulo: 'Curso de Node'
    })
})

/**
 * Enviando objeto a generic.hbs, pagina renderizada res.render
 * Esta pagina tiene aplicada partials
 */
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Royer Tzep',
        titulo: 'Curso de Node'
    })
})


/**
 * Enviando objeto a elements.hbs, pagina renderizada res.render
 * Esta pagina tiene aplicada partials
 */
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Royer Tzep',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})