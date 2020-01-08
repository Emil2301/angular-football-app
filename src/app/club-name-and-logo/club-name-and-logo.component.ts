import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-club-name-and-logo',
  templateUrl: './club-name-and-logo.component.html',
  styleUrls: ['./club-name-and-logo.component.css']
})
export class ClubNameAndLogoComponent implements OnInit {
  @Input() title: string;
  @Input() crest: string;

  constructor() { }

  ngOnInit() {
  }

}
