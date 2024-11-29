//EXPORT ES PARA PODER "EXPORTARLA" Y QUE LUEGO Constellation LO PILLE Y ASI HASTA LLEGAR AL CONVERTER
export class Star {
    constructor(id, tipo, nombre, estado, idConstelacion, descripcion, frecuencia = null, energia = null, puntos = null, fechaLimite = null, enlace = null) {
        this.id = id;
        this.tipo = tipo; 
        this.nombre = nombre; 
        this.estado = estado;
        this.idConstelacion = idConstelacion;
        this.descripcion = descripcion;
        this.frecuencia = frecuencia;
        this.energia = energia;
        this.puntos = puntos;
        this.fechaLimite = fechaLimite;
        this.enlace = enlace; 
    }
}
