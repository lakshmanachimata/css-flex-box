import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'css-flex-box';
  cssFelxTypes = ["baseline","flex-start", "flex-end","center","stretch", "space-between","space-around","space-evenly"]
}
