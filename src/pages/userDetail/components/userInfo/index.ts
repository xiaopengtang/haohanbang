import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { UserInfoService } from '../../../infService/index'

console.log(UserInfoService);
@Component({
  selector: 'userinfo-item',
  templateUrl: 'index.html'
})

export class UserInfo {

  constructor(public navCtrl: NavController) {
  }

  open(...rest: any[]) {
    this.navCtrl.setRoot(UserInfoService, {id: 11})
  }
}
