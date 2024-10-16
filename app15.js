/**
 * ------Ejercicio - preparar el Webserver para subirlo a un hosting
 * 1- Crear variable de entorno instalar    npm i dotenv
 * 2- Crear en la raiz un archivo llamado .env configurar el puerto 8081
 * 3- En este archivo princpal agregar el require ('dotenv').config();
 * 4- En este archivo princpal agregar const port = process.env.PORT
 * 5- y en el listen utilizar la variable const port
 * 6- Especificar en el archivo package.json en script el comando
 * "start": "node app15.js"
 * 7- para verificar si funciona el script ejecutar el comando    npm start
 * 8- crear archivo .gitignore y agregar en .gitignore node_modules
 * 9- git init --si es la primera vez que se inicializa 
 * 10- git add .  -- este es para tomar nu tipo snapshot
 * 11- git commit -m "Primer commmit - webserver listo"
 * 12- git push
 */

/**
 * Debemos de arreglar un poco el código, por ejemplo tenemos declarado el puerto
 * y seguramente en el hosting que elijamos no este ese puerto 8080 dipsonible
 */
const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT

/**
 * -------Pasos para desplegar la aplicación en Railway.app----
 * 1- Registrarse en GitHub si no esta regsitrado
 * 2- Crea una cuenta en railway.app version rial con la cuenta de github o creeo
 * 3- Ir al correo registrado y verificar la cuenta
 * 4- git init
 * 5- git add .
 * 6- git commit -m "webserver listo"
 * 7- ir a ihub y crear un respositorio 05-webserver-railway
 * copiar los comandos en gitHub
 * git remote add origin ruta del repositorio
 * git branch -M main
 * git push -u origin main
 * 9- railway--new project -- GitHub repo -- buscar el repositorio -- deploy now
 * 10- ir a settings -- click Generate Domain -- probar la url dada
 */

//Utilización de Handelbars hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//Uso de parciales "codigo que se repite en mas de un lugar o pagians web"
hbs.registerPartials(__dirname+'/views/partials')

//servir contenido estático public3 donde esta el templated
app.use(express.static('public3'))

//Enviando agumentos a home3
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Royer Tzep', 
        titulo: 'Curso de Node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Royer Tzep', 
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Royer Tzep', 
        titulo: 'Curso de Node'
    })
})



app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'/public3/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname+'/public3/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public3/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})