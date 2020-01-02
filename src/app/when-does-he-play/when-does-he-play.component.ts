import { WhenDoesHePlayService } from "./../when-does-he-play.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-when-does-he-play",
  templateUrl: "./when-does-he-play.component.html",
  styleUrls: ["./when-does-he-play.component.css"]
})
export class WhenDoesHePlayComponent implements OnInit {
  selectedPlayer: string;
  nextMatchDate: Date;
  nextMatchHomeTeam: string;
  nextMatchAwayTeam: string;

  constructor(private whenDoesHePlayService: WhenDoesHePlayService) { }

  players = [
    { id: 5, name: "Robert Lewandowski" },
    { id: 340, name: "Jan Bednarek" },
    { id: 98, name: "Krzysztof Piątek" },
    { id: 113, name: "Arkadiusz Milik" },
    { id: 584, name: "Karol Linetty" },
    { id: 4, name: "Łukasz Piszczek" },
    { id: 341, name: "Mateusz Klich" },
    { id: 322, name: "Kamil Grosicki" },
  ];

  ngOnInit() { }

  whenDoesHePlay(player) {
    this.whenDoesHePlayService.whenDoesHePlay(player.id).subscribe(data => {
      this.nextMatchDate = data.matches[0].utcDate;
      this.nextMatchHomeTeam = data.matches[0].homeTeam.name;
      this.nextMatchAwayTeam = data.matches[0].awayTeam.name;
    });
  }
}
