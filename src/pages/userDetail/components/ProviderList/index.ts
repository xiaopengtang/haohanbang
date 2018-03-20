import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

// import { AddressControlPage } from '../addressControl';
import { addServiceForProviderPage } from '../addServiceForProvider';
@Component({
  selector: 'page-providerList',
  templateUrl: 'index.html'
})

export class ProviderListPage {

  private $http;
  public addressList: Array<object>;

  constructor(public navCtrl: NavController) {
    this.$http = http();
    this.getProviderList();
  }

  // 获取常用地址列表
  async getProviderList() {
    let list = await this.$http.curl('ORDER:LIST', {
      "userId": user.state.id,
      "queryUserId": user.state.id,
      "page": 0,
      "size": 10
    });
    console.log(list);
    // if (1 == list.code) {
    //   this.addressList = list.data;
    // }
    console.log(list);
  }

  goToAddServiceForProviderPage(){
    this.navCtrl.setRoot(addServiceForProviderPage);
  }
}
