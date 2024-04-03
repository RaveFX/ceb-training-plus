import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  role: string | null = sessionStorage.getItem('role');
  profileLink: string = "";

  constructor() {
    if (this.role === "TO") {
      this.profileLink = "/to/profile";
    } else if (this.role === "DGM") {
      this.profileLink = "/dgm/profile";
    }
  }
}
