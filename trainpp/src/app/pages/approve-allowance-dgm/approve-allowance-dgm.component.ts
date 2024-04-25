import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { Allowance } from '../../interfaces/allowance';
import { MessageService } from 'primeng/api';
import { AllowanceApproval } from '../../interfaces/allowanceApproval';

@Component({
  selector: 'app-approve-allowance-dgm',
  templateUrl: './approve-allowance-dgm.component.html',
  styleUrl: './approve-allowance-dgm.component.css',
})
export class ApproveAllowanceDgmComponent implements OnInit {
  allowances: any[] = [];
  visible: boolean = false;
  allowaceDetails: Allowance | null = null;
  value: string | undefined;

  constructor(
    private allowanceService: ProgramService,
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.allowanceService.getAllowances().subscribe((response: Allowance[]) => {
      this.allowances = response;
      console.log(this.allowances);
    });
  }

  getTotalPayment(allowance: Allowance): number {
    let totalPayment = 0;
    for (const participant of allowance.participants) {
      totalPayment += participant.allowance;
    }
    return totalPayment;
  }

  showApproveDialog(allowance: Allowance) {
    this.visible = true;
    this.allowaceDetails = allowance;
    console.log(this.allowaceDetails);
  }

  submitFormData(id: string) {
    const data = {
      id: Math.floor(Math.random() * 900) + 100,
      comment: this.value,
      programId: id,
      isApproved: true,
    };

    this.allowanceService
      .sendAllowanceApproval(data as AllowanceApproval)
      .subscribe(
        (response) => {
          this.visible = false;
          console.log(response);
          this.msgService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Program List Approved Successfully',
          });

          this.value = '';
        },
        (error) => {
          console.log(error);
          this.msgService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Program List Approval Unsuccessfully',
          });
        }
      );
  }
}
