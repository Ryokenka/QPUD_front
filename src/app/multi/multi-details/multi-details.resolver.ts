import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { MultiService } from "services/multi.service"
import { Student } from "models/multi.model"
import { Major } from "models/score.model"

@Injectable({
  providedIn: "root",
})
export class MultiDetailsResolver implements Resolve<Student> {
  constructor(private studentService: MultiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student> {
    if (route.params["id"] == "new") {
      return new Observable((observer) => {
        observer.next({ firstName: "", lastName: "", qs: "", place: ""})
      })
    }
    return this.studentService.findById(parseInt(route.params["id"], 10))
  }
}
