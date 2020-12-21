import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarPostPageRoutingModule } from './criar-post-routing.module';

import { CriarPostPage } from './criar-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarPostPageRoutingModule
  ],
  declarations: [CriarPostPage]
})
export class CriarPostPageModule {}
