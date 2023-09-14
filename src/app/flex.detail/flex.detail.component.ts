import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flex.detail',
  templateUrl: './flex.detail.component.html',
  styleUrls: ['./flex.detail.component.scss']
})
export class FlexDetailComponent {

  flexstyle : String = ""
  type : String = ""
  constructor(private route: ActivatedRoute) { }

  cssFelxTypes = ["item 1","item 1", "item 3","item 4","item 5"]

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.flexstyle = params['flexstyle'];
        this.type = params['type'];
      }
    );
  }

  getFlexStyle() {
    switch(this.type) {
      case "justify-content":
        return {
          "justify-content" : this.flexstyle
        }
      case "align-content" :
        return {
          "align-content" : this.flexstyle
        }
      default : {
        return {
          "align-content" : "center",
          "justify-content" : "center"
        }
      }
    }

  }
}
