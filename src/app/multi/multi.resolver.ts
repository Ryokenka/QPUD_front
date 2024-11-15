import { Injectable } from "@angular/core"
import { Resolve } from "@angular/router"
import { Observable } from "rxjs"
import { Student } from "models/multi.model"
import { MultiService } from "services/multi.service"

@Injectable({
  providedIn: "root",
})
export class MultiResolver implements Resolve<Student[]> {
  constructor(private studentService: MultiService) {
  }

  resolve(): Observable<Student[]> {
    return this.studentService.findAll()
  }
}
