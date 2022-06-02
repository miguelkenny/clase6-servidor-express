/* const http = require('http');
const puerto = 8080;

const server = http.createServer((req, res) => {
    const hora = new Date().getHours();
    if(hora >= 6 && hora <= 12){
        res.end('Buenos días');
    }
    if(hora >= 6 && hora <= 12){
        res.end('Buenos días');
    }
});

server.listen(puerto, () => {
    console.log(`Servidor escuchando puerto ${puerto}`);
}) */

const express = require('express');
const app = express();
const puerto = 8080;
let cant = 0;
app.get('/', (req,res)=>{
    res.send(`<h1 style="color:red">Bienvenido al servidor express</h1>`)
});
app.get('/visitas', (req,res)=>{
    res.send(`Cantidad de visitas es ${cant++}`);
});

app.get('/fyh', (req,res)=>{
    
    res.send(`${new Date}`);
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando puerto ${puerto}`);
})