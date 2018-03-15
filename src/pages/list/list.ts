import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items = [];

  constructor(navCtrl: NavController, navparams: NavParams) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.items.push( this.items.length );
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
}
