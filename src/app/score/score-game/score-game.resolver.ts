import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { ScoreService } from "../../services/score.service"
import { Student } from "../../models/multi.model"

@Injectable({
  providedIn: "root",
})
export class ScoreGameResolver implements Resolve<Student[]> {
  constructor(private majorService: ScoreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student[]> {
    return this.majorService.findStudentsFromMajor(route.params["id"])
  }
}
