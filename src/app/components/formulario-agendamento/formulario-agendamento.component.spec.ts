import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgendamentoComponent } from './formulario-agendamento.component';

describe('FormularioAgendamentoComponent', () => {
  let component: FormularioAgendamentoComponent;
  let fixture: ComponentFixture<FormularioAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
