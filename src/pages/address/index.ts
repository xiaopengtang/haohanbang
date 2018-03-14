import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

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
    console.log(1111);

    let list = await this.$http.curl('ADDRESS:LIST', {
      "userId": user.state.id
    });
    if( 1 == list.code ){
      this.addressList = list.data;
    }
    console.log(list);
  }
}
