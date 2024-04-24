import { Component, OnInit } from '@angular/core';
import { Program, PROGRAMS } from './data/trainings-data';
import { States } from './data/others';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-program-request-dgm',
  templateUrl: './program-request-dgm.component.html',
  styleUrl: './program-request-dgm.component.css'
})
export class ProgramRequestDGMComponent implements OnInit {
  programs: Program[] = PROGRAMS;
  statuses!: any[];
  visible: boolean = false;

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

  showDialog() {
    this.visible = true;
 }

}
