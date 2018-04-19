import { Injectable } from '@angular/core';

@Injectable()
export class MensagensService {

  constructor() { }

  mensagens: string[] = [];

  add(mensagem: string) {
    this.mensagens.push(mensagem);
  }

  limpa() {
    this.mensagens = [];
  }
}
