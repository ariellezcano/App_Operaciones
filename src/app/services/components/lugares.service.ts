import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {
  
  api: string;

  constructor(private http: HttpClient) {
    this.api = environment.URL + 'Lugar';
  }

  // =========================
  // LISTAR (PAGINADO)
  // =========================
  listar(
    paginaActual: number = 1,
    tamanoPagina: number = 10,
    nombre?: string
  ): Observable<any> {
    let params = new HttpParams()
      .set('paginaActual', paginaActual)
      .set('tamanoPagina', tamanoPagina);

    if (nombre && nombre.trim() !== '') {
      params = params.set('nombre', nombre);
    }

    return this.http.get<any>(`${this.api}/Listar`, { params });
  }

  // =========================
  // OBTENER POR ID
  // =========================
  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/ObtenerPorId/${id}`);
  }

  // =========================
  // CREAR
  // =========================
  crear(lugar: any): Observable<any> {
    return this.http.post<any>(`${this.api}/Crear`, lugar);
  }

  // =========================
  // ACTUALIZAR
  // =========================
  actualizar(lugar: any): Observable<any> {
    return this.http.put<any>(`${this.api}/Actualizar`, lugar);
  }

  // =========================
  // ELIMINAR (LÓGICO)
  // =========================
  eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/Eliminar/${id}`);
  }
}
