import { Component, OnInit } from '@angular/core';
import { Program, PROGRAMS } from './data/trainings-data';

@Component({
  selector: 'app-attendance-to',
  templateUrl: './attendance-to.component.html',
  styleUrl: './attendance-to.component.css'
})
export class AttendanceToComponent {
  programs: Program[] = PROGRAMS;
  statuses!: any[];
  onStatusChange(selectedValues: any[]) {
    console.log('Selected Status Values:', selectedValues);
    // Other logic if needed
  }

  getSeverity(status: string): string {
    if (status === 'pending') {
      return 'warning';
    } else if (status === 'on going') {
      return 'success';
    } else {
      return 'info';
    }
 }

 getOngoingPrograms(): Program[] {
  return this.programs.filter(program => program.status === 'on going');
}

  constructor() {}

  ngOnInit() {
    this.statuses = [
      { label: 'On Going', value: 'on going' },
      { label: 'Pending', value: 'pending' },
    ];
  }
}
