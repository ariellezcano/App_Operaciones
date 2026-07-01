export class TipoDocumento {
    idTipoDocumento!: number
    nombre!: string;
    activo: boolean;

    constructor(){
        this.activo = true;
    }
}
