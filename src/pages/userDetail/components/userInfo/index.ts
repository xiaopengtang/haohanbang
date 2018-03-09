import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { OrderStatusPage } from '../../modules/orderStatus'

@Component({
  selector: 'userinfo-item',
  templateUrl: 'index.html'
})

export class UserInfo {

  constructor(public navCtrl: NavController) {
  }

  open(...rest: any[]) {
    this.navCtrl.push(OrderStatusPage, {id: 11})
  }
}
