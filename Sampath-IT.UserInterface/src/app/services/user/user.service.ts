import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Searchobj } from 'src/app/Models/searchobj';
import { HttpParams } from '@angular/common/http';
import { UserDto } from 'src/app/Models/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url = "https://localhost:7295/api/User/";
  
  //Register a User
  public registerUser(user : UserDto):Observable<any>{
    debugger;
    return this.http.post<any>(this.url+"Register",user);
  }
  
  //Get All Users
  public getUsers(searchobject?:Searchobj):Observable<any>{
    debugger
    
    const params = new HttpParams()
                    .set('firstName', searchobject.firstName.toString())
                    .set('lasttName', searchobject.lastName.toString())
                    .set('dateofbirth',searchobject.dateofbirth.toString())
                    .set('gender',searchobject.gender.toString());
    
    return this.http.post<any>(this.url+"GetUsers",null,{params});
  }

  //Edit aUser
  public editUser(id:number,user:UserDto):Observable<any>{
    
    return this.http.put<any>(`https://localhost:7295/api/updateuser/${id}`,user);
  }
}
