import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

import { AddressControlPage } from '../addressControl';

@Component({
  selector: 'page-Address',
  templateUrl: 'index.html'
})

export class AddressPage {

  private $http;
  public addressList: Array<object>;

  constructor(public navCtrl: NavController) {
    this.$http = http();
    console.log(user);
    this.getAddressList();
  }

  // 获取常用地址列表
  async getAddressList() {
    let list = await this.$http.curl('ADDRESS:LIST', {
      "userId": user.state.id
    });
    console.log(list);
    if (1 == list.code) {
      this.addressList = list.data;
    }
    console.log(list);
  }

  goToAddressControlPage(){
    this.navCtrl.setRoot(AddressControlPage);
  }
}
