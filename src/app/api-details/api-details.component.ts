import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileInfo } from '../interface/file-interface';
import { Deployment } from '../interface/deployment-interface';
@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css'],
})
export class ApiDetailsComponent {
  apiDetailsData? : Deployment
  viewJSON : boolean = false
  apiDetailsString: string = ""
  constructor(
    public dialogRef: MatDialogRef<ApiDetailsComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Deployment) {
    this.apiDetailsData = {...data};
    this.apiDetailsString = JSON.stringify(this.apiDetailsData)
  }

  setApiDetailsData(apiDetails: any) {
    this.apiDetailsData = apiDetails
  }
  viewAPIJSON() {
    this.viewJSON = !this.viewJSON;
  }
  downloadAPIJSON() {
    window.open("https://www.google.com", "_blank");
  }
  closeDialog() {
    this.dialogRef.close()
  }
}
