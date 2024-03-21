import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../../interfaces/rooms';

@Component({
  selector: 'app-block-hostel-dgm',
  templateUrl: './block-hostel-dgm.component.html',
  styleUrl: './block-hostel-dgm.component.css'
})
export class BlockHostelDgmComponent {
  visible: boolean = false;
  locations: any[] = [];
  selectedRoom: Room | null = null;
  inputValue: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    this.http.get<any[]>('http://localhost:3000/locations')
      .subscribe(data => {
        this.locations = data;
      });
  }

  showDialog(room: Room) {
    this.visible = true;
    this.selectedRoom = room;
  }

  // updateStatus(room: Room) {
  //   room.status = true; // Update status to true
  //   room.comments = this.inputValue; // Update comments

  //   // Send PUT request to update room data on the server
  //   this.http.put(`http://localhost:3000/locations/${room.number}/hostels/${room.}/buildings/${room.buildingId}/rooms/${room.roomId}`, room)
  //     .subscribe(response => {
  //       console.log('Room updated successfully:', response);
  //       // Handle success
  //       this.visible = false; // Close dialog after updating
  //     }, error => {
  //       console.error('Error updating room:', error);
  //       // Handle error
  //     });
  // }
}
