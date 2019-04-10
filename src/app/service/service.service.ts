import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  public getHeroes(offset: string): Observable<any> {
    return this.http.get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=${offset}&apikey=ecd18e807416bd9374f01d02ebc1de2a`
    );
  }
  public getHero(id: string): Observable<any> {
    return this.http.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=ecd18e807416bd9374f01d02ebc1de2a`
    );
  }
}
