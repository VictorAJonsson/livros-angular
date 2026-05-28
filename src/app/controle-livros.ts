import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivros {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça Java',
      resumo: 'Livro introdutório sobre Java.',
      autores: ['Bert Bates', 'Kathy Sierra'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Angular Essentials',
      resumo: 'Fundamentos do Angular.',
      autores: ['John Doe'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Clean Code',
      resumo: 'Boas práticas de programação.',
      autores: ['Robert Martin'],
    },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.reduce(
      (maior, livro) => (livro.codigo > maior ? livro.codigo : maior),
      0,
    );

    livro.codigo = maiorCodigo + 1;

    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);

    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
