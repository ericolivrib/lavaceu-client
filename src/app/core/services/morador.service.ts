import { Injectable } from '@angular/core';

export class Morador {
  id!: number;
  nome!: string;
  matricula!: string;
  telefone!: string;
  apartamento!: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoradorService {

  moradores: Morador[] = [{
    id: 1,
    nome: 'Érico Oliveira Ribeiro',
    matricula: '202010937',
    apartamento: 1405,
    telefone: '55 99931-9245'
  }, {
    id: 2,
    nome: 'Malga Samantha Madzou',
    matricula: '202212584',
    apartamento: 4523,
    telefone: '96 99207-3871'
  }];

  constructor() { }

  public getMoradores(): Morador[] {
    return this.moradores;
  }

  public getMoradorById(id: number): Morador {
    return this.moradores.find(m => m.id == id) as Morador;
  }

}
