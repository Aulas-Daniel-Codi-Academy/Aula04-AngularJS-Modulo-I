import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sorteio',
  standalone: true,
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SorteioComponent implements OnInit {
  nome: string = '';
  nomes: string[] = [];
  sorteado: string | null = null;

  ngOnInit() {
    // Recupera os nomes salvos no Local Storage ao carregar a página
    const nomesSalvos = localStorage.getItem('nomes');
    if (nomesSalvos) {
      this.nomes = JSON.parse(nomesSalvos);
    }
  }

  adicionarNome() {
    if (this.nome.trim() !== '') {
      this.nomes.push(this.nome);
      this.nome = '';

      // Salva a lista atualizada no Local Storage
      localStorage.setItem('nomes', JSON.stringify(this.nomes));
    }
  }

  sortearNome() {
    if (this.nomes.length > 0) {
      const indice = Math.floor(Math.random() * this.nomes.length);
      this.sorteado = this.nomes[indice];
    }
  }

  removerNomes() {
    this.nomes = [];
    this.sorteado = null;
    localStorage.removeItem('nomes');
  }
}
