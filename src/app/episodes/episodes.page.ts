import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-episodes",
  templateUrl: "./episodes.page.html",
  styleUrls: ["./episodes.page.scss"],
})
export class EpisodesPage implements OnInit {
  episodes;
  spinnerFlag = true;

  constructor(private api: ApiService, private router: Router) {}

  async ngOnInit() {
    this.episodes = await this.api.getEpisodes();
    this.spinnerFlag = false;
  }

  goToEpisode(id) {
    this.router.navigateByUrl(`episode/${id}`);
  }
}
