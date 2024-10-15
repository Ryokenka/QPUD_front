import { Component, OnInit } from "@angular/core"
import { Link } from "models/links.model"
import { Router } from '@angular/router';

@Component({
  selector: "epf-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})

export class NavbarComponent {
  links: Link[] = []

  constructor() {
    this.links.push({ name: "Solo", href: "solo" })
    this.links.push({ name: "Multi", href: "students" })
    this.links.push({ name: "Score", href: "majors" })

  }
}
