import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/multi.model"
import { ActivatedRoute, Router } from "@angular/router"
import { MultiService } from "services/multi.service"

@Component({
  selector: "epf-students",
  templateUrl: "./multi.component.html",
  styleUrls: ["./multi.component.scss"],
})
export class MultiComponent {
  students$: Observable<Student[]> = this._route.data.pipe(map((data) => data["students"]))

  constructor(private _route: ActivatedRoute, private studentService: MultiService, private router: Router,) {
  }

  deleteStudent(event: any, student: Student) {
    event.stopPropagation()
    this.studentService.delete(student).subscribe(() => this.router.navigate(["students"]))
  }

  searchByMajorAndCourse($event: Observable<Student[]>) {
    this.students$ = $event
  }
}
