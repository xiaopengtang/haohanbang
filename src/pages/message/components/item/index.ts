import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageContent } from '../../modules/content'

@Component({
  selector: 'message-item',
  templateUrl: 'index.html'
})

export class MessageItem {
	constructor(public navCtrl: NavController) {}
	open(...rest: any[]){
		this.navCtrl.push(MessageContent, {id: 11})
	}
}