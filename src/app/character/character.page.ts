import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-character",
  templateUrl: "./character.page.html",
  styleUrls: ["./character.page.scss"],
})
export class CharacterPage implements OnInit {
  character = {};

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      let { id } = params;
      this.character = await this.api.getCharacter(id);
    });
  }
}
