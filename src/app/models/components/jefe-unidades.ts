export class JefeUnidades {
    idJefeUnidad!: number;
    nombre!: string;
    apellido!: string;
    dni!: number;
    jerarquia!: number;
    unidadRevista!: number;
    activo: boolean;

    constructor(){
        this.activo = true;
    }
}
