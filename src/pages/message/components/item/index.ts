import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageContent } from '../../modules/content'

@Component({
  selector: 'message-item',
  templateUrl: 'index.html'
})

export class MessageItem {
	list: any[] = [{
		'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'time': '3:43 pm',
		'message': '早上好',
		'name': '黎明'
	},{
		'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'time': '3:43 pm',
		'message': '早上好',
		'name': '黎明'
	},{
		'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'time': '3:43 pm',
		'message': '早上好',
		'name': '黎明'
	}]
	constructor(public navCtrl: NavController) {}
	open(...rest: any[]){
		this.navCtrl.push(MessageContent, {id: 11})
	}
}