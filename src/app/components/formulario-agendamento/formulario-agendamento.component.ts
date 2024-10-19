import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-agendamento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-agendamento.component.html',
  styleUrl: './formulario-agendamento.component.scss'
})
export class FormularioAgendamentoComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      morador: this.formBuilder.group({
        nome: [null, Validators.required],
        matricula: [null, Validators.required],
        telefone: [null, Validators.required],
        apartamento: [null, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.min(1101),
          Validators.max(6339)]
        ],
      }),
      data: [null, Validators.required],
      horario: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
