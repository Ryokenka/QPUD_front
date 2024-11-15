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
    this.links.push({ name: "jouer seul", href: "game" })
    this.links.push({ name: "Multi", href: "multi" })
    this.links.push({ name: "Score", href: "score" })

  }
}
