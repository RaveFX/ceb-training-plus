import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../../interfaces/rooms';

@Component({
  selector: 'app-block-hostel-dgm',
  templateUrl: './block-hostel-dgm.component.html',
  styleUrl: './block-hostel-dgm.component.css'
})
export class BlockHostelDgmComponent {
  //   buildings = [
  //     {
  //       location: 'piliyandala',
  //       name: 'Building A',
  //       rooms: [
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 }
  //       ]
  //     },
  //     {
  //       location: 'Kinchigune',
  //       name: 'Building B',
  //       rooms: [
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 }

  //       ]
  //     },
  //     {
  //       location: 'kalawana',
  //       name: 'Building B',
  //       rooms: [
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 }

  //       ]
  //     },
  //     {
  //       location: 'castlereigh',
  //       name: 'Building B',
  //       rooms: [
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '001', beds: 4 },
  //         { roomNo: '002', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 },
  //         { roomNo: '008', beds: 4 },
  //         { roomNo: '009', beds: 2 },
  //         { roomNo: '010', beds: 4 },
  //         { roomNo: '011', beds: 2 }

  //       ]
  //     }
  //   ];
  // }

  // // import { Component } from '@angular/core';
  // // import { TabViewChangeEvent } from 'primeng/tabview';

  // // @Component({
  // //   selector: 'app-block-hostel-dgm',
  // //   templateUrl: './block-hostel-dgm.component.html',
  // //   styleUrls: ['./block-hostel-dgm.component.css']
  // // })
  // // export class BlockHostelDgmComponent {
  // //     buildings = [
  // //     {
  // //       location: 'Piliyandala',
  // //       name: 'PILI-Building A',
  // //       rooms: [
  // //         { roomNo: '001', beds: 4 },
  // //         { roomNo: '010', beds: 4 },
  // //         { roomNo: '011', beds: 2 }
  // //       ]
  // //     },
  // //     {
  // //       location: 'Kinchigune',
  // //       name: 'KIN-Building B',
  // //       rooms: [
  // //         { roomNo: '001', beds: 4 },
  // //         { roomNo: '002', beds: 2 },
  // //         { roomNo: '009', beds: 2 },
  // //         { roomNo: '010', beds: 4 },
  // //         { roomNo: '011', beds: 2 }

  // //       ]
  // //     },
  // //     {
  // //       location: 'Kalawana',
  // //       name: 'KAL-Building C',
  // //       rooms: [
  // //         { roomNo: '001', beds: 4 },
  // //         { roomNo: '002', beds: 2 },
  // //         { roomNo: '008', beds: 4 },
  // //         { roomNo: '009', beds: 2 },
  // //         { roomNo: '010', beds: 4 },
  // //         { roomNo: '011', beds: 2 }

  // //       ]
  // //     },

  // //     {
  // //       location: 'Kalawana',
  // //       name: 'KAL-Building F',
  // //       rooms: [
  // //         { roomNo: '008', beds: 4 },
  // //         { roomNo: '009', beds: 2 },
  // //         { roomNo: '010', beds: 4 },
  // //         { roomNo: '011', beds: 2 }

  // //       ]
  // //     },
  // //     {
  // //       location: 'Castlereigh',
  // //       name: 'CAS-Building D',
  // //       rooms: [
  // //         { roomNo: '001', beds: 4 },
  // //         { roomNo: '002', beds: 2 },
  // //         { roomNo: '008', beds: 4 },
  // //         { roomNo: '011', beds: 2 }

  // //       ]
  // //     }
  // //   ];
  // //   selectedLocation: string = '';

  // //   // onTabChange(event: { index: number }) {
  // //   //   this.selectedLocation = this.buildings[event.index].location;
  // //   // }

  // //   // onTabChange(event: { index: number }) {
  // //   //   const selectedIndex = (event as any).index; // Cast event to any and then access index
  // //   //   this.selectedLocation = this.buildings[selectedIndex].location;
  // //   // }

  // //   onTabChange(event: TabViewChangeEvent) {
  // //     const selectedIndex = event.index;
  // //     this.selectedLocation = this.buildings[selectedIndex].location;
  // //   }

  visible: boolean = false;
  locations: any[] = []; // Initialize empty array for hostels
  selectedRoom: Room | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    this.http.get<any[]>('http://localhost:3000/locations') // Replace URL with your JSON server endpoint
      .subscribe(data => {
        this.locations = data;
      });
  }
  showDialog(room: Room) {

    this.visible = true;
    this.selectedRoom = room;

  }


}

