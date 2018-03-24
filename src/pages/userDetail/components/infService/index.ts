import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

import { AddressPage } from '../address';
import { ChangePassWordPage } from '../changePassWord';

@Component({
  selector: 'user-infoService',
  templateUrl: 'index.html',
})

export class UserInfoService {

  serviceLists: Array<object>;

  constructor(public navCtrl: NavController) {
    this.serviceLists = [
      {
        "name": "地址管理",
        "navPage": AddressPage,
      },
      {
        "name": "修改密码",
        "navPage": ChangePassWordPage,
      },
    ];
  }

  goTo(item) {
    this.navCtrl.setRoot(item.navPage);
  }
}
