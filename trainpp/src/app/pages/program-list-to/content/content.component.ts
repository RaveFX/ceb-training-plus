import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponentto {

}


import { Component, Input, OnInit } from '@angular/core';
import { ProgramService } from '../../../services/program.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  @Input() centre!: string;

  programs!: any[];
  types!: any[];
  statuses!: any[];
  onStatusChange(selectedValues: any[]) {
    console.log('Selected Status Values:', selectedValues);
    // Other logic if needed
  }

  getSeverity(status: string): string {
    if (status === 'pending') {
      return 'warning';
    } else if (status === 'approved') {
      return 'success';
    } else if (status === 'rejected') {
      return 'danger';
    }else {
      return 'info';
    }
 }

  constructor(
    private programService: ProgramService
  ) {}

  ngOnInit() {
    this.types = [
      { label: 'Training', value: 'Training' },
      { label: 'Examination', value: 'Examination' },
    ];

    this.statuses = [
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ];

    this.programService.getProgramByTCentre(this.centre as string).subscribe(
      (response) => {
        this.programs = response;
      }
    )
  }
}
