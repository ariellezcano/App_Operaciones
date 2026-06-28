import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../compartido/guards/auth.guard';
import { PaginaPrincipalComponent } from '../compartido/pagina-principal/pagina-principal.component';
import { PagesComponent } from './pages.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // ✅ forChild, no forRoot
  exports: [RouterModule],
})
export class PagesRoutingModule {}
