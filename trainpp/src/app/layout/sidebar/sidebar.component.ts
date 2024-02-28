import { Component } from '@angular/core';
import { sidebarData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  collapsed = false;
  navData = sidebarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
  
}

closeSidenav(): void {
    this.collapsed = false;

}
 
}
