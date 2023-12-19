import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('drawer') private drawer: MatDrawer;

  constructor(private dialog: MatDialog) {

  }

  public badgevisible = false;
  badgevisibility() {
    this.badgevisible = true; //delete notifications by default
    //this.drawer.mode='side';
  }

  createUser() {
    var description = "To continue you must enter your Email and Password";
    this.openPopup(0, 'Log In', description, PopupComponent);
  }

  openPopup(code: any, title: any, description: any, component: any) {
    var popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code,
        description: description
      }
    });
    popup.afterClosed().subscribe(item => {
      // console.log(item)
      //this.loadcustomer();
    })
  }
}
