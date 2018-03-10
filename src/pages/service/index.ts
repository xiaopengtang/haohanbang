import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
	    "queryUserId": 1,
	    "size": 10,
	    // "status": 0,
	    // "title": null,
	    // "userId": '0000000002'
	}
	constructor(public navCtrl: NavController) {}
}
