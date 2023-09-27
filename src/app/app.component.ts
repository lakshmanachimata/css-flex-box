import { Component, OnInit } from '@angular/core';
import { DeploymentComponent } from './deployment/deployment.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'css-flex-box';
  constructor( public router : Router) {}
  navigateToDeployment() {
    this.router.navigateByUrl("/deployment/1234",{});
  }
  ngOnInit(): void {
      setTimeout(() => {
        this.navigateToDeployment()
      },1000)
  }
}

