import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Football App";
  selectedRoute = "display-logo";
  onRouteSelect(route) {
    this.selectedRoute = route;
  }
}
