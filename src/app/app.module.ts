import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayLogoComponent } from "./display-logo/display-logo.component";
import { WhenDoesHePlayComponent } from "./when-does-he-play/when-does-he-play.component";

@NgModule({
  declarations: [AppComponent, DisplayLogoComponent, WhenDoesHePlayComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
