import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsRoutingModule } from './bs-routing.module';
import { BsComponent } from './bs.component';

@NgModule({
  declarations: [
    BsComponent
  ],
  imports: [
    BrowserModule,
    BsRoutingModule
  ],
  providers: [],
  bootstrap: [BsComponent]
})
export class BsModule { }
