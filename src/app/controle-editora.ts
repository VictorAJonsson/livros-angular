import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditora {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Addison Wesley' },
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    let editora = this.editoras.filter((e) => e.codEditora == codEditora);

    return editora[0].nome;
  }
}
