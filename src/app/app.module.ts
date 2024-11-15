import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { MultiComponent } from "multi/multi.component"
import { MultiDetailsComponent } from "multi/multi-details/multi-details.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { ScoreComponent } from "score/score.component"
import { ScoreGameComponent } from "score/score-game/score-game.component"
import { HttpClientModule } from "@angular/common/http";
import { SoloComponent } from './solo/solo.component';
import { GameComponent } from './game/game.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MultiComponent,
    MultiDetailsComponent,
    ScoreComponent,
    ScoreGameComponent,
    SoloComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
