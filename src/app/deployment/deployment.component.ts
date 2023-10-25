import { Component, OnInit } from "@angular/core";
import { Router , ActivatedRoute} from "@angular/router";

import {MatDialog} from '@angular/material/dialog';
import {ApiDetailsComponent} from '../api-details/api-details.component'
import { Deployment } from "../interface/deployment-interface";
import { FileInfo } from "../interface/file-interface";
@Component({
  selector: "app-deployment",
  templateUrl: "./deployment.component.html",
  styleUrls: ["./deployment.component.css"],
})
export class DeploymentComponent implements OnInit {

  deploymentsInfo? : Deployment[];
  deplpymentId : number = 1
  selectedFile?: FileInfo
  deploymentInfo? : Deployment;

  title = "API Listing App";
  cssFelxJCTypes = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];
  cssFelxAITypes = [
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "baseline",
  ];

  showGrid : boolean = false
  searchText : string = ""



  cardFilterContent: any = []

  constructor(private router: Router,public dialog: MatDialog, public route : ActivatedRoute) {}
  ngOnInit() {
    this.deploymentsInfo = [
      {
        "Resume": 0,
        "Catalog": "apicloudhub-uat-va.bankofamerica.com",
        "ModifiedAt": "2022-11-04T14:55:22.247",
        "ArtifactName": "api.zip",
        "FilePublishStatus": "C",
        "FilePublishError": "",
        "AIT": 72086,
        "FileName": "apimanagement2-103.json",
        "DeploymentID": 25,
        "MuleOrganizationId": "1D32BEE5-DDC1-4052-8902-1BD6E24A56EB",
        "MuleEnvironmentName": "UAT",
        "FileID": 69,
        "Status": "C",
        "ModifiedAtStr":  new Date()
      },
      {
        "Resume": 0,
        "Catalog": "apicloudhub-uat-va.bankofamerica.com",
        "ModifiedAt": "2022-11-04T14:55:22.247",
        "ArtifactName": "api.zip",
        "FilePublishStatus": "C",
        "FilePublishError": "",
        "AIT": 72086,
        "FileName": "apimanagement2-101.json",
        "DeploymentID": 25,
        "MuleOrganizationId": "1D32BEE5-DDC1-4052-8902-1BD6E24A56EB",
        "MuleEnvironmentName": "UAT",
        "FileID": 70,
        "Status": "C",
        "ModifiedAtStr":  new Date()
      },
      {
        "Resume": 0,
        "Catalog": "apicloudhub-uat-va.bankofamerica.com",
        "ModifiedAt": "2022-11-04T14:55:22.247",
        "ArtifactName": "api.zip",
        "FilePublishStatus": "C",
        "FilePublishError": "",
        "AIT": 72086,
        "FileName": "apimanagement2-102.json",
        "DeploymentID": 25,
        "MuleOrganizationId": "1D32BEE5-DDC1-4052-8902-1BD6E24A56EB",
        "MuleEnvironmentName": "UAT",
        "FileID": 71,
        "Status": "C",
        "ModifiedAtStr": new Date()
      }
    ]
    for(let i = 0; i < this.deploymentsInfo.length; i++) {
      this.deploymentsInfo[i].ModifiedAtStr = new Date(this.deploymentsInfo[i].ModifiedAt)
    }
    this.cardFilterContent = this.deploymentsInfo
  }

  clearSearch() {
    this.searchText = ""
    this.applyAPIFilter("")
  }

  applyAPIFilter(input : string) {
    this.cardFilterContent = this.deploymentsInfo?.filter(apiData => {
      return apiData.FileName.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  showGridView(show : boolean) {
    this.showGrid = show
  }
  getGICONStyle() {
    if(this.showGrid) {
      return {
        'background-color': '#eee',
        'color': '#fff',
        'padding' : '2px',
        'border-radius': '5px'
      }
    }else {
      return {
        'background-color': 'transparent',
        'padding' : '2px',
        'border-radius': '5px'
      }
    }
  }
  getTICONStyle() {
    if(!this.showGrid) {
      return {
        'background-color': '#eee',
        'color': '#fff',
        'padding' : '2px',
        'border-radius': '5px'
      }
    }else {
      return {
        'background-color': 'transparent',
        'padding' : '2px',
        'border-radius': '5px'
      }
    }
  }

  openAPIDetailsDialgue(apiDetails : Deployment) {
    this.deploymentInfo = apiDetails
    const dialogRef = this.dialog.open(ApiDetailsComponent,{
      panelClass: 'api-details-class',
      disableClose: true,
      backdropClass: 'transparent',
      data:apiDetails
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.deploymentInfo = undefined
    });
  }
}
