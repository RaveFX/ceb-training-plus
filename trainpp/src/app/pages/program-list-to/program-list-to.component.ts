import { Component } from '@angular/core';
import { Program, PROGRAMS } from './data/trainings-data';

@Component({
  selector: 'app-program-list-to',
  templateUrl: './program-list-to.component.html',
  styleUrl: './program-list-to.component.css'
})
export class ProgramListToComponent {

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

  constructor() {}

  ngOnInit() {
    this.statuses = [
      { label: 'On Going', value: 'on going' },
      { label: 'Pending', value: 'pending' },
    ];
  }
  
}


