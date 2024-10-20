import { Injectable } from '@angular/core';

import { Morador, MoradorService } from './morador.service';

export class Agendamento {
  id!: number;
  morador!: Morador;
  data!: Date;
  hora!: Date;
}

type AgendamentoDto = {
  data: Date,
  hora: Date,
  moradorId: number
}

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private agendamentos: Agendamento[] = [];

  constructor(private readonly moradorService: MoradorService) { }

  public inserirAgendamento(request: AgendamentoDto): void {
    const dataRepetida = this.agendamentos.filter(a => a.data == request.data && a.hora == request.hora);
    if (dataRepetida.length > 0) return

    console.log(request);

    const agendamento = new Agendamento();
    agendamento.data = request.data;
    agendamento.hora = request.hora;
    agendamento.morador = this.moradorService.getMoradorById(request.moradorId);

    this.agendamentos.push({
      ...agendamento,
      id: 0,
      morador: {
        ...agendamento.morador,
        id: 0
      }
    })
  }

  public getAgendamentos(): Agendamento[] {
    return this.agendamentos;
  }

  public ajustarHora(id: number, hora: Date): void {
    this.agendamentos.filter(a => a.id == id).forEach(a => a.hora = hora);
  }

  public removerAgendamento(id: number): Agendamento {
    return this.agendamentos.filter(a => a.id == id)[0];
  }

}