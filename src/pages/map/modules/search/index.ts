import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map-search',
  templateUrl: 'index.html'
})

export class MapPageSearch{
	list: any[] = []
	constructor(public navCtrl: NavController){}
	getItems(){}
}
