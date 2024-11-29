import { Star } from "../../star/star.js";
import { Constellation } from "../../constellation/constellation.js";

export const converterC = (json) => {
    const constellations = json.map(constellation => {

        

        return new Constellation(
            constellation.id,
            constellation.galaxia,
            constellation.nombre,
            constellation.activa,
            constellation.imagen,
            constellation.descripcion,
            constellation.ubicacion,
            stars
        );
    });


    return constellations;
};

export const converterS = (json) => {
    const stars = json.map(star => 
        new Star(
            star.id,
            star.tipo,
            star.nombre,
            star.estado,
            star.idConstelacion,
            star.descripcion,
            star.frecuencia,
            star.energia,
            star.puntos,
            star.fechaLimite,
            star.enlace
        )
    );
    return stars;
};

let constellations = []; 
let stars = [];

// Cargar constelaciones/Strellas desde el JSON
export const loadC = async () => {
    const response = await fetch("../../../assets/constellations.json");
    const jsonData = await response.json();
    constellations = converterC(jsonData);
    return constellations; 
};
export const loadS = async () => {
    const response = await fetch("../../../assets/stars.json");
    const jsonData = await response.json();
    stars = converterS(jsonData);
    return stars; 
};
// Obtener todas las constelaciones /Estrellas
export const getC = () => constellations;
export const getS = () => stars;

// Guardar en el JSON ESTO NO TENGO NI IDEA ES CORTAPEGA, SI NO USO EL ASYNC CON EL AWAIT NO FUNCION REVISAR LA DOCUMENTACION
export const saveConstellations = async () => {
    try {
        await fetch("../../../assets/constellations.json", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(constellations)
        });
        console.log("Constelaciones guardadas correctamente");
    } catch (error) {
        console.error("Error al guardar las constelaciones:", error);
    }
};

// OPERACIONES CRUD (C U D)
export const createC = (newConstellation) => {
    const ultimaId = constellations.reduce((max, c) => Math.max(max, c.id), 0);
    newConstellation.id=++ultimaId;
    constellations.push(newConstellation);
};

export const updateC = (id, updatedConstellation) => {
    const index = constellations.findIndex(c => c.id === id);
    if (index !== -1) {
        constellations[index] = updatedConstellation;
}
};

export const deleteC = (id) => {
    constellations = constellations.filter(c => c.id !== id);
};