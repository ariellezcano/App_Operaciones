import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Localidad } from 'src/app/models/components/localidad';
import { Results } from 'src/app/models/results';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalidadesService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = environment.URL + 'Localidad';
  }

  getList(pagina: number, cantidad: number, busqueda?: string) {
    const params: any = {
      pagina: pagina.toString(),
      tamanoPagina: cantidad.toString(),
    };

    if (busqueda && busqueda.trim() !== '') {
      params.nombre = busqueda;
    }

    return this.http.get<Results<Localidad>>(this.api, { params });
  }
}
