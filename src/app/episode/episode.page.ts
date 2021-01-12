import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-episode",
  templateUrl: "./episode.page.html",
  styleUrls: ["./episode.page.scss"],
})
export class EpisodePage implements OnInit {
  episode = {};

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      let { id } = params;
      this.episode = await this.api.getEpisode(id);
    });
  }
  goToCharacter(id) {
    this.router.navigateByUrl(`/character/${id}`);
  }
}
