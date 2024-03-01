import { Component } from '@angular/core';
import { sidebarData } from './nav-data';
import { ISidebarData } from './helper';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  collapsed = false;
  navData = sidebarData;
  multiple: boolean = false;


  handleClick(item: ISidebarData): void {
    if (!this.multiple){
      for(let modelItem of this.navData){
        if(item !== modelItem && modelItem.expanded){
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded

}

}
