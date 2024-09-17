import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineLearning.UserInterface';
  constructor(private authService:AuthService){}

  get currentUser(){
    return this.authService.currentUserroll;
  }

  logout(){
    localStorage.removeItem('token');
    this.authService.isLogedin = false;
    
  }

  get isLoggedin(){
   return this.authService.isLogedin;
  } 
  ngOnInit(): void 
   {
    debugger;
    console.log(this.isLoggedin);
    
   }
}
