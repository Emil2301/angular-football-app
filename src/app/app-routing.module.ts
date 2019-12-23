import { WhenDoesHePlayComponent } from "./when-does-he-play/when-does-he-play.component";
import { DisplayLogoComponent } from "./display-logo/display-logo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/display-logo", pathMatch: "full" },
  { path: "display-logo", component: DisplayLogoComponent },
  { path: "when-does-he-play", component: WhenDoesHePlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
