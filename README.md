# 🌟 README - Módulo 1: Introdução ao Angular

## 📘 1. O que é Angular?

Angular é um **framework front-end** baseado em TypeScript, desenvolvido pelo Google. Ele permite criar **aplicações web dinâmicas** e **Single Page Applications (SPAs)**.

### 📏 Diferença entre Angular, React e Vue

| Tecnologia  | Característica Principal                                           |
| ----------- | ------------------------------------------------------------------ |
| **Angular** | Framework completo com TypeScript, ideal para projetos escaláveis. |
| **React**   | Biblioteca focada apenas na interface do usuário, utiliza JSX.     |
| **Vue.js**  | Framework leve e progressivo, fácil de aprender.                   |

---

## 🛠️ 2. Instalando Angular

### 🔄 Passo 1: Instalar o Node.js

Baixe e instale o [Node.js](https://nodejs.org/).  
Verifique a versão instalada:

```bash
node -v
npm -v
```

### 🔄 Passo 2: Instalar o Angular CLI

```bash
npm install -g @angular/cli
```

Verifique a instalação:

```bash
ng version
```

---

## 🎨 3. Criando um Projeto Angular

Crie um novo projeto:

```bash
ng new simulador-sorteio
cd simulador-sorteio
ng serve
```

Acesse no navegador: **http://localhost:4200/**.

---

## 🌐 4. Estrutura do Projeto

```bash
simulador-sorteio/
│── src/
│   │── app/
│   │   │── app.component.ts    # Componente principal
│   │   │── app.module.ts       # Módulo raiz
│   │── index.html              # HTML principal
```

---

## 🛠️ 5. Criando o Componente de Sorteio

```bash
ng generate component sorteio
```

Inclua no `app.component.html`:

```html
<app-sorteio></app-sorteio>
```

---

## 🌟 6. Criando a Interface

Edite `sorteio.component.html`:

```html
<h2>Simulador de Sorteio</h2>
<input type="text" [(ngModel)]="nome" placeholder="Digite um nome" />
<button (click)="adicionarNome()">Adicionar</button>
<ul>
  <li *ngFor="let nome of nomes">{{ nome }}</li>
</ul>
<button (click)="sortearNome()">Sortear</button>
<h3 *ngIf="sorteado">Nome sorteado: {{ sorteado }}</h3>
```

---

## 🌐 7. Criando a Lógica

Edite `sorteio.component.ts`:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-sorteio",
  templateUrl: "./sorteio.component.html",
  styleUrls: ["./sorteio.component.css"],
})
export class SorteioComponent {
  nome: string = "";
  nomes: string[] = [];
  sorteado: string | null = null;

  adicionarNome() {
    if (this.nome.trim() !== "") {
      this.nomes.push(this.nome);
      this.nome = "";
    }
  }

  sortearNome() {
    if (this.nomes.length > 0) {
      const indice = Math.floor(Math.random() * this.nomes.length);
      this.sorteado = this.nomes[indice];
    }
  }
}
```

---

## 🌈 8. Melhorando a Estilização

Edite `sorteio.component.css`:

```css
input,
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
```

---

## 🎨 9. Publicando no GitHub Pages

1. **Gerar o build**:

```bash
ng build --base-href "/simulador-sorteio/"
```

2. **Instalar pacote de deploy**:

```bash
npm install -g angular-cli-ghpages
```

3. **Publicar**:

```bash
ngh --dir=dist/simulador-sorteio
```

Acesse seu repositório no **GitHub Pages**! 🚀

---

## 🚀 Conclusão

✔ Criamos um projeto Angular do zero.  
✔ Entendemos **componentes, diretivas e data binding**.  
✔ Criamos um **Simulador de Sorteio**.  
✔ Publicamos no **GitHub Pages**.

Agora você está pronto para avançar para o **Módulo 2**! 🚀
