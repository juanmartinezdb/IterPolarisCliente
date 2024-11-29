import { Star } from '../star/star.js';

export class Constellation {
    constructor(id, galaxia, nombre, activa, imagen, descripcion, ubicacion, estrellas = []) {
        this.id = id; 
        this.galaxia = galaxia; 
        this.nombre = nombre; 
        this.activa = activa;
        this.imagen = imagen;
        this.descripcion = descripcion; 
        this.ubicacion = ubicacion; 
        this.estrellas = estrellas; 
    }

    addStar(star) {
        this.estrellas.push(star);
    }
}
