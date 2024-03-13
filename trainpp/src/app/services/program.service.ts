import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Program } from '../interfaces/program';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProgramByTCentre(centre: string):  Observable<Program[]>{
    return this.http.get<Program[]>(`${this.baseUrl}/programs?centre=${centre}`);
  }

  getProgramById(id: string): Observable<Program[]>{
    return this.http.get<Program[]>(`${this.baseUrl}/programs?id=${id}`)
  }
}
