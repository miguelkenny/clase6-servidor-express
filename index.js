const Contenedor = require('./Contenedor.js');
const archivo = './productos.txt'

const express = require('express');
const app = express();
const puerto = 8080;

const contenedor = new Contenedor.Contenedor(archivo);

async function ejecutar(){

    let productos = await contenedor.getAll();
    app.get('/productos', (req,res) => {
        res.send(productos)
    });

    let productoRandom = await contenedor.getById(Math.floor((Math.random(productos.length) * (1 + 1)) + 1));
    app.get('/productoRandom', (req,res) => {
        res.send(productoRandom)
    });
} 

app.listen(puerto, () => {
    console.log(`Servidor escuchando puerto ${puerto}`);
})

ejecutar();