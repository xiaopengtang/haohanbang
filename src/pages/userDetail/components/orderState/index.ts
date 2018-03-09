import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MessageContent} from '../../modules/content'

@Component({
  selector: 'userinfo-orderstate',
  templateUrl: 'index.html',

})

export class OrderState {
  items: Array<{ name: string, navCtrl: string }>;

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        "name": "待确认",
        "navCtrl": "aaa",
      },
      {
        "name": "进行中",
        "navCtrl": "aaa",
      },
      {
        "name": "已完成",
        "navCtrl": "aaa",
      },
      {
        "name": "已关闭",
        "navCtrl": "aaa",
      }
    ];
    console.log(this);
  }

  open(...rest: any[]) {
    this.navCtrl.push(MessageContent, {id: 11})
  }
}
