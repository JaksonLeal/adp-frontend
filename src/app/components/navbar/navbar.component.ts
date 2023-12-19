import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('drawer') private drawer: MatDrawer;

  public badgevisible = false;
  badgevisibility() {
    this.badgevisible = true; //delete notifications by default
    //this.drawer.mode='side';
  }
}
