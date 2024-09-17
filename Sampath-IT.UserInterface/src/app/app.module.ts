import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';

import { Route, Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { AuthGuard } from './services/auth/guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from './services/auth/auth.interceptor';

import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UsersComponent } from './user/user-register/users/users.component';
import { EditUserComponent } from './user/user-register/edit-user/edit-user/edit-user.component';
//import { AppRoutingModule } from './app-routing.module';

const routs : Routes=[
  
  
  {path:'userregister', component:UserRegisterComponent},
  //{path:'profile', component:StudentComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  //{path:'courses', component:CoursesComponent},
  {path:'users',component:UsersComponent},
  //{path:'enrollment/:courseId', component:EnrollmentComponent,canActivate:[AuthGuard]},
  {path:'', component:UsersComponent},
  //{path:'admin',component:AdminComponent,canActivate:[AuthGuard], data: { role: 'Admin'}},
  //{path:'addcourses',component:AddCourseComponent},
  {path:'edituser/:id',component:EditUserComponent,canActivate:[AuthGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,

    UserRegisterComponent,
    UsersComponent,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs),
  ],
  providers: 
  [
    AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
