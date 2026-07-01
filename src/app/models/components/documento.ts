export class Documento {
    idDocumento!: number;
    nombre!: string;
    fechaInicio: any;
    fechaFin: any;
    horaInicio: any;
    horaFin: any;
    tipoDocumento!: number;
    nroDocumento!: number;
    lugarLanzamiento!: number;
    cantidadRRHH!: number;
    cantidadMateriales!: number;
    activo: boolean;

    constructor(){
        this.activo = true;
    }
}
