import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Major } from "models/score.model"
import { MajorStudentsDto } from "models/dto/MajorStudentsDto"
import { MajorsAndCoursesDto } from "models/dto/majorsAndCoursesDto"
import { HttpClient } from "@angular/common/http"
import { Student } from "../models/multi.model"

@Injectable({
  providedIn: "root",
})
export class ScoreService {
  constructor(private http: HttpClient) {
  }

  private majorUrl = "http://localhost:3000"

  findAll(): Observable<Major[]> {
    return this.http.get<Major[]>(this.majorUrl)
  }

  findStudentsFromMajor(majorId: string): Observable<Student[]> {
    return this.http.get<Student[]>(this.majorUrl + `/${majorId}/multi`)
  }

}
