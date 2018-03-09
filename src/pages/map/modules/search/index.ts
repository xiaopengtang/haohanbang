import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map-search',
  templateUrl: 'index.html'
})

export class MapPageSearch{
	list: any[] = []
  // private queryUserId;
  map: any = {
      "asc": true,
      // "distance": 0,
      // "orderByField": null,
      // "orderId": null,
      "page": 1,
      // "queryUserId": null, //this.queryUserId,
      "size": 10,
      // "status": 0,
      // "title": null,
      // "userId": '0000000002'
  }
	constructor(public navCtrl: NavController){}
	getItems(){}
}
