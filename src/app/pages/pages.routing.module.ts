import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../compartido/guards/auth.guard';
import { PaginaPrincipalComponent } from '../compartido/pagina-principal/pagina-principal.component';
import { LstLocalidadesComponent } from './lst/lst-localidades/lst-localidades.component';
import { LstLugarComponent } from './lst/lst-lugar/lst-lugar.component';
import { PagesComponent } from './pages.component';
import { AbmLugaresComponent } from './frm-abm/abm-lugares/abm-lugares.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'principal', pathMatch: 'full' }, // Agregá esto
      {
        path: 'principal',
        component: PaginaPrincipalComponent,
        canActivate: [AuthGuard],
      },
      //LOCALIDADES
      {
        path: 'lst_localidades',
        component: LstLocalidadesComponent,
        canActivate: [AuthGuard],
      },
      //LUGARES
      {
        path: 'lst_lugares',
        component: LstLugarComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'abm_lugares',
        component: AbmLugaresComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'abm_lugares/:id',
        component: AbmLugaresComponent,
        canActivate: [AuthGuard],
      },
      
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // ✅ forChild, no forRoot
  exports: [RouterModule],
})
export class PagesRoutingModule {}
