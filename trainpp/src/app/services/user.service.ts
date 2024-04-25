import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUserById(id: string):  Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?id=${id}`);
  }

  updateUser(userDetails: User): Observable<User> {
    const url = `${this.baseUrl}/users/${userDetails.id}`;
    return this.http.patch<User>(url, userDetails);
  }
  
}
