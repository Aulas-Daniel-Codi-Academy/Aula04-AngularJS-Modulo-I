import { Component } from '@angular/core';
import { SorteioComponent } from './sorteio/sorteio.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ AGORA É STANDALONE
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SorteioComponent], // ✅ IMPORTA DIRETAMENTE O COMPONENTE
})
export class AppComponent {}
