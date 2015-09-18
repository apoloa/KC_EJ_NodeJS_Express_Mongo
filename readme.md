# Ejercicios del curso de Node.js, Express y Mongo de KeepCoding

1. [Hoisting](#hoisting)
2. [Servidor Basico](#servidor-basico)
3. [Callbacks](#callbacks)
4. [Inicializaciones](#inicializaciones)
5. [Comparaciones](#comparaciones)
6. [Leer Fichero](#leer-fichero)
7. [This y el Bind](#this-y-el-bind)
8. [Closures](#closures)
9. [Prototipos](#prototipos)
10. [Extender](#extender)
11. [Mixin](#mixin)
12. [Async](#async)
13. [EventEmiter](#eventEmiter)
14. [Modules](#modules)
15. [Express Basico](#express-Basico)
16. [Node Api](#node-api)

Hoisting
========
> Carpeta **00_hoisting**

El interprete va a mover al principio de su contexto la declaración, manteniendo la inicialización donde estaba. **RECOMENDACIÓN: Si el código es complejo, declarar las variables al principio**

Este ejercicio muestra el funcionamiento del hoisiting, mediante una funcion que pinta en consola y muestra despues como quedaria una vez aplicado el hoisting. 

Servidor Basico
===============
> Carpeta **01_servidorBasico**

Estas lineas del proyecto te permiten crear un servidor muy sencillo. Existe una llamada de require, que esta funcion nos permite buscar un modulo y incorporarlo en el proyecto.

El require devuelve un objeto **singleton** no podemos crear más de una instancia llamando a require.

Es proyecto tiene un package.json, dicho paquete contiene información de nuestro proyecto. 
```json
{
  "name": "01_servidor_basico", //Nombre del proyecto
  "version": "1.0.0", //Versión del proyecto
  "description": "Este es un servidor basico", //Descripción del proyecto
  "main": "index.js",// El elemento el cual contiene el inició del programa
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }, // Los scripts que se pueden ejecutar
  "author": "Adrián Polo Alcaide", // El autor del proyecto
  "license": "ISC", // Licencia
  "dependencies": { // Librerias y su dependencias
    "chance": "^0.7.7",
    "express": "^4.13.3"
  }
}
```

El caracter de las dependencias **^** significa que actualizara excepto cuando los cambios sean significativos

Callbacks
=========
> Carpeta **02_callbacks**

Inicializaciones
================
> Carpeta **03_inicializacion**

Comparaciones
=============
> Carpeta **04_comparaciones**

Leer Fichero
============
> Carpeta **05_leerFicheros**

This y el Bind
==============
> Carpeta **06_this_bind**

Closures
=======
> Carpeta **07_closures**

Prototipos
==========
> Carpeta **08_prototipos**

Extender
========
> Carpeta **09_extender**

Mixin
=====
> Carpeta **10_mixin**

Async
=====
> Carpeta **11_async**

EventEmiter
===========
> Carpeta **12_eventEmiter**

Modules
=======
> Carpeta **13_modules**

Express Basico
=============
> Carpeta **14_expressBasico**

Node Api
========

> Carpeta **15_nodeApi**

Este proyecto se ha generado con express_generator, para ello hemos ejecutado el comando para la instalación:

> sudo npm install express-generator -g

Este comando creara una programa de lineas de comandos que permitirá crear la estructura de express.  

1. **npm init** - Nos permite iniciar el npm dentro de la carpeta, 
2. **express . --ejs** - Nos creara la estructura de express, el parametro **.** es el nombre de la carpeta que queremos crear, el parametro **--ejs** es el tipo de *views*.
3. **nodemon ./bin/www** - mediante esta instrucción arranca el servidor de express.
4. **DEBUG=15_nodeApi:* nodemon ./bin/www** - Esto nos permite mostrar los mensajes de debug del programa, debemos añadir un campo DEBUG=*carpeta:ficheros*.