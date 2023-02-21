import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items', pathMatch: 'full',
  },
  {
    path: 'items',
    loadChildren: () => import('../app/pages/items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'add',
    loadChildren: () => import('../app/pages/add/add.module').then(m => m.AddModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule)
  },
  // {
  //   path: 'edit/:id',
  //   loadChildren: () => import('../app/pages/edit/edit.module').then(m => m.EditModule)
  // },
  {
    path: '**',
    redirectTo: 'items',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
