import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  entrada: string = '';
  resultado: number = 0;

  adicionarOperacao(valor: string) {
    this.entrada += valor;
  }

  limpar() {
    this.entrada = '';
    this.resultado = 0;
  }

  calcular() {
    try {
      // Avalia a expressão matemática
      this.resultado = eval(this.entrada);
      this.entrada = this.resultado.toString();
    } catch (e) {
      this.entrada = 'Erro';
    }
  }
}
