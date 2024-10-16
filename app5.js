/**
 * 
 * ---------------------------------Ejercicio - Introducción a EXPRESS Parte 2 --------------------------
 * Acá se valida la ruta http://localhost/hola-mundoo
 * 
 * 
 */
const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('Home Page')
    /**
     * Aca se esta enviando un mensaje directo, pero podriamos enviar
     * un sitio web, una opcion del sistema, etc
     */

})

app.get('/hola-mundo', function (req, res){
    res.send('Hola mundo en su respectiva ruta')
})

app.listen(8080);

/**
 * Al ejecutar esta aplicacion comprobar las siguientes rutas en el navegador 
 * ¿Que mensajes despliega y por que?
 * Comprobar una ruta no válida y analizar.
 */


/**
 * Corrección en la Ruta: La ruta original /hola mundo se ha cambiado a /hola-mundo. Las rutas no deben contener espacios. Si necesitas separar palabras en una ruta, usa guiones (-) o guiones bajos (_).

Aclaraciones:

La ruta '/' corresponde a la página principal (http://localhost:8080/). Cuando se accede a esta ruta, se muestra el mensaje "Home Page".
La ruta /hola-mundo muestra el mensaje "Hola mundo en su respectiva ruta" cuando se accede a http://localhost:8080/hola-mundo.
El servidor se ejecuta en el puerto 8080 y se muestra un mensaje en la consola indicando que el servidor está en funcionamiento.
Comprobar Rutas:

Al visitar http://localhost:8080/, verás "Home Page".
Al visitar http://localhost:8080/hola-mundo, verás "Hola mundo en su respectiva ruta".
Al visitar una ruta no válida (por ejemplo, http://localhost:8080/no-existe), el servidor mostrará un error 404 porque no hay ninguna ruta definida para esa dirección.
 */