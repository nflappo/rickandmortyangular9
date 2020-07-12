import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // tslint:disable-next-line:max-line-length
  {
    path: '',
    // tslint:disable-next-line:max-line-length
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'character-list',
    loadChildren: () => import('./components/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule)
  },
  {
    path: 'character-details/:id',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./components/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
