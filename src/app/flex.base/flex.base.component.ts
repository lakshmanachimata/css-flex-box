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
  cssFelxJCTypes = ["flex-start", "flex-end","center", "space-between","space-around","space-evenly"]
  cssFelxAITypes = [ "stretch", "flex-start" , "flex-end" , "center" , "space-between","space-around","space-evenly" ,"baseline"]

  gotoDetailsJC(cfType : String) {
    this.router.navigateByUrl("/flexitype?flexstyle=" + cfType + "&type=justify-content")
  }
  gotoDetailsAI(cfType : String) {
    this.router.navigateByUrl("/flexitype?flexstyle=" + cfType+ "&type=align-content")
  }
}

