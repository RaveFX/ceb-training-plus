import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTaskByRole(role: string):  Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/tasks?role=${role}`);
  }

}
