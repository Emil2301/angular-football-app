import { WhenDoesHePlayComponent } from "./when-does-he-play/when-does-he-play.component";
import { DrawLogoComponent } from "./draw-logo/draw-logo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "draw-logo", pathMatch: "full" },
  { path: "draw-logo", component: DrawLogoComponent },
  { path: "when-does-he-play", component: WhenDoesHePlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
