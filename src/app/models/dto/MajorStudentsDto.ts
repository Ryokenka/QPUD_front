import { Major } from "../score.model"
import { Student } from "../multi.model"

export class MajorStudentsDto {
  major: Major
  students: Student[]

  constructor(major: Major, students: Student[]) {
    this.major = major
    this.students = students
  }
}
