import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import {User} from '../../../Models/User'
import {Searchobj} from '../../../Models/searchobj'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private userService:UserService,private router:Router,private auth:AuthService) {}

  users:User[]=[];
  searchobj : Searchobj

  search(form:any){
  debugger
  this.searchobj={
    'firstName':form.value.firstname,
    'lastName':form.value.lastname,
    'dateofbirth':form.value.dateofbirth,
    'gender':form.value.gender
  }
    this.getUsers(this.searchobj);
  }
  ngOnInit(): void 
   {
    
    debugger
    this.searchobj={
      'firstName':'',
      'lastName':'',
      'dateofbirth':'',
      'gender':''
    }
    this.getUsers(this.searchobj);
   }

   edit(id:any){
    if(this.auth.isLogedin){ 
      this.router.navigate(["edituser",id]);
      }else
      {
        this.router.navigate(["login"])
      }
   }

  getUsers(search?:Searchobj){
    debugger
    this.userService.getUsers(search).subscribe((res:User[])=>{
      debugger;
      this.users = res
      console.log(this.users);
    })
  }
    
}
