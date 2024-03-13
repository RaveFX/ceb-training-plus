import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../../services/program.service';
import { PARTICIPANTS, Participant } from './data/participants';

@Component({
  selector: 'app-program-list-confirm-dgm',
  templateUrl: './program-list-confirm-dgm.component.html',
  styleUrl: './program-list-confirm-dgm.component.css'
})
export class ProgramListConfirmDgmComponent implements OnInit {
  program!: any;
  participants: Participant[] = PARTICIPANTS;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.programService.getProgramById(id as string).subscribe(program => {
      this.program = program[0];
      console.log(program);
    });
  }
}
