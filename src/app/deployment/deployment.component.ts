import { Component, OnInit } from "@angular/core";
import { Router , ActivatedRoute} from "@angular/router";

import {MatDialog} from '@angular/material/dialog';
import {ApiDetailsComponent} from '../api-details/api-details.component'
import { Deployment } from "../interface/deployment-interface";
import { FileInfo } from "../interface/Fileinfo";
@Component({
  selector: "app-deployment",
  templateUrl: "./deployment.component.html",
  styleUrls: ["./deployment.component.css"],
})
export class DeploymentComponent implements OnInit {

  deploymentInfo? : Deployment;
  deplpymentId : number = 1
  selectedFile?: FileInfo

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

  showGrid : boolean = true
  searchText : string = ""



  cardFilterContent: any= []

  constructor(private router: Router,public dialog: MatDialog, public route : ActivatedRoute) {}
  ngOnInit() {
    this.deploymentInfo = {
      artifactName : "a name",
      deploymentId : 1111,
      ait: 1121,
      catalog : "catalog val",
      organizationId : "org id",
      environmentName : "env Name",
      resumeCount : "resume cnt",
      status : "status",
      initiatedBy : "init by",
      initiatedDate : new Date(),
      resumedBy : "resume by",
      resumedDate : new Date(),
      fileDetails : [
        {
          FileID : 1111,
          FileName : "fl_Name_1111.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 4
        },
        {
          FileID : 2222,
          FileName : "fl_Name_2222.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 5
        },
        {
          FileID : 3333,
          FileName : "fl_Name_3333.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 3
        },
        {
          FileID : 6789,
          FileName : "fl_Name_6789.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 4
        },
        {
          FileID : 4444,
          FileName : "fl_Name_4444.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 2
        },
        {
          FileID : 5555,
          FileName : "fl_Name_5555.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 1
        },
        {
          FileID : 6666,
          FileName : "fl_Name_6666.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 5
        },
        {
          FileID : 7777,
          FileName : "fl_Name_7777.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 4
        },
        {
          FileID : 8888,
          FileName : "fl_Name_8888.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 5
        },
        {
          FileID : 9999,
          FileName : "fl_Name_9999.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 3
        },
        {
          FileID : 1234,
          FileName : "fl_Name_1234.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 2
        },
        {
          FileID : 3456,
          FileName : "fl_Name_3456.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 1
        },
        {
          FileID : 4567,
          FileName : "fl_Name_4567.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 4
        },
        {
          FileID : 5678,
          FileName : "fl_Name_5678.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 3
        },
        {
          FileID : 7891,
          FileName : "fl_Name_7891.json",
          FilePublishStatus : "FP Status",
          FilePublishError : "FP Err",
          ModifiedAt : new Date(),
          rating : 3
        },
      ],
    }
    this.cardFilterContent = this.deploymentInfo?.fileDetails
    let idVal = this.route.snapshot.paramMap.get('id')
    if(idVal != null) {
      this.deploymentInfo.deploymentId = parseInt(idVal)
    }
  }

  clearSearch() {
    this.searchText = ""
    this.applyAPIFilter("")
  }

  applyAPIFilter(input : string) {
    this.cardFilterContent = this.deploymentInfo?.fileDetails.filter(apiData => {
      return apiData.FileName.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

  showGridView(show : boolean) {
    this.showGrid = show
  }
  getGICONStyle() {
    if(this.showGrid) {
      return {
        'background-color': '#374785',
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
        'background-color': '#374785',
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

  openAPIDetailsDialgue(apiDetails : any) {
    const dialogRef = this.dialog.open(ApiDetailsComponent,{
      panelClass: 'api-details-class',
      disableClose: true,
      backdropClass: 'transparent',
      data:apiDetails
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
