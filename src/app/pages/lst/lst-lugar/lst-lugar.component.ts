import { Component, OnInit } from '@angular/core';
import { Lugar } from 'src/app/models/components/lugar';

@Component({
  selector: 'app-lst-lugar',
  templateUrl: './lst-lugar.component.html',
  styleUrls: ['./lst-lugar.component.scss']
})
export class LstLugarComponent implements OnInit {

  items: Lugar[] = [];


  constructor() { }

  ngOnInit(): void {
  }


  doFound(event: Lugar[]) {
    this.items = event;
  }

}
