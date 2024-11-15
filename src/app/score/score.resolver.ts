import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs"
import { ScoreService } from "services/score.service"
import { Major } from "models/score.model"

@Injectable({
  providedIn: "root",
})
export class ScoreResolver implements Resolve<Major[]> {
  constructor(private majorService: ScoreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Major[]> {
    return this.majorService.findAll()
  }
}
