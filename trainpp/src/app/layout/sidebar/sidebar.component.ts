import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  OnInit,
} from '@angular/core';
import { to_sidebarData, dgm_sidebarData, admin_sidebarData } from './nav-data';
import { ISidebarData } from './helper';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  userName = sessionStorage.getItem('name');
  userEmail = sessionStorage.getItem('email');
  userRole = sessionStorage.getItem('role');
  proPic = sessionStorage.getItem('proPic');

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData: ISidebarData[] = [];
  submenuVisibility: { [key: string]: boolean } = {};

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.setNavDataBasedOnRole();
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  toggleSubmenu(label: string): void {
    this.submenuVisibility[label] = !this.submenuVisibility[label];
  }

  setNavDataBasedOnRole(): void {
    if (this.userRole === 'TO') {
      this.navData = to_sidebarData;
    } else if (this.userRole === 'DGM') {
      this.navData = dgm_sidebarData;
    } else if (this.userRole === 'ADMIN') {
      this.navData = admin_sidebarData;
    }
  }

  logout() {
    // Clear authentication state (example: remove tokens)
    this.authService.clearAuthState();

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
