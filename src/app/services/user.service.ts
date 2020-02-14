import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User;
  constructor(private httpClient:HttpClient) { }

  createUser(user:Object): Observable<Object> {
    return this.httpClient.post('http://localhost:8080/createUser',user);
  }

  getUsersList() {
     return this.httpClient.get<User>('http://localhost:8080/getAllUsers');
  }


}
