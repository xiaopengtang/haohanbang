import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import * as http from 'hhb-http'
// import * as user from 'hhb-userauth'
// import {Service} from './index.service';

const msgContent = {
  "001": "请输入有效手机号码",
  "002": "该手机号已注册",
};

@Component({
  selector: 'page-register',
  templateUrl: 'index.html'
})

export class RegisterPage {

  private $http;
  // 手机号码
  phoneNum: string;
  // 错误码
  errorMsg: string;
  // 密码
  passWord: string;

  public requested : boolean;

  constructor(public navCtrl: NavController) {

    this.$http = http();

    this.phoneNum = "";
    this.errorMsg = "";
    this.passWord = "";

    this.requested = false;
  }

  async checkPhoneNum(...rest: any[]) {
    let phoneNum = this.phoneNum;
    if (!!(/^1[34578]\d{9}$/.test(phoneNum))) {

      let requestCode = await this.$http.curl('VERFICATION:USER:REGISTERCODE', {
        "phone": phoneNum
      });
      let {code} = requestCode;
      // 请求成功
      if(code == 1){
        this.requested = true;
        console.log(this.requested);
      } else {

      }
      console.log(requestCode);

    } else {
      this.errorMsg = msgContent["001"];
    }
  }

}
