import { Component } from '@angular/core';

import { FormularioAgendamentoComponent } from '../formulario-agendamento/formulario-agendamento.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormularioAgendamentoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor() {
  }

}
