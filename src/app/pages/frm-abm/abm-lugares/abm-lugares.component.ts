import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Lugar } from 'src/app/models/components/lugar';
import { LugaresService } from 'src/app/services/components/lugares.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-abm-lugares',
  templateUrl: './abm-lugares.component.html',
  styleUrls: ['./abm-lugares.component.scss'],
})
export class AbmLugaresComponent implements OnInit {
  item: Lugar;
  editando = false;
  id!: number;

  constructor(
    private service: LugaresService,
    private route: Router,
    private url: ActivatedRoute,
  ) {
    this.item = new Lugar();
  }

  ngOnInit(): void {
    this.id = Number(this.url.snapshot.params['id']);

    if (this.id > 0) {
      this.ObtenerId();
    }
  }

  guardar() {
    if (this.editando) {
      this.editar();
    } else {
      this.crear();
    }
  }

  async ObtenerId() {
    const data = await firstValueFrom(this.service.obtenerPorId(this.id));
    const result = JSON.parse(JSON.stringify(data));

    if (result.code === '200') {
      this.item = result.dato;
      this.editando = true;
    }
  }

  async crear() {
    const data = await firstValueFrom(this.service.crear(this.item));
    const result = JSON.parse(JSON.stringify(data));

    if (result.code === '201') {
      Swal.fire('OK', 'Lugar creado correctamente.', 'success');
      this.back();
    }
  }

  async editar() {
    const data = await firstValueFrom(this.service.actualizar(this.item));
    const result = JSON.parse(JSON.stringify(data));

    if (result.code === '200') {
      Swal.fire('OK', 'Lugar actualizado correctamente.', 'success');
      this.back();
    }
  }

  back() {
    this.route.navigate(['pages/lst_lugares']);
  }
}
