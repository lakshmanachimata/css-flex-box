import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "app-flex.base",
  templateUrl: "./flex.base.component.html",
  styleUrls: ["./flex.base.component.scss"],
})
export class FlexBaseComponent {
  constructor(private router: Router) {}
  title = "css-flex-box";
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

  // gotoDetailsJC(cfType : String) {
  //   this.router.navigateByUrl("/flexitype?flexstyle=" + cfType + "&type=justify-content")
  // }
  // gotoDetailsAI(cfType : String) {
  //   this.router.navigateByUrl("/flexitype?flexstyle=" + cfType+ "&type=align-content")
  // }

  gridView = false;
  tableView = true;

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
}
