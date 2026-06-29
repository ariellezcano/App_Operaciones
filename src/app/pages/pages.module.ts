import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../compartido/navbar/navbar.component';
import { FooterComponent } from '../compartido/footer/footer.component';
import { PaginaPrincipalComponent } from '../compartido/pagina-principal/pagina-principal.component';
import { LstLocalidadesComponent } from './lst/lst-localidades/lst-localidades.component';
import { FilLocalidadComponent } from './filtros/fil-localidades/fil-localidades.component';
import { FilLugarComponent } from './filtros/fil-lugar/fil-lugar.component';
import { LstLugarComponent } from './lst/lst-lugar/lst-lugar.component';
//import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    LstLocalidadesComponent,
    FilLocalidadComponent,
    FilLugarComponent,
    LstLugarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //AutocompleteLibModule, // 👈 acá
  ],
  providers: [],
  //bootstrap: [PagesComponent],
})
export class PagesModule {}