import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

  usuario = 'Operaciones';
  rol = 'Administrador';

  fecha = '';

  totalUsuarios = 125;
  totalEquipos = 583;
  totalReportes = 47;
  operacionesHoy = 19;

  constructor() { }

  ngOnInit(): void {

    this.fecha = moment().format('DD/MM/YYYY HH:mm');

  }

}
