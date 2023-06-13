import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from '../services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { HotToastModule } from '@ngneat/hot-toast';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../services/guards/auth-guard.service';

@NgModule({
  declarations: [
     SignUpComponent,
     LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    HotToastModule.forRoot()
  ],
  providers:[AuthService,AuthGuardService]
})
export class AuthModule { }
