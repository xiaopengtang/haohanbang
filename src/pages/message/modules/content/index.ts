import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'message-content',
  templateUrl: 'index.html'
}) 

export class MessageContent {
	list: any[] = [{
		'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'isOwn': false,
		'message': 'hi,jim',
		'time': '2017-12-30 12:30:51'
	},{
		'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'isOwn': true,
		'message': 'what`s wrong,john',
		'time': '2017-12-30 12:30:51'
	},{
		'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
		'isOwn': false,
		'message': 'I am back',
		'time': '2017-12-30 12:30:51'
	}]
	constructor(public navCtrl: NavController) {
		// console.log(this)
	}

	ngOnChanges(){
		// console.log(arguments)
	}

	ngOnInit(){
		// console.log(arguments)
	}

	send(){
		let message: string = document.querySelector('#content').innerHTML || ''
		if(!message){
			return
		}
		const arrEntities = {'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}
		message = message.replace(/&(lt|gt|nbsp|amp|quot);/ig,(all,t) => arrEntities[t])
		console.log({message})
		this.list.push({
			'faceUrl': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png',
			'isOwn': true,
			message
			//'message': 'I am back',
			// 'time': '2017-12-30 12:30:51'
		})
		document.querySelector('#content').innerHTML = ""
	}
}