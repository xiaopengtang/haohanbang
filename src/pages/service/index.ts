import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as user from 'hhb-userauth'

@Component({
  selector: 'page-service',
  templateUrl: 'index.html'
})

export class ServicePage {
	list: any[] = []
	map: any = {
	    "asc": true,
	    // "distance": 0,
	    // "orderByField": null,
	    // "orderId": null,
	    "page": 1,
	    "queryUserId": user.id,
	    "size": 10,
	    // "status": 0,
	    // "title": null,
	    // "userId": '0000000002'
	}
	doRefresh(refresher) {
		// console.log('Begin async operation', refresher);
	
		setTimeout(() => {
		//   console.log('Async operation has ended');
		  this.map = {
			"asc": true,
			"page": 1,
			"queryUserId": user.id,
			"size": 10
		  }
		  refresher.complete();
		}, 1000);
	}
	doInfinite(scroll){
		// console.log('Begin async operation');
		scroll.enable(false)
		return setTimeout(() => {
			// console.log('Async operation has ended');
			this.map.page++
			scroll.complete()
		  }, 500);
	}
	constructor(public navCtrl: NavController) {}
}
