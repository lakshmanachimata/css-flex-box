import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {ApiDetailsComponent} from '../api-details/api-details.component'
@Component({
  selector: "app-flex.base",
  templateUrl: "./deployment.component.html",
  styleUrls: ["./deployment.component.css"],
})
export class DeploymentComponent {
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
      name: "GET ITEM REST API 1",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 2,
      type: "REST API",
      name: "POST ITEM REST API 1",
      dateModified: "Aug 24, 2023",
      rating: 5,
    },
    {
      id: 3,
      type: "REST API",
      name: "PUT ITEM REST API 1",
      dateModified: "Aug 24, 2023",
      rating: 3,
    },
    {
      id: 4,
      type: "REST API",
      name: "GET ITEM REST API 2",
      dateModified: "Aug 25, 2023",
      rating: 5,
    },
    {
      id: 5,
      type: "REST API",
      name: "POST ITEM REST API 2",
      dateModified: "Aug 25, 2023",
      rating: 3,
    },
    {
      id: 6,
      type: "REST API",
      name: "PUT ITEM REST API 2",
      dateModified: "Aug 25, 2023",
      rating: 5,
    },
    {
      id: 7,
      type: "REST API",
      name: "GET ITEM REST API 3",
      dateModified: "Aug 26, 2023",
      rating: 2,
    },
    {
      id: 8,
      type: "REST API",
      name: "POST ITEM REST API 3",
      dateModified: "Aug 26, 2023",
      rating: 1,
    },
    {
      id: 9,
      type: "REST API",
      name: "PUT ITEM REST API 3",
      dateModified: "Aug 26, 2023",
      rating: 4,
    },
    {
      id: 10,
      type: "REST API",
      name: "GET ITEM REST API 4",
      dateModified: "Sept 26, 2023",
      rating: 2,
    },
    {
      id: 11,
      type: "REST API",
      name: "POST ITEM REST API 4",
      dateModified: "Sept 26, 2023",
      rating: 1,
    },
    {
      id: 12,
      type: "REST API",
      name: "PUT ITEM REST API 4",
      dateModified: "Sept 26, 2023",
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
