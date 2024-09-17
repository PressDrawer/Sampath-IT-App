import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { login } from '../../Models/login'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserroll = null;
  isLogedin:boolean = false;
  userId:any=null;
  constructor(private http:HttpClient) { }
  url="https://localhost:7295/api/User/Login";

  public login(login:login):Observable<any>{
    debugger;
    return this.http.post(this.url,login);
  }

  public getToken(){{
   
    return localStorage.getItem('token');
  }}

  public getUserId(){
    return localStorage
  }
}
