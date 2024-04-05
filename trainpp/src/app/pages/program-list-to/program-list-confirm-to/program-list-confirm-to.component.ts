import { Component } from '@angular/core';

@Component({
  selector: 'app-program-list-confirm-to',
  templateUrl: './program-list-confirm-to.component.html',
  styleUrl: './program-list-confirm-to.component.css'
})
export class ProgramListConfirmToComponent {

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../../services/program.service';
import { Approval } from '../../../interfaces/participantListApproval';
import { PARTICIPANTS, Participant } from './data/participants';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-program-list-confirm-dgm',
  templateUrl: './program-list-confirm-dgm.component.html',
  styleUrl: './program-list-confirm-dgm.component.css',
})
export class ProgramListConfirmDgmComponent implements OnInit {
  program!: any;
  participants: Participant[] = PARTICIPANTS;
  visible: boolean = false;
  value: string | undefined;

  //dialog visibilty
  showDialog() {
    this.visible = true;
  }

  submitFormData() {
    const data = {
      id: Math.floor(Math.random() * 900) + 100,
      comment: this.value,
      programId: this.program.id,
      isApproved: true
    };

    this.programService.sendPaticipantListApproval(data as  Approval).subscribe(
      response => {
        this.visible = false;
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
    private route: ActivatedRoute,
    private programService: ProgramService,
    private msgService: MessageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.programService.getProgramById(id as string).subscribe((program) => {
      this.program = program[0];
      console.log(program);
    });
  }
}
