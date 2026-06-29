import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Lugar } from 'src/app/models/components/lugar';
import { LugaresService } from 'src/app/services/components/lugares.service';
import Swal from 'sweetalert2';
import { FilLugarComponent } from '../../filtros/fil-lugar/fil-lugar.component';

@Component({
  selector: 'app-lst-lugar',
  templateUrl: './lst-lugar.component.html',
  styleUrls: ['./lst-lugar.component.scss'],
})
export class LstLugarComponent implements OnInit {
  @ViewChild(FilLugarComponent, { static: false })
  fil!: FilLugarComponent;

  items: Lugar[] = [];
  item: Lugar;

  constructor(
    private router: Router,
    private service: LugaresService,
  ) {
    this.item = new Lugar();
  }

  ngOnInit(): void {}

  doFound(event: Lugar[]) {
    this.items = event;
  }

  nuevo() {
    this.router.navigate(['/pages/abm_lugares']);
  }

  editar(id?: number) {
    this.router.navigate(['/pages/abm_lugares', id]);
  }

  async eliminar(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Estás seguro?',
        text: 'El registro no se podra recuperar!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            const data = await firstValueFrom(this.service.eliminar(id));
            const result = JSON.parse(JSON.stringify(data));

            if (result.code === '200') {
              this.fil.filter();

              swalWithBootstrapButtons.fire(
                'Eliminado exitosamente!',
                'Tu registro ya no existe.',
                'success',
              );
            }
          } catch (err) {
            swalWithBootstrapButtons.fire(
              'Error',
              'No se pudo eliminar el registro.',
              'error',
            );
          }
        }
      });
  }
}
