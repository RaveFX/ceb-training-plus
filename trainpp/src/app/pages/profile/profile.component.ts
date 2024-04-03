import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/auth'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  id: string | null = null;
  user !: User;

  constructor( private userService: UserService,) {}

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');

    this.userService.getUserById(this.id as string).subscribe(
      (response: User[]) => {
        if (response.length > 0) {
          this.user = response[0];
          console.log(this.user);
        } else {
          console.log('User not found');
        }
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
}
