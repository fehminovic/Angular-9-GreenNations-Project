import { Component, OnInit } from "@angular/core";

import { MenuService } from "../../../services/menu.service";

@Component({
  selector: "ss-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit() {}
}
