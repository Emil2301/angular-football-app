import { MaterialModule } from "./material/material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DrawLogoComponent } from "./draw-logo/draw-logo.component";
import { WhenDoesHePlayComponent } from "./when-does-he-play/when-does-he-play.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { NextMatchDetailsComponent } from './next-match-details/next-match-details.component';
import { ClubNameAndLogoComponent } from './club-name-and-logo/club-name-and-logo.component';

@NgModule({
  declarations: [AppComponent, DrawLogoComponent, WhenDoesHePlayComponent, NextMatchDetailsComponent, ClubNameAndLogoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
