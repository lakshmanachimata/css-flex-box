import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flex.base',
  templateUrl: './flex.base.component.html',
  styleUrls: ['./flex.base.component.scss']
})
export class FlexBaseComponent {

  constructor(private router : Router){}
  title = 'css-flex-box';
  cssFelxTypes = ["baseline","flex-start", "flex-end","center","stretch", "space-between","space-around","space-evenly"]

  gotoDetails() {
    this.router.navigateByUrl("/flexitype",{replaceUrl : true})
  }
}

