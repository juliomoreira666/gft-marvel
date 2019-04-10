import { ServiceService } from "./../service/service.service";
import { Component, OnInit } from "@angular/core";
import { Heroes } from "./marvel.model";
@Component({
  selector: "app-heroes-marvel",
  templateUrl: "./heroes-marvel.component.html",
  styleUrls: ["./heroes-marvel.component.css"]
})
export class HeroesMarvelComponent implements OnInit {
  loading: boolean;
  modalDetails: boolean;
  numberOffSet = 100;
  heroes: Heroes;
  hero: Heroes;
  error: any;
  constructor(private shared: ServiceService) {}
  ngOnInit() {
    this.showHeroes("0");
  }
  showHeroes(offset: string): void {
    this.loading = true;
    this.shared.getHeroes(offset).subscribe(
      (data: Heroes) => {
        this.loading = false;
        this.heroes = data;
      },
      error => {
        this.loading = false;
        this.error = error;
      }
    );
  }
  getHeroDetails(id: string): void {
    this.modalDetails = false;
    this.loading = true;
    this.shared.getHero(id).subscribe(
      (data: Heroes) => {
        this.loading = false;
        this.hero = data;
        this.modalDetails = true;
      },
      error => {
        this.error = error;
        this.loading = false;
        this.modalDetails = true;
      }
    );
  }
  fecharDetails(): void {
    if (this.modalDetails === true) {
      this.modalDetails = false;
    } else {
      this.modalDetails = true;
    }
  }
}
