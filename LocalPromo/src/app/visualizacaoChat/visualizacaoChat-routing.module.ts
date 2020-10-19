import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizacaoChatPage } from './visualizacaoChat.page';

const routes: Routes = [
  {
    path: 'visualizacaoChat',
    component: VisualizacaoChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizacaoChatPageRoutingModule {}
