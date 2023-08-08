import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth-routing.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports:[CommonModule,HttpClientModule,RouterModule,RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AuthRoutingModule,
        HotToastModule.forRoot()],
      providers:[AuthService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });
});
