import { Course } from "./course.model"
import { Major } from "./score.model"

export interface Student {
  place: string
  qs: string
  id?: bigint
  image?: string
  firstName: string
  lastName: string

  courses?: Course[]

}
