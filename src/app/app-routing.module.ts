import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlexDetailComponent } from './flex.detail/flex.detail.component';
import { DeploymentComponent } from './deployment/deployment.component';

const routes: Routes = [
  { path: 'deployment/:id', component:DeploymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
