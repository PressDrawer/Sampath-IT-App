import { Component } from '@angular/core';
import { login } from 'src/app/Models/login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authservice:AuthService,private router:Router,private jwtHelper: JwtHelperService) {}
     
    
    login:login={} as login
    loginRes:any;
    
    submit(loginform:any):any{
      this.login={
        "email":loginform.value.email,
        "password":loginform.value.password
       }
    
     this.authservice.login(this.login).subscribe((res:any)=>{
      this.loginRes=res;
      if(this.loginRes.token){
        debugger;
        this.authservice.isLogedin = true;
        this.authservice.userId=res.id
        this.authservice.currentUserroll=this.loginRes.role;
        localStorage.setItem('token',this.loginRes.token);
        localStorage.setItem('userId',this.loginRes.id);
        this.router.navigate(['users']);
      }
      else{
        this.router.navigate(['login']);
      }
    });
    }

    ngOnInit(): void {
          
         }
}
