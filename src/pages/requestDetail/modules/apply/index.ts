import { Component } from '@angular/core';
import { ViewController, NavParams, Platform, ToastController} from 'ionic-angular';
import * as user from 'hhb-userauth'
import * as $http from 'hhb-http'

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
	constructor(public viewCtrl: ViewController, public params: NavParams, public platform: Platform, private toastCtrl: ToastController) {
		this.orderId = this.params.get('orderId')
    this.$http = $http()
	}
	dismiss(){
		this.viewCtrl.dismiss();
	}

  $toast(message, callback?: Function){
    let toast = this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.onDidDismiss(() => callback && callback() )
    toast.present();
  }

	async applyOrder(){
		let param = {
			"applyTime": `${this.date} ${this.clock}:00`,
			"orderId": this.orderId,
			"reason": this.orderId,
			"userId": user.id
		}
    const state = (param => {
      if(!this.date){
        return '请输入申请时间'
      }
      if(!this.clock){
        return '请输入申请日期'
      }
      return ''
    })(param)
    // alert(state)
    if(state){
      return this.$toast(state)
    }
    const res = await this.$http.curl('SAVE:ORDER:APPLY', param)
    const message = res && res.msg || `申请${res && res.data && '成功' || '失败'}`
    this.$toast(message, () => this.viewCtrl.dismiss())
	}
}
