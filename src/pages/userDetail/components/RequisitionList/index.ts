import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

// import { AddressControlPage } from '../addressControl';
import { addServiceForRequisitionPage } from '../addServiceForRequisition';

// const status = {
//   "1": "已提交",
//   "2": "已确认",
//   "3": "已完成",
//   "4": "已关闭",
// };

@Component({
  selector: 'page-providerList',
  templateUrl: 'index.html'
})

export class ProviderListPage {

  private $http;
  public ProviderList: Array<object>;

  public status;

  constructor(public navCtrl: NavController) {
    this.$http = http();

    this.status = {
      "1": "已提交",
      "2": "已确认",
      "3": "已完成",
      "4": "已关闭",
    };

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
    if (1 == list.code) {
      this.ProviderList = list.data.records;
    }
    console.log(this.ProviderList);
  }

  goToAddServiceForRequisitionPage() {
    this.navCtrl.setRoot(addServiceForRequisitionPage);
  }
}
