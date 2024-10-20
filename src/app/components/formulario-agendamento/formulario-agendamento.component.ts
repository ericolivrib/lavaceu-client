import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Agendamento, AgendamentoService } from '../../core/services/agendamento.service';
import { Morador, MoradorService } from '../../core/services/morador.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-formulario-agendamento',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './formulario-agendamento.component.html',
  styleUrl: './formulario-agendamento.component.scss'
})
export class FormularioAgendamentoComponent implements OnInit {

  moradores!: Morador[];
  morador!: Morador;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private agendamentoService: AgendamentoService,
    private moradorService: MoradorService
  ) {
  }

  ngOnInit(): void {
    this.moradores = this.moradorService.getMoradores();

    this.form = this.formBuilder.group({
      // morador: this.formBuilder.group(
      //   {
      //     nome: [null],
      //     matricula: [null],
      //     telefone: [null],
      //     apartamento: [null],
      //   },
      //   {
      //     validators: [Validators.required]
      //   }
      // ),
      moradorId: [null, Validators.required],
      data: [null, Validators.required],
      hora: [null, Validators.required]
    });
  }

  onSubmit(): void {
    this.agendamentoService.inserirAgendamento(this.form.value);
  }

  setMorador(morador: Morador) {
    this.morador = morador;
    this.form.get('morador')?.setValue(morador)

    console.log(this.form);
  }

}
