import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.scss'],
})
export class ApiDetailsComponent {
  apiDetailsData : any = {}

  constructor(
    public dialogRef: MatDialogRef<ApiDetailsComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.apiDetailsData = {...data};
  }

  setApiDetailsData(apiDetails: any) {
    this.apiDetailsData = apiDetails
  }
  viewAPIJSON() {

  }
  downloadAPIJSON() {

  }
}
