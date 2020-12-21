import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingController } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nova-senha',
    loadChildren: () => import('./nova-senha/nova-senha.module').then( m => m.NovaSenhaPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'visualizacao-chat',
    loadChildren: () => import('./visualizacao-chat/visualizacao-chat.module').then( m => m.VisualizacaoChatPageModule)
  },
  {
    path: 'criar-post',
    loadChildren: () => import('./criar-post/criar-post.module').then( m => m.CriarPostPageModule)
  }

  
];
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
