import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service'
import { Allowance } from '../../interfaces/allowance';

@Component({
  selector: 'app-approve-allowance-dgm',
  templateUrl: './approve-allowance-dgm.component.html',
  styleUrl: './approve-allowance-dgm.component.css'
})
export class ApproveAllowanceDgmComponent implements OnInit {

  allowances: any[] = [];

  constructor(
    private allowanceService: ProgramService
  ) {}

  ngOnInit(): void {
    this.allowanceService.getAllowances().subscribe(
      (response: Allowance[]) => {
        this.allowances = response;
        console.log(this.allowances);
      }
    )
  }

  getTotalPayment(allowance: Allowance): number {
    let totalPayment = 0;
    for (const participant of allowance.participants) {
      totalPayment += participant.allowance;
    }
    return totalPayment;
  }
}
