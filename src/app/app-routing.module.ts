import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'auth',
  loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)},

  {path:'home',
  loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
