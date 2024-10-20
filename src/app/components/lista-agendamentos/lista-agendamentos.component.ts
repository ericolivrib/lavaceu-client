import { Component, OnInit } from '@angular/core';
import { Agendamento, AgendamentoService } from '../../core/services/agendamento.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-lista-agendamentos',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './lista-agendamentos.component.html',
  styleUrl: './lista-agendamentos.component.scss'
})
export class ListaAgendamentosComponent implements OnInit {
  
  agendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService) {
  }

  ngOnInit(): void {
    this.agendamentos = this.agendamentoService.getAgendamentos();
  }

}
