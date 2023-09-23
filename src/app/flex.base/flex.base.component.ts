import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {ApiDetailsComponent} from '../api-details/api-details.component'
@Component({
  selector: "app-flex.base",
  templateUrl: "./flex.base.component.html",
  styleUrls: ["./flex.base.component.scss"],
})
export class FlexBaseComponent {
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

  cardContent = [
    {
      id: 1,
      type: "REST API",
      name: "BoAApie-Agent",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 2,
      type: "REST API",
      name: "BoAApie-Agent",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 3,
      type: "REST API",
      name: "BoAApie-Agent",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 4,
      type: "REST API",
      name: "BoAApie-Agent",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 5,
      type: "REST API",
      name: "BoAApie-Agent",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 6,
      type: "REST API",
      name: "BoAApie-Agent",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
  ];


  constructor(private router: Router,public dialog: MatDialog) {}
  ngOnInit() { }


  // gotoDetailsJC(cfType : String) {
  //   this.router.navigateByUrl("/flexitype?flexstyle=" + cfType + "&type=justify-content")
  // }
  // gotoDetailsAI(cfType : String) {
  //   this.router.navigateByUrl("/flexitype?flexstyle=" + cfType+ "&type=align-content")
  // }


  showGridView(show : boolean) {
    this.showGrid = show
  }

  openAPIDetailsDialgue(apiDetails : any) {
    const dialogRef = this.dialog.open(ApiDetailsComponent,{
      panelClass: 'api-details-class'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
