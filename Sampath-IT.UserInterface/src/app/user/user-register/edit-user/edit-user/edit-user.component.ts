import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDto } from 'src/app/Models/UserDto';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  constructor(private route: ActivatedRoute,
    
    private userService:UserService) {}

  id:number;
  user:UserDto;
  submit(form:any){
    this.user={
      
    "title":+(form.value.title),
    "firstName":form.value.firstname,
    "lastName":form.value.lastname,
    "dateofbirth":(form.value.dateofbirth),
    "gender":+(form.value.gender),
    "email":form.value.email,
    "password":form.value.password,
    "remark":form.value.remark
     }
     console.log("submit clicked")
     debugger
     this.userService.editUser(this.id,this.user).subscribe((response:any)=>{
      
    })
  }

  ngOnInit() {
    debugger
    this.id = +this.route.snapshot.paramMap.get('id');
   
  }
}
