import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Consultar, cuentaCrear, MovimientoCuenta, cuentaAgregar } from './models/cuenta.model';
import { RootObject } from './models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class CuentaserviceService {

  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  GetPErsonas(): Observable<RootObject[]> {
    return this.http
      .get<RootObject[]>(`${this.baseUrl}PersonaApi/Consultar`)
      .pipe(catchError(err => {
        throw err;
      }));
  }
 ConsultarCuenta(cuenta: Consultar): Observable<cuentaCrear> {
   return this.http
     .get<cuentaCrear>(`${this.baseUrl}api/Consultar?numeroCuenta=${cuenta.cuentaNumero}`)
     .pipe(catchError(err => {
       throw err;
      }));
 }

ConsignarCuenta(cuenta: MovimientoCuenta): Observable<number> {
  return this.http
    .post<number>(`${this.baseUrl}api/Consignar`, cuenta)
    .pipe(catchError(err => {
      throw err;
     }));
}

RetirarCuenta(cuenta: MovimientoCuenta): Observable<number> {
  return this.http
    .post<number>(`${this.baseUrl}api/Retirar`, cuenta)
    .pipe(catchError(err => {
      throw err;
     }));
}

AgregarCuenta(cuenta: cuentaAgregar): Observable<number> {
  return this.http
    .post<number>(`${this.baseUrl}api/Agregar`, cuenta)
    .pipe(catchError(err => {
      throw err;
     }));
}


  // ActualizarUsuarios(usuario: Usuario): Observable<number> {
  //   return this.http
  //     .post<number>(`${this.baseUrl}/user/actualizarUsuario`, usuario)
  //     .pipe(catchError(err => {
  //       throw err;
  //     }));
  // }

}
