const fs = require('fs').promises;
let fileProd = [];

class Contenedor{
    constructor(archivo) {
        this.archivo = archivo;
    }

    async getById(id){
        try {

            let respuesta = JSON.parse(await fs.readFile(this.archivo, 'utf-8'));
            
            respuesta = respuesta.find(prod => prod.id === id);
            
            return respuesta;

        } catch (error) {
            console.log(`getByID - Error al leer el archivo: ${error}`);
        }
    }

    async getAll(){
        
        try {
            const allFromFile = JSON.parse(await fs.readFile(this.archivo, 'utf-8'));

            return allFromFile;
            
        } catch (error) {
            console.log(`getAll - Error al leer el archivo: ${error}`);
        }
    }
};

module.exports = {
    Contenedor
}