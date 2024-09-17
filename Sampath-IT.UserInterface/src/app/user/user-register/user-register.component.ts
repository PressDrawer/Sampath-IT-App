import { Component } from '@angular/core';
import { UserDto } from 'src/app/Models/UserDto';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private userService:UserService, private router:Router) {}
  user:UserDto={} as UserDto
  
  submit(form:any):any{
    debugger
   this.user={
    
    "title":+(form.value.title),
    "firstName":form.value.firstname,
    "lastName":form.value.lastname,
    "dateofbirth":form.value.dateofbirth,
    "gender":+(form.value.title),
    "email":form.value.email,
    "password":form.value.password,
    "remark":form.value.remark
   }
  console.log("submit clicked")
   this.userService.registerUser(this.user).subscribe((response:any)=>{
    console.log(response);
    this.router.navigate(['users'])
  })
  }

  ngOnInit(): void 
   {
    
   }
   
}
