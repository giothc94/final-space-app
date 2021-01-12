import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.page.html',
  styleUrls: ['./characteres.page.scss'],
})
export class CharacteresPage implements OnInit {
  characters;
  spinnerFlag = true

  constructor(private api: ApiService, private router: Router) { }

  async ngOnInit() {
    this.characters = await this.api.getCharacters()
    this.spinnerFlag = false
  }

  goToCharacter(id){
    this.router.navigateByUrl(`/character/${id}`)
  }

}
