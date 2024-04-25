import { Component, OnInit } from '@angular/core';
import { RESULTS, Result } from './data/results'
import { MessageService } from 'primeng/api';
import { ProgramService } from '../../services/program.service';
import { ResultApproval } from '../../interfaces/result';

@Component({
  selector: 'app-approve-results-dgm',
  templateUrl: './approve-results-dgm.component.html',
  styleUrl: './approve-results-dgm.component.css'
})
export class ApproveResultsDgmComponent implements OnInit{

  results: Result[] = RESULTS;
  visible_results: boolean = false;
  visible_approval: boolean = false;
  selectedResult: Result | null = null;
  value: string | undefined;

  program = {
    id: "P001",
    name: "Exam 001",
    project_manager: "Jhone Doe"
  }

  viewFullDetails(result: Result) {
    this.selectedResult = result;
    this.visible_results = true;
  }

  showDialog() {
    this.visible_approval = true;
  }

  closeDialog() {
    this.visible_results = false;
    this.visible_approval = false;
  }

  submitFormData() {
    const data = {
      id: Math.floor(Math.random() * 900) + 100,
      comment: this.value,
      programId: this.program.id,
      isApproved: true
    };

    this.programService.sendResultApproval(data as  ResultApproval).subscribe(
      response => {
        this.visible_approval = false;
        console.log(response);
        this.msgService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Program List Approved Successfully',
        });

        this.value = '';
      },
      error => {
        console.log(error);
        this.msgService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Program List Approval Unsuccessfully',
        });
      }
    )
  }

  constructor(
    private msgService: MessageService,
    private programService: ProgramService,
  ) {}

  ngOnInit(): void {
    
  }
}
