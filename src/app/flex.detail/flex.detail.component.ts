import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flex.detail',
  templateUrl: './flex.detail.component.html',
  styleUrls: ['./flex.detail.component.scss']
})
export class FlexDetailComponent {

  cssFelxStyles = [,"flex-start", "flex-end","center", "space-between","space-around","space-evenly"]
  flexstyle : String = ""

  constructor(private route: ActivatedRoute) { }

  cssFelxTypes = ["item 1","item 1", "item 3","item 4","item 5"]

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.flexstyle = params['flexstyle'];
      }
    );
  }

  getFlexStyle() {
    return {
      "justify-content" : this.flexstyle
    }
  }
}
