import { Component } from '@angular/core';

import { FormularioAgendamentoComponent } from '../formulario-agendamento/formulario-agendamento.component';
import { ListaAgendamentosComponent } from "../lista-agendamentos/lista-agendamentos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormularioAgendamentoComponent, ListaAgendamentosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor() {
  }

}
