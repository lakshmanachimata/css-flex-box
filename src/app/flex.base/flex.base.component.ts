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
  searchText : string = ""
  cardContent = [
    {
      id: 1,
      type: "REST API",
      name: "GET ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 2,
      type: "REST API",
      name: "POST ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 3,
      type: "REST API",
      name: "PUT ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 3,
    },
    {
      id: 1,
      type: "REST API",
      name: "GET ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 2,
      type: "REST API",
      name: "POST ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 3,
    },
    {
      id: 3,
      type: "REST API",
      name: "PUT ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 1,
      type: "REST API",
      name: "GET ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 2,
    },
    {
      id: 2,
      type: "REST API",
      name: "POST ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 1,
    },
    {
      id: 3,
      type: "REST API",
      name: "PUT ITEM REST API",
      dateModified: "Aug 24, 2023",
      rating: 4,
    },
  ];

  cardFilterContent: any= []

  constructor(private router: Router,public dialog: MatDialog) {}
  ngOnInit() {
    this.cardFilterContent = this.cardContent
  }


  // gotoDetailsJC(cfType : String) {
  //   this.router.navigateByUrl("/flexitype?flexstyle=" + cfType + "&type=justify-content")
  // }
  // gotoDetailsAI(cfType : String) {
  //   this.router.navigateByUrl("/flexitype?flexstyle=" + cfType+ "&type=align-content")
  // }

  clearSearch() {
    this.searchText = ""
    this.applyAPIFilter("")
  }

  applyAPIFilter(input : string) {
    this.cardFilterContent = this.cardContent.filter(apiData => {
      return apiData.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

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
