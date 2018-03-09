import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import * as user from 'hhb-userauth'

@Component({
  selector: 'page-service',
  templateUrl: 'index.html'
})

export class ServicePage {
	list: any[] = []
  // private queryUserId;
	map: any = {
	    "asc": true,
	    // "distance": 0,
	    // "orderByField": null,
	    // "orderId": null,
	    "page": 1,
	    "queryUserId": null, //this.queryUserId,
	    "size": 10,
	    // "status": 0,
	    // "title": null,
	    // "userId": '0000000002'
	}
	constructor(public navCtrl: NavController, navParams: NavParams) {
    this.map.queryUserId = navParams.get('uid') || user.id
    // console.log(this.queryUserId)
  }
}
