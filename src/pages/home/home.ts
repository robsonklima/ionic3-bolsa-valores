import { Component } from '@angular/core';
import { PyAnywhere } from '../../services/pyanywhere';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private pyAnywhere: PyAnywhere
  ) {}

  ionViewWillEnter() {
    this.pyAnywhere.getStocks().subscribe((stocks) => {
      console.log(stocks);
    }, e => {});
  }
}
