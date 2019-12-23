import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayLogoComponent } from "./display-logo/display-logo.component";
import { WhenDoesHePlayComponent } from "./when-does-he-play/when-does-he-play.component";

@NgModule({
  declarations: [AppComponent, DisplayLogoComponent, WhenDoesHePlayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
