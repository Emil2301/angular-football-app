import { DrawAClubService } from "./../draw-a-club.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-draw-logo",
  templateUrl: "./draw-logo.component.html",
  styleUrls: ["./draw-logo.component.css"]
})
export class DrawLogoComponent implements OnInit {
  title: string;
  crest: string;
  constructor(private drawAClubService: DrawAClubService) { }

  drawAClub() {
    this.drawAClubService.drawAClub().subscribe(data => {
      this.title = data.name;
      this.crest = data.crestUrl;
    });
  }

  ngOnInit() { }
}
