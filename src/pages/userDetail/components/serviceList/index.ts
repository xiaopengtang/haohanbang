import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MessageContent} from '../../modules/content'

@Component({
  selector: 'userinfo-serviceList',
  templateUrl: 'index.html',
})

export class ServiceList {

  serviceLists: Array<{ name: string, navCtrl: string }>;

  constructor(public navCtrl: NavController) {

    this.serviceLists = [
      {
        "name": "服务单管理",
        "navCtrl": "aaa",
      },
      {
        "name": "收藏",
        "navCtrl": "aaa",
      },
      {
        "name": "关注",
        "navCtrl": "aaa",
      },
      {
        "name": "我的信息",
        "navCtrl": "aaa",
      }
    ];
    console.log(this.serviceLists);
  }

  open(...rest: any[]) {
    this.navCtrl.setRoot(MessageContent, {id: 11})
  }
}
