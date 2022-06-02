const Contenedor = require('./Contenedor.js');
const archivo = './productos.txt'

const express = require('express');
const app = express();
const puerto = 8080;
let cant = 0;

const contenedor = new Contenedor.Contenedor(archivo);
const products = [
    {title: 'Lejía Con Detergente Bona Casa',
    price: 1200, 
    thumbnail:'https://sacooperativadelcamp.com/9918-large_default/lejia-con-detergente-bonacasa-2l.jpg'
    },
    {title: 'Vanish Oxi Action',
    price: 3200, 
    thumbnail:'https://imagenes.elpais.com/resizer/_9puKAIOV3cAnyz2P8J4LAnhgnk=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/QQZLZ4EQQJBQNG5KOFW6XU6XPU.jpg'
    },
    {title: 'Clorox Quitamanchas x 1Lt.',
    price: 2200, 
    thumbnail:'https://s.cornershopapp.com/product-images/859744.jpg?versionId=0VA..AypLO8yt.gOo39crh.y.mY9CKNv'
    }
];

app.get('/', (req,res)=>{
    res.send(products)
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

async function ejecutar(){
    
    for(let i = 0; i < products.length; i++){
        console.log(`Product ID N°: ${await contenedor.save(products[i])}`);
    }

    await contenedor.getById(3);
    await contenedor.getAll();
    await contenedor.deleteById(2); 
    await contenedor.deleteAll();
}

ejecutar();