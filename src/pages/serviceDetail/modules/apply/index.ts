import { Component } from '@angular/core';
import { ViewController, NavParams, Platform} from 'ionic-angular';
import * as user from 'hhb-userauth'
import $http from 'hhb-http'

@Component({
  selector: 'modal-apply',
  templateUrl: 'index.html'
})
export class ModalApply {
	clock;
	date;
	reason;
	private orderId;
  private $http;
	// public params: NavParams;
	constructor(public viewCtrl: ViewController, public params: NavParams, public platform: Platform) {
		this.orderId = this.params.get('orderId')
    this.$http = $http()
	}
	dismiss(){
		this.viewCtrl.dismiss();
	}

	async applyOrder(){
		let param = {
			"applyTime": `${this.date} ${this.clock}`,
			"orderId": this.orderId,
			"reason": this.orderId,
			"userId": user.id
		}
    const res = await this.$http.curl('SAVE:USER:APPLY', param)
    console.log(res)
		// console.log({param})
	}
}
