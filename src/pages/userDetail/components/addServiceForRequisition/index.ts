import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

@Component({
  selector: 'page-register',
  templateUrl: 'index.html'
})


export class addServiceForProviderPage {

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
    console.log(1111);
    let { address, clearTime, title, price, describe } = this;
    let Provider = await this.$http.curl('ORDER:ADD', {
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

    if (Provider.code == 1) {

    }
  }

}
