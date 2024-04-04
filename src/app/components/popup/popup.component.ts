import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { jwtDecode, JwtPayload } from 'jwt-decode';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {

  public formLogIn = this.buildr.group({
    email: this.buildr.control(''),
    password: this.buildr.control('')
  });

  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<PopupComponent>,
    private buildr: FormBuilder, private loginService: LoginService
  ) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.setpopupdata(this.inputdata.code)
    }
  }

  setpopupdata(code: any) {
    /*this.service.GetCustomerbycode(code).subscribe((item: any) => {
      this.editdata = item;
      this.myform.setValue({
        name: this.editdata.name, email: this.editdata.email, phone: this.editdata.phone,
        status: this.editdata.status
      })
    });*/
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  logIn(): void {
    this.loginService.logIn(this.formLogIn.value).subscribe(
      {
        next: (response: any) => {
          console.log("next: " + response.token);
          this.loginService.setTokenUser(response.token);
          const decodedToken = jwtDecode<JwtPayload>(response.token);
          console.log(decodedToken);
          this.loginService.getCurrentUser().subscribe((user: any) => {
            console.log(user);
          });
        },
        error: (error) => {
          alert("error: " + error.error.text);
        },
        complete: () => {
          console.log("exitoso");
          this.closepopup();
        }
      }
    );
  }
}


