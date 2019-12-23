import { Observable } from "rxjs";
import { Placeholder } from "./../Placeholder";
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

  drawAClub(): Observable<Placeholder> {
    this.drawAClubService.drawAClub().subscribe(data => {
      this.title = data.title;
      return this.title;
    });
  }

  ngOnInit() {}
}
