export class DetalleDocumento {
  idDtDocumento!: number;
  jefeOp!: number;
  tipoJefe!: string;
  activo: boolean;

  constructor() {
    this.activo = true;
  }
}
