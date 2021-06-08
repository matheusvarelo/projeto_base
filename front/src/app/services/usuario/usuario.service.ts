import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario, Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }

  buscarTodos(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${environment.baseUrlApi}/usuarios`);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${environment.baseUrlApi}/usuarios/${id}`);
  }

  salvar(usuario: IUsuario): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrlApi}/usuarios`, usuario,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  atualizar(usuario: IUsuario, id: number): Observable<any> {
    return this.httpClient.put(
      `${environment.baseUrlApi}/usuarios/${id}`, usuario,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  deletarPorId(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.baseUrlApi}/usuarios/${id}`);
  }

}
