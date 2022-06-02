const fs = require('fs').promises;
let fileProd = [];

class Contenedor{
    constructor(archivo) {
        this.archivo = archivo;
        fs.writeFile(archivo, 'false');
    }

    async save(prod) {
    
        try {
            let file = await fs.readFile(this.archivo, 'utf-8');
            
            if(JSON.parse(!file)){
                fileProd.push({...prod, id: 1});
                await fs.writeFile(this.archivo, `${JSON.stringify(fileProd)}`)
            } else {
                fileProd.push({...prod, id: fileProd.length + 1});
                await fs.writeFile(this.archivo, `${JSON.stringify(fileProd)}`)
            }
            return fileProd.length;

        } catch (error) {
            console.log(`save - Error al escribir el archivo ${error}`);
        }
    }

    async getById(id){
        console.log(`Prodcucto devuelto por su ID: ${id}`);
        try {

            let respuesta = JSON.parse(await fs.readFile(this.archivo, 'utf-8'));
            
            respuesta = respuesta.find(prod => prod.id === id);
            
            respuesta ? console.log(respuesta) : console.log(null);

        } catch (error) {
            console.log(`getByID - Error al leer el archivo: ${error}`);
        }
    }

    async getAll(){
        console.log('Todos los Productos del Archivo');
        try {
            const allFromFile = JSON.parse(await fs.readFile(this.archivo, 'utf-8'));

            console.log(allFromFile);
            
        } catch (error) {
            console.log(`getAll - Error al leer el archivo: ${error}`);
        }
    }

    async deleteById(id){
        console.log(`Eliminamos el prodcuto con ID: ${id}`);
        try {
            const allFile = JSON.parse(await fs.readFile(this.archivo, 'utf-8'));

            const newFile = allFile.filter(prod => prod.id !== id);

            await fs.writeFile(this.archivo, JSON.stringify(newFile));

            console.log(newFile);

        } catch (error) {
            console.log(`deleteById - Error: ${error}`);
        }
    }

   async deleteAll(){
        try {
            await fs.writeFile(this.archivo, "");

            console.log('Productos eliminados del Archivo con éxito');

        } catch (error) {
            console.log(`deleteAll - Error: ${error}`);
        }
    }
};

module.exports = {
    Contenedor
}