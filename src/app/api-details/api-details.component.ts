import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileInfo } from '../interface/file-interface';
@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css'],
})
export class ApiDetailsComponent {
  apiDetailsData? : FileInfo
  viewJSON : boolean = false
  apiDetailsString: string = ""
  constructor(
    public dialogRef: MatDialogRef<ApiDetailsComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: FileInfo) {
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
