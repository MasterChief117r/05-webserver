/**
 * ---------------------------Ejercicio- Servir contenido estático------------------------
 * El ejercicio va enfocado a sustituir la impresión de mensjaes en las rutas por
 * contenido estático, en este caso páginas web
 */
const express = require('express')
const app = express()
const port = 8080

/**
 * Se creo carpeta public y dentro index.html
 * Se creará un Middlware para habiliar la ruta de index.html
 */

/**
 * Para servir contenido estático devemos indicarle a la aplicación cual es
 * la carpeta donde se almacenarán las páginas web, por medio de un Middleware
 * en este caso el Middleware  app.use(express.static('public))
 * 
 */
app.use(express.static('public')) //Middleware para la carpeta pública
//Este es un PATH estático

//app.get(/, (req, res) => {
// res.send('Home Page)
//}) //Esta linea nuca se iban a ejecutar por el Middleware

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})