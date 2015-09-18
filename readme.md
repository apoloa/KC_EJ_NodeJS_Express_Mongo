# Ejercicios del curso de Node.js, Express y Mongo de KeepCoding

1. [Hoisting](#Hoisting)
2. [Servidor Basico](#Servidor-Basico)
3. [Callbacks](#Callbacks)
4. [Inicializaciones](#Inicializaciones)
5. [Comparaciones](#Comparaciones)
6. [Leer Fichero](#Leer-Fichero)
7. [This y el Bind](#This-y-el-Bind)
8. [Closures](#Closures)
9. [Prototipos](#Prototipos)
10. [Extender](#Extender)
11. [Mixin](#Mixin)
12. [Async](#Async)
13. [EventEmiter](#EventEmiter)
14. [Modules](#Modules)
15. [Express Basico](#Express-Basico)
16. [Node Api](#Node-Api)

Hoisting
========
> Carpeta **00_hoisting**

Servidor Basico
===============
> Carpeta **01_servidorBasico**

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