import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesMarvelComponent } from "./heroes-marvel/heroes-marvel.component";

const routes: Routes = [{ path: "heroes", component: HeroesMarvelComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
