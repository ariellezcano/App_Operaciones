import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss'],
})
export class PaginaPrincipalComponent implements OnInit {
  usuario = 'Operaciones';
  rol = 'Administrador';

  fecha = '';

  totalUsuarios = 125;
  totalEquipos = 583;
  totalReportes = 47;
  operacionesHoy = 19;

  constructor(private router: Router, private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.fecha = moment().format('DD/MM/YYYY HH:mm');
  }

  irALocalidades() {
    this.navbarService.setModo('localidades');
    this.router.navigate(['/pages/lst_localidades']);
  }

  irADocumentos() {
    this.navbarService.setModo('ordenes');
    this.router.navigate(['/pages/lst_lugares']);
  }
}
