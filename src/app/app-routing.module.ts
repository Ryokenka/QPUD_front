import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { MultiComponent } from "multi/multi.component"
import { MultiResolver } from "multi/multi.resolver"
import { MultiDetailsComponent } from "multi/multi-details/multi-details.component"
import { MultiDetailsResolver } from "multi/multi-details/multi-details.resolver"
import { ScoreComponent } from "score/score.component"
import { ScoreResolver } from "score/score.resolver"
import { ScoreGameResolver } from "score/score-game/score-game.resolver"
import { ScoreGameComponent } from "score/score-game/score-game.component"
import { SoloComponent } from "./solo/solo.component"
import { GameComponent } from "./game/game.component"


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "multi",
    component: MultiComponent,

  },
  {
    path: "multi-details/:id",
    component: MultiDetailsComponent,

  },
  {
    path: "score",
    component: ScoreComponent,

  },
  {
    path: "score-game/:id",
    component: ScoreGameComponent,

  },
  {
    path: "solo",
    component: SoloComponent,
  },
  {
    path: "game",
    component: GameComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
