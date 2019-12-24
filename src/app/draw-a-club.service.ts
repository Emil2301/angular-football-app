import { Placeholder } from "./Placeholder";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DrawAClubService {
  constructor(private http: HttpClient) {}

  drawAClub() {
    return this.http.get<Placeholder>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
  }
}
