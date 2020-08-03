import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsRoutingModule } from './bs-routing.module';
import { BsComponent } from './bs.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BsComponent
  ],
  imports: [
    BrowserModule,
    BsRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BsComponent]
})
export class BsModule { }
