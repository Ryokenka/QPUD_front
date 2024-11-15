import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Major } from "models/score.model"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "epf-majors",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.scss"],
})
export class ScoreComponent {
  majors$: Observable<Major[]> = this._route.data.pipe(map((data) => data["majors"]))

  constructor(private _route: ActivatedRoute) {
  }
}
