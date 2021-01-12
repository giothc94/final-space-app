import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.page.html",
  styleUrls: ["./location.page.scss"],
})
export class LocationPage implements OnInit {
  location = {};

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(async (params) => {
      let { id } = params;
      this.location = await this.api.getLocation(id);
    });
  }

  goToCharacter(id) {
    this.router.navigateByUrl(`/character/${id}`);
  }
}
