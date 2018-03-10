import { Component } from '@angular/core';
import { ViewController, NavParams, Platform} from 'ionic-angular';
import * as user from 'hhb-userauth'

@Component({
  selector: 'modal-apply',
  templateUrl: 'index.html'  
}) 
export class ModalApply {
	clock;
	date;
	reason;
	private orderId;
	// public params: NavParams;
	constructor(public viewCtrl: ViewController, public params: NavParams, public platform: Platform) {
		this.orderId = this.params.get('orderId')
	}
	dismiss(){
		this.viewCtrl.dismiss();
	}

	applyOrder(){
		let param = {
			"applyTime": `${this.date} ${this.clock}`,
			"orderId": this.orderId,
			"reason": this.orderId,
			"userId": user.id
		}
		console.log({param})
	}
}