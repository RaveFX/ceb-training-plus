import { Component } from '@angular/core';


@Component({
  selector: 'app-block-hostel-dgm',
  templateUrl: './block-hostel-dgm.component.html',
  styleUrl: './block-hostel-dgm.component.css'
})
export class BlockHostelDgmComponent {
  buildings = [
    {
      name: 'Building A',
      rooms: [
        { roomNo: '001', beds: 4 },
        { roomNo: '002', beds: 2 },
        { roomNo: '008', beds: 4 },
        { roomNo: '009', beds: 2 },
        { roomNo: '010', beds: 4 },
        { roomNo: '011', beds: 2 },
        { roomNo: '001', beds: 4 },
        { roomNo: '002', beds: 2 },
        { roomNo: '008', beds: 4 },
        { roomNo: '009', beds: 2 },
        { roomNo: '010', beds: 4 },
        { roomNo: '011', beds: 2 },
        { roomNo: '008', beds: 4 },
        { roomNo: '009', beds: 2 },
        { roomNo: '010', beds: 4 },
        { roomNo: '011', beds: 2 }
      ]
    },
    {
      name: 'Building B',
      rooms: [
        { roomNo: '001', beds: 4 },
        { roomNo: '002', beds: 2 },
        { roomNo: '008', beds: 4 },
        { roomNo: '009', beds: 2 },
        { roomNo: '010', beds: 4 },
        { roomNo: '011', beds: 2 },
        { roomNo: '001', beds: 4 },
        { roomNo: '002', beds: 2 },
        { roomNo: '008', beds: 4 },
        { roomNo: '009', beds: 2 },
        { roomNo: '010', beds: 4 },
        { roomNo: '011', beds: 2 },
        { roomNo: '001', beds: 4 },
        { roomNo: '002', beds: 2 },
        { roomNo: '008', beds: 4 },
        { roomNo: '009', beds: 2 },
        { roomNo: '010', beds: 4 },
        { roomNo: '011', beds: 2 },
        { roomNo: '008', beds: 4 },
        { roomNo: '009', beds: 2 },
        { roomNo: '010', beds: 4 },
        { roomNo: '011', beds: 2 }
     
      ]
    }
    // Add more buildings as needed
  ];



}
