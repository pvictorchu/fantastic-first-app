import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarPostPage } from './criar-post.page';

const routes: Routes = [
  {
    path: '',
    component: CriarPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarPostPageRoutingModule {}
