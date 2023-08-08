import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './user/home/home.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { CourseGuardService } from '../services/guards/course-guard.service';
import { StatsComponent } from './user/stats/stats.component';
import { ProductsComponent } from './user/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowProductComponent } from './user/show-product/show-product.component';
import { AddReviewComponent } from './user/add-review/add-review.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    StatsComponent,
    ProductsComponent,
    ShowProductComponent,
    AddReviewComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CourseGuardService]
})
export class HomeModule { }
