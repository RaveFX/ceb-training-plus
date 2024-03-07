import { Component, OnInit } from '@angular/core';
import { Program, PROGRAMS } from './data/trainings-data';
import { States } from './data/others';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.css',
})
export class ProgramListComponent implements OnInit {
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
