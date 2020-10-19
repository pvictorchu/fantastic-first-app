import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizacaoChatPage } from './visualizacao-chat.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizacaoChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizacaoChatPageRoutingModule {}
