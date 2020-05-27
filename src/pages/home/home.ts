import { Component } from '@angular/core';
import { PyAnywhere } from '../../services/pyanywhere';
import { Stock } from '../../models/stock';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stocks: Stock[] = [];
  lastUpdated: any;

  constructor(
    private pyAnywhere: PyAnywhere
  ) {}

  ionViewWillEnter() {
    setInterval(() => {
      this.loadStocks();
    }, 5 * 1000);
  }

  loadStocks() {
    this.pyAnywhere.getStocks().subscribe((stocks) => {
      this.stocks = stocks;
      console.log(stocks);
    }, e => {});
  }
}