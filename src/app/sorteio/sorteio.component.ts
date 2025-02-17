import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Necessário para [(ngModel)]

@Component({
  selector: 'app-sorteio',
  standalone: true, // ✅ AGORA É STANDALONE
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css'],
  imports: [CommonModule, FormsModule], // ✅ IMPORTA CommonModule para *ngIf e *ngFor
})
export class SorteioComponent {
  nome: string = '';
  nomes: string[] = [];
  sorteado: string | null = null;

  adicionarNome() {
    if (this.nome.trim() !== '') {
      this.nomes.push(this.nome);
      this.nome = '';
    }
  }

  sortearNome() {
    if (this.nomes.length > 0) {
      const indice = Math.floor(Math.random() * this.nomes.length);
      this.sorteado = this.nomes[indice];
    }
  }
}
