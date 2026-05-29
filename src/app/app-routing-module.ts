import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroLista } from './livro-lista/livro-lista';
import { LivroDados } from './livro-dados/livro-dados';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    component: LivroLista,
  },
  {
    path: 'dados',
    component: LivroDados,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
