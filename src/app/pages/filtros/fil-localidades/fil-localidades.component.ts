import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Localidad } from 'src/app/models/components/localidad';
import { LocalidadesService } from 'src/app/services/components/localidades.service';

@Component({
  selector: 'app-fil-localidades',
  templateUrl: './fil-localidades.component.html',
  styleUrls: ['./fil-localidades.component.scss']
})
export class FilLocalidadComponent implements OnInit {

  @Output() emmit: EventEmitter<Localidad[]> = new EventEmitter();

  busqueda: any;
  items: Localidad[];

  paginaAnterior!: number;
  anterior: boolean;
  paginaActual: number;
  siguiente: boolean;
  paginaSiguiente!: number;
  totalRegistros!: number;
  totalPaginas!: number;

  public limit: any;
  public limits: Number[] = [10, 20, 30];

  constructor(
    private wsdl: LocalidadesService
  ) {

    this.busqueda = '';
    this.items = [];

    this.limit = 10;
    this.paginaActual = 1;
    this.siguiente = false;
    this.anterior = false;

  }

  ngOnInit(): void {
    this.filter();
  }

  setPage(page: any, estado: any) {

    this.paginaActual = page;

    if (estado == 'siguiente') {

      this.paginaSiguiente = this.paginaActual + 1;
      this.paginaActual = this.paginaSiguiente;

    }

    if (estado == 'anterior') {

      this.paginaAnterior = this.paginaActual - 1;
      this.paginaActual = this.paginaAnterior;

    }

    this.filter();

  }

  async filter() {

    try {

      const tieneBusqueda =
        this.busqueda &&
        this.busqueda.trim() !== '';

      const data = await lastValueFrom(
        this.wsdl.getList(
          this.paginaActual,
          this.limit,
          tieneBusqueda ? this.busqueda : undefined
        )
      );

      const result = JSON.parse(JSON.stringify(data));

      if (result.code === '200') {
        console.log(result.data)
        this.items = result.data ?? [];
        this.totalRegistros = result.totalRegistros;
        this.totalPaginas = result.totalPaginas;

      }
      else {

        this.items = [];
        this.totalRegistros = 0;
        this.totalPaginas = 1;

      }

      this.emmit.emit(this.items);

    }
    catch (error) {

      console.error(error);

    }

  }

}