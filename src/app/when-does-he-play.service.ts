import { NextMatch } from './NextMatch';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WhenDoesHePlayService {
  httpOptions = {
    headers: new HttpHeaders({
      "X-Auth-Token": "8cf26ca4deb64429900d6be7f0576025"
    })
  };

  constructor(private http: HttpClient) { }

  whenDoesHePlay(playerNumber) {
    return this.http.get<NextMatch>(
      `https://api.football-data.org/v2/teams/${playerNumber}/matches?status=SCHEDULED`,
      this.httpOptions
    );
  }
}
