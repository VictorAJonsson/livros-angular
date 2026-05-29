import { Component, OnInit } from '@angular/core';

import { Livro } from '../livro';
import { Editora } from '../editora';

import { ControleLivros } from '../controle-livros';
import { ControleEditora } from '../controle-editora';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.html',
  styleUrl: './livro-lista.css',
})
export class LivroLista implements OnInit {
  public livros: Array<Livro> = [];
  public editoras: Array<Editora> = [];

  public modalAberto: boolean = false;

  public livroSelecionado: Livro = new Livro();

  public autoresEdicao: string = '';

  public termoBusca: string = '';

  constructor(
    private servLivros: ControleLivros,
    private servEditora: ControleEditora,
  ) {}

  ngOnInit(): void {
    this.livros = this.servLivros.obterLivros();

    this.editoras = this.servEditora.getEditoras();
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };

  editar = (livro: Livro): void => {
    this.modalAberto = true;

    this.livroSelecionado = {
      ...livro,
      autores: [...livro.autores],
    };

    this.autoresEdicao = livro.autores.join('\n');
  };

  salvarEdicao = (): void => {
    this.livroSelecionado.autores = this.autoresEdicao.split('\n');

    const index = this.livros.findIndex((livro) => livro.codigo === this.livroSelecionado.codigo);

    if (index !== -1) {
      this.livros[index] = {
        ...this.livroSelecionado,
      };
    }

    this.modalAberto = false;
  };

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);

    this.livros = this.servLivros.obterLivros();
  };

  get livrosFiltrados(): Array<Livro> {
    return this.livros.filter((livro) => {
      const termo = this.termoBusca.toLowerCase();

      const nomeEditora = this.obterNome(livro.codEditora).toLowerCase();

      return (
        livro.titulo.toLowerCase().includes(termo) ||
        livro.resumo.toLowerCase().includes(termo) ||
        nomeEditora.includes(termo) ||
        livro.autores.some((autor) => autor.toLowerCase().includes(termo))
      );
    });
  }

  fecharModal(): void {
    this.modalAberto = false;
  }
}
