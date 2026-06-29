import { Component, OnInit, ViewChild } from '@angular/core';
import { Localidad } from 'src/app/models/components/localidad';
import { FilLocalidadComponent } from '../../filtros/fil-localidades/fil-localidades.component';

@Component({
  selector: 'app-lst-localidades',
  templateUrl: './lst-localidades.component.html',
  styleUrls: ['./lst-localidades.component.scss']
})
export class LstLocalidadesComponent implements OnInit {

  @ViewChild(FilLocalidadComponent, { static: false })
  fil!: FilLocalidadComponent;

  items: Localidad[];

  constructor() {

    this.items = [];

  }

  ngOnInit(): void {
  }

  doFound(event: Localidad[]) {

    this.items = event;

  }

}
