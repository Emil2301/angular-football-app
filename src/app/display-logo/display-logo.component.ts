import { DrawAClubService } from "./../draw-a-club.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-display-logo",
  templateUrl: "./display-logo.component.html",
  styleUrls: ["./display-logo.component.css"]
})
export class DisplayLogoComponent implements OnInit {
  title;
  constructor(private drawAClubService: DrawAClubService) {}

  drawAClub() {
    this.drawAClubService
      .drawAClub()
      .subscribe(data => (this.title = data.title));
  }

  ngOnInit() {}
}
