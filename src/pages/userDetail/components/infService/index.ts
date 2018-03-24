import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

import { AddressPage } from '../address';
import { ChangePassWordPage } from '../changePassWord';
import {ChangeNickNamePage} from '../changeNickname';

@Component({
  selector: 'user-infoService',
  templateUrl: 'index.html',
})

export class UserInfoService {

  serviceLists: Array<object>;

  constructor(public navCtrl: NavController) {
    this.serviceLists = [
      {
        "name": "修改用户名",
        "navPage": ChangeNickNamePage,
      },
      {
        "name": "修改用户签名",
        "navPage": ChangePassWordPage,
      },
      {
        "name": "修改密码",
        "navPage": ChangePassWordPage,
      },
      {
        "name": "地址管理",
        "navPage": AddressPage,
      },
    ];
  }

  goTo(item) {
    this.navCtrl.setRoot(item.navPage);
  }
}
