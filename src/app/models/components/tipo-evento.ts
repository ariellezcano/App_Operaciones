export class TipoEvento {
  idTipoEvento!: number;
  nombre!: string;
  activo: boolean;

  constructor(){
    this.activo = true;
  }
}
