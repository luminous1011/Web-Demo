import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NzDrawerPlacement } from "ng-zorro-antd";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  isCollapsed = false;
  idx = "";
  visible = false;
  placement: NzDrawerPlacement = "right";
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  constructor(private route: ActivatedRoute, private router: Router) {
    this.idx = this.router.url;
    console.error(this.idx);
  }
}
