import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AgendamentoRequest } from '../dto/AgendamentoRequest';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private readonly host = 'localhost:8080';

  constructor(private http: HttpClient) { }

  public inserirAgendamento(request: any): Observable<void> {
    return this.http.post<void>(`${this.host}/agendamentos`, request);
  }

  public getAgendamentos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.host}/agendamentos`);
  }

}
