import { DrawAClubService } from "./../draw-a-club.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-display-logo",
  templateUrl: "./display-logo.component.html",
  styleUrls: ["./display-logo.component.css"]
})
export class DisplayLogoComponent implements OnInit {
  title: string = "Schalke 04";
  crest: string = "../../assets/schalke.svg";
  constructor(private drawAClubService: DrawAClubService) {}

  drawAClub() {
    this.drawAClubService.drawAClub().subscribe(data => {
      console.log(data);
      this.title = data.name;
      this.crest = data.crestUrl;
    });
  }

  ngOnInit() {}
}
