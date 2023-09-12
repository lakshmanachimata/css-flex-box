import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FlexDetailComponent } from './flex.detail/flex.detail.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'flexitype', component:FlexDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
