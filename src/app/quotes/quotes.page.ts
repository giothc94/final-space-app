import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  quotes;

  constructor(private api:ApiService) { }

  async ngOnInit() {
    this.quotes = await this.api.getQuotes()
  }

}
