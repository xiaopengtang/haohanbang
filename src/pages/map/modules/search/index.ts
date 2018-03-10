import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map-search',
  templateUrl: 'index.html'
})

export class MapPageSearch{
	list: any[] = [{
		'poster': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'price': '$200-400',
		'place': '弘阳广场',
		'distance': '600米',
		'label': [
		   {'text': '测试'}
		]
	},{
		'poster': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'price': '$200-400',
		'place': '弘阳广场',
		'distance': '600米',
		'label': [
		   {'text': '测试'}
		]
	},{
		'poster': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'price': '$200-400',
		'place': '弘阳广场',
		'distance': '600米',
		'label': [
		   {'text': '测试'}
		]
	},{
		'poster': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'price': '$200-400',
		'place': '弘阳广场',
		'distance': '600米',
		'label': [
		   {'text': '测试'}
		]
	}]
	constructor(public navCtrl: NavController){}
	getItems(){}
}