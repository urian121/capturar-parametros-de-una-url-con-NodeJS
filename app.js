const express = require('express') // incluyo mediante la orden require() el módulo de Express
const app = express(); //Creo una aplicación de Express
const url = require('url'); //Requiero paquete url  que ya viene con NodeJS

app.get('/', (req, res)=> {
    const adr = 'http://localhost:8080/index.htm?edad=25&sexo=masculino&profesion=developer';
    const q = url.parse(adr, true); //Uso el metodo 'parse' que viene en el modulo url

    console.log(q); //Me devuelve un objeto, con toda la información de la URL
    console.log(q.host); //Devuelve 'localhost:8080'
    console.log(q.port); //Devuelve  el puerto 8080
    console.log(q.hostname) //Devuelve el Host  localhost
    console.log(q.pathname); //Devuelve '/index.htm'
    console.log(q.search); //Devuelve '?edad=25&sexo=masculino'

    //Aceddiendo a cada uno de los Parametros de la URL
    const queryParamts = q.query; //Devuelve an object: { edad: 25, sexo: 'masculino', profesion:developer }
    console.log(queryParamts.sexo); //Devuelve 'Masculino'
    //console.table(q.query)
  res.send('<p style="margin:0 auto; text-align: center;">Hola, Comunidad <strong> Web Developer.<strong></p>')
})

PORT = 5300
app.listen(PORT, ()=>{
    console.log(`Mi servidor corriendo en el puerto ${PORT}`);
})