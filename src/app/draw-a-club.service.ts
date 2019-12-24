import { FootballClub } from "./FootballClub";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DrawAClubService {
  clubIdsArray: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    9,
    11,
    12,
    15,
    16,
    17,
    18,
    19,
    24,
    28,
    29,
    721
  ];
  random: number;

  httpOptions = {
    headers: new HttpHeaders({
      "X-Auth-Token": "8cf26ca4deb64429900d6be7f0576025"
    })
  };

  constructor(private http: HttpClient) {}

  drawAClub() {
    this.random = Math.floor(Math.random() * 18);

    return this.http.get<FootballClub>(
      `https://api.football-data.org/v2/teams/${
        this.clubIdsArray[this.random - 1]
      }`,
      this.httpOptions
    );
  }
}
