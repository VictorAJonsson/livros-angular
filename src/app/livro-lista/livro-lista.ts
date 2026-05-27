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

  constructor(
    private servLivros: ControleLivros,
    private servEditora: ControleEditora
  ) {}

  ngOnInit(): void {

    this.livros = this.servLivros.obterLivros();

    this.editoras = this.servEditora.getEditoras();
  }

  excluir = (codigo: number): void => {

    this.servLivros.excluir(codigo);

    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string => {

    return this.servEditora.getNomeEditora(codEditora);
  }
}