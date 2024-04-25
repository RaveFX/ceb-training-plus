import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/auth';
import { MessageService } from 'primeng/api';
import { FileUploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  id: string | null = null;
  user!: User;
  visible: boolean = false;
  visibleDP: boolean = false;
  email: string | null = null;
  tpNo: string | null = null;

  uploadedFiles: any[] = [];

  constructor(
    private userService: UserService,
    private msgService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');

    this.userService.getUserById(this.id as string).subscribe(
      (response: User[]) => {
        if (response.length > 0) {
          this.user = response[0];
          this.email = this.user.email;
          this.tpNo = this.user.tpNo;
        }
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  submitChanges() {
    const data = {
      id: this.user.id,
      email: this.email,
      tpNo: this.tpNo,
    };

    this.userService.updateUser(data as User).subscribe(
      (response) => {
        this.visible = false;
        console.log(response);
        this.msgService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Details Updated Successfully',
        });

        this.email = '';
        this.tpNo = '';
      },
      (error) => {
        console.log(error);
        this.msgService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Update details Failed',
        });
      }
    );
  }

  onUpload(event: FileUploadEvent) {
    // for (let file of event.files) {
    //   this.uploadedFiles.push(file);
    // }

    // this.msgService.add({
    //   severity: 'info',
    //   summary: 'File Uploaded',
    //   detail: '',
    // });

    console.log(event);
  }

  showDialog() {
    this.visible = true;
  }

  showDPChangeDialog() {
    this.visibleDP = true;
  }
}
