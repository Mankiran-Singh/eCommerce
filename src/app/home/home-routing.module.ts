import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { CourseGuardService } from '../services/guards/course-guard.service';
import { ShowProductComponent } from './user/show-product/show-product.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'showProduct',component:ShowProductComponent},
  {path:'admin',component:AdminComponent,canActivate:[CourseGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
