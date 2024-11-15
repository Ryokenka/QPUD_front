import { Student } from "./multi.model"

export interface Major {
  id?: bigint
  name: string
  description: string
  students: Student[]
}
