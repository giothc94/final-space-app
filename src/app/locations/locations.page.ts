import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  locations;

  constructor(private api:ApiService, private router: Router) { }

  async ngOnInit() {
    this.locations = await this.api.getLocations();
  }

  goToLocation(id){
    this.router.navigateByUrl(`location/${id}`)
  }


}
