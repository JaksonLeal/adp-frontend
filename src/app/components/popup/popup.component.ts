import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupComponent>, private buildr: FormBuilder,
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

  myform = this.buildr.group({
    name: this.buildr.control(''),
    email: this.buildr.control(''),
    phone: this.buildr.control(''),
    status: this.buildr.control(true)
  });

  Saveuser() {
    /*this.service.Savecustomer(this.myform.value).subscribe(() => {
      this.closepopup();
    });*/
  }
}

