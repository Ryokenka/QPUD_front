import { Component, OnInit } from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/multi.model"
import { ActivatedRoute, Router } from "@angular/router"
import { Course } from "models/course.model"
import { CourseService } from "services/course.service"
import { MultiService } from "services/multi.service"
import { Major } from "../../models/score.model"
import { ScoreService } from "../../services/score.service"

@Component({
  selector: "epf-student-details",
  templateUrl: "./multi-details.component.html",
  styleUrls: ["./multi-details.component.scss"],
})
export class MultiDetailsComponent {
  student$: Observable<Student> = this._route.data.pipe(map((data) => data["student"]))
  allMajors$: Observable<Major[]> | undefined
  allCourses$: Observable<Course[]> | undefined

  courseSelectModel: Course | null = null
  notSelectedCourse: boolean | undefined


  constructor(
    private _route: ActivatedRoute,
    private courseService: CourseService,
    private studentService: MultiService,
    private majorService: ScoreService,
    private router: Router,
  ) {
    this.allMajors$ = this.majorService.findAll()
  }

  courseClick() {
    this.allCourses$ = this.courseService.findAll()
  }

  addCourseToStudent(student: Student) {
    if (this.courseSelectModel != null) {
      this.studentService.addCourseToStudent(student, this.courseSelectModel!!)
    } else {
      this.notSelectedCourse = true
    }
  }

  removeCourseToStudent(student: Student, course: Course) {
    this.studentService.removeCourseToStudent(student, course)
  }

  save(student: Student) {
    const id = this._route.snapshot.params["id"]


    if (id == "new") {
      this.studentService.create(student).subscribe(() => {
        this.router.navigate(["students"])
      })
    } else {
      this.studentService.update(id, student).subscribe(() => {
        this.router.navigate(["students"])
      })
    }
  }


}
