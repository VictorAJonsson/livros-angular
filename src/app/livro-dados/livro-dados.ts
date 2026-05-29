import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Livro } from '../livro';
import { Editora } from '../editora';

import { ControleLivros } from '../controle-livros';
import { ControleEditora } from '../controle-editora';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.html',
  styleUrl: './livro-dados.css',
})
export class LivroDados implements OnInit {
  livro: Livro = new Livro();

  autores: string = '';

  editoras: Array<Editora> = [];

  mensagemErro: string = '';

  constructor(
    private servLivros: ControleLivros,
    private servEditora: ControleEditora,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    if (!this.livro.titulo.trim()) {
      this.mensagemErro = 'O título do livro é obrigatório.';
      return;
    }

    this.mensagemErro = '';

    this.livro.autores = this.autores.split('\n').filter((autor) => autor.trim() !== '');

    this.servLivros.incluir({ ...this.livro });

    this.livro = new Livro();

    this.autores = '';

    this.router.navigate(['/lista']);
  };
}
