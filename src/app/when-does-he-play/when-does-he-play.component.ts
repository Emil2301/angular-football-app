import { Component, OnInit } from "@angular/core";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-when-does-he-play",
  templateUrl: "./when-does-he-play.component.html",
  styleUrls: ["./when-does-he-play.component.css"]
})
export class WhenDoesHePlayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
