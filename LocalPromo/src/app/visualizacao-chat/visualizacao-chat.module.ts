import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizacaoChatPageRoutingModule } from './visualizacao-chat-routing.module';

import { VisualizacaoChatPage } from './visualizacao-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizacaoChatPageRoutingModule
  ],
  declarations: [VisualizacaoChatPage]
})
export class VisualizacaoChatPageModule {}
