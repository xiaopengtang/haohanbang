import { Component, Input } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { MessageContent } from '../../pages/message/modules/content'

import * as user from 'hhb-userauth'
import * as $http from 'hhb-http'

@Component({
  selector: 'com-user-card',
  templateUrl: 'index.html'
})
export class ComUserCard {
  @Input() list: any[] = [];
  @Input() judge: boolean;
  @Input() orderId;
  @Input() type;
  // @Input() map: {}
  // public judge: boolean;
  public msgStatus: boolean;
  public msg: string;

  public http;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    // console.log(this.judge);
    if (typeof (this.judge) == "undefined") {
      this.judge = false;
    }
    if (typeof (this.orderId) == "undefined") {
      this.orderId = "";
    }
    this.msgStatus = false;
    this.msg = ""

    this.http = $http();

    // console.log(this);
    console.log(this.list)
  }

  renderList: any[] = [];

  async ngAfterViewInit() {

    if (Array.isArray(this.list) && this.list.length) {
      this.renderList = this.list
    }
    // console.log(this.renderList)
    /*const res: any = await this.curl(this.map)
        this.renderList = res.data && res.data.records || []
        console.log(this.renderList)*/
  }

  openMessCtrl(info) {
    this.navCtrl.push(MessageContent, { info })
  }

  // 审核申请人
  async applyApprove(status, userId) {
    console.log(this.type)
    let applyApprove_rsp;
    if( this.type == 0){
      applyApprove_rsp = await this.http.curl('SAVE:ORDER:APPROVE', {
        "orderId": this.orderId,
        "status": status,
        "userId": userId
      });
    }
    if( this.type == 1){
      applyApprove_rsp = await this.http.curl('SAVE:SERVICE:APPROVE', {
        "orderId": this.orderId,
        "status": status,
        "userId": userId
      });
    }

    let msg = "";
    let toast;
    if (applyApprove_rsp.code == 1 && status == 2) {
      msg = "已同意";
    } else if (applyApprove_rsp.code == 1 && status == 3) {
      msg = "已拒绝";
    } else if (applyApprove_rsp.code != 1) {
      msg = "服务器端网络异常，请稍后重试!";
    }

    if (msg != "") {
      toast = this.toastCtrl.create({
        message: msg,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }
}
