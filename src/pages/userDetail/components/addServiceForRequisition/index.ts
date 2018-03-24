import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

import {RequisitionListPage} from '../RequisitionList'
@Component({
  selector: 'page-addServiceForRequisition',
  templateUrl: 'index.html'
})


export class addServiceForRequisitionPage {

  public $http;

  public clearTime;

  public addressList: Array<object>;

  public address;
  // 手机号码
  phoneNum: string;
  // 错误码
  errorMsg: string;
  // 标题
  public title: string;
  // 酬金
  public price: string;
  // 描述
  public describe: string;

  constructor(public navCtrl: NavController) {
    this.phoneNum = "";
    this.errorMsg = "";

    this.title = "";
    this.price = "";

    this.$http = http();
    this.queryAddressList();
  }

  async queryAddressList() {
    let list = await this.$http.curl('ADDRESS:LIST', {
      "userId": user.state.id
    });
    console.log(list);
    if (1 == list.code) {
      this.addressList = list.data;
    }
  }

  async addProvider() {
    let { address, clearTime, title, price, describe } = this;
    let REQUEST = await this.$http.curl('ORDER:REQUEST:ADD', {
      "address": address,
      // "closeReason": "string",
      "describe": describe,
      "expiryTime": clearTime,
      "imageList": [
        // {
        //   "imageName": "string",
        //   "imageSize": 0,
        //   "imageSuffix": "string"
        // }
      ],
      "lableList": [
        {
          "labelId": 0,
          "labelName": "string"
        }
      ],
      // "orderId": "string",
      "price": price,
      "title": title,
      "userId": user.state.id
    });

    if (REQUEST.code == 1) {
      this.navCtrl.setRoot(RequisitionListPage);
    }
  }

}
