import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'auth',
  loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)},

  {path:'home',
  loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)},

  {path:"**",component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
