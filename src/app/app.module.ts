import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexDetailComponent } from './flex.detail/flex.detail.component';
import { FlexBaseComponent } from './flex.base/flex.base.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexDetailComponent,
    FlexBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
