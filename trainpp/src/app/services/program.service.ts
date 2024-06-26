import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Program } from '../interfaces/program';
import { Approval } from '../interfaces/participantListApproval';
import { ResultApproval } from '../interfaces/result';
import { Allowance } from '../interfaces/allowance';
import { AllowanceApproval } from '../interfaces/allowanceApproval';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProgramByTCentre(centre: string): Observable<Program[]> {
    return this.http.get<Program[]>(
      `${this.baseUrl}/programs?centre=${centre}`
    );
  }

  getProgramById(id: string): Observable<Program[]> {
    return this.http.get<Program[]>(`${this.baseUrl}/programs?id=${id}`);
  }

  sendPaticipantListApproval(details: Approval) {
    return this.http.post(`${this.baseUrl}/participantListApproval`, details);
  }

  sendResultApproval(details: ResultApproval) {
    return this.http.post(`${this.baseUrl}/resultApproval`, details);
  }

  getAllowances() {
    return this.http.get<Allowance[]>(`${this.baseUrl}/allowances`);
  }

  sendAllowanceApproval(details: AllowanceApproval) {
    return this.http.post(`${this.baseUrl}/allowanceApproval`, details);
  }
}
