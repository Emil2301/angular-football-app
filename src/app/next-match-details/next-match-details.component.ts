import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next-match-details',
  templateUrl: './next-match-details.component.html',
  styleUrls: ['./next-match-details.component.css']
})
export class NextMatchDetailsComponent implements OnInit {

  @Input() nextMatchDate: Date;
  @Input() nextMatchHomeTeam: string;
  @Input() nextMatchAwayTeam: string;

  constructor() { }

  ngOnInit() {
  }

}
