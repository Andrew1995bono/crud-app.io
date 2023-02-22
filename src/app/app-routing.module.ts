import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllowTabsVisitGuard} from "./guards/allow-tabs-visit.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full',
  },
  {
    path: 'items',
    loadChildren: () => import('../app/pages/items/items.module').then(m => m.ItemsModule),
    canActivate: [AllowTabsVisitGuard]
  },
  {
    path: 'add',
    loadChildren: () => import('../app/pages/add/add.module').then(m => m.AddModule),
    canActivate: [AllowTabsVisitGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('../app/pages/edit/edit.module').then(m => m.EditModule),
    canActivate: [AllowTabsVisitGuard]
  },
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
