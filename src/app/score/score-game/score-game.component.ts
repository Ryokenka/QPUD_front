import { Component, OnInit } from "@angular/core"
import { map, Observable } from "rxjs"
import { ActivatedRoute } from "@angular/router"
import { MajorStudentsDto } from "../../models/dto/MajorStudentsDto"
import { Student } from "../../models/multi.model"

@Component({
  selector: "epf-major-students",
  templateUrl: "./score-game.component.html",
  styleUrls: ["./score-game.component.scss"],
})
export class ScoreGameComponent implements OnInit {
  studentsFromMajor$: Observable<Student[]> = this._route.data.pipe(map((data) => data["studentsFromMajor"]))

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
