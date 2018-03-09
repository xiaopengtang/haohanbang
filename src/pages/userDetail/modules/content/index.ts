import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'message-content',
  templateUrl: 'index.html'
}) 

export class MessageContent {
	constructor(public navCtrl: NavController) {
		// console.log(this)
	}

	ngOnChanges(){
		// console.log(arguments)
	}

	ngOnInit(){
		// console.log(arguments)
	}
}