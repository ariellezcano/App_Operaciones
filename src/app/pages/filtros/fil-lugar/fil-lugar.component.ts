import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Lugar } from 'src/app/models/components/lugar';
import { LugaresService } from 'src/app/services/components/lugares.service';

@Component({
  selector: 'app-fil-lugar',
  templateUrl: './fil-lugar.component.html',
  styleUrls: ['./fil-lugar.component.scss']
})
export class FilLugarComponent implements OnInit {

  @Output() emmit: EventEmitter<Lugar[]> = new EventEmitter();

  busqueda: string = '';
  items: Lugar[] = [];

  paginaActual: number = 1;
  totalRegistros!: number;
  totalPaginas!: number;

  limit: number = 10;
  limits: number[] = [10, 20, 30];

  constructor(private wsdl: LugaresService) {}

  ngOnInit(): void {
    this.filter();
  }

  setPage(page: number, estado: string) {

    this.paginaActual = page;

    if (estado === 'siguiente') this.paginaActual++;
    if (estado === 'anterior') this.paginaActual--;

    this.filter();
  }

  async filter() {

    try {

      const tieneBusqueda = this.busqueda?.trim() !== '';

      const data = await lastValueFrom(
        this.wsdl.listar(
          this.paginaActual,
          this.limit,
          tieneBusqueda ? this.busqueda : undefined
        )
      );

      const result = JSON.parse(JSON.stringify(data));

      if (result.code === '200') {

        this.items = result.data ?? [];
        this.totalRegistros = result.totalRegistros;
        this.totalPaginas = result.totalPaginas;

      } else {

        this.items = [];
        this.totalRegistros = 0;
        this.totalPaginas = 1;

      }

      this.emmit.emit(this.items);

    } catch (error) {
      console.error(error);
    }

  }

}
