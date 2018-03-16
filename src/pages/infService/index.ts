import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

import { AddressPage } from '../address/index';

@Component({
  selector: 'user-infoService',
  templateUrl: 'index.html',
})

export class UserInfoService {

  serviceLists: Array<{ name: string, navCtrl: string }>;

  constructor(public navCtrl: NavController) {

    this.serviceLists = [
      {
        "name": "地址管理",
        "navCtrl": "AddressPage",
      },
      {
        "name": "修改密码",
        "navCtrl": "aaa",
      },
    ];

  }

  goTo( key ){

  }
}
