import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

const msgContent = {
  "001": "原密码错误",
  "002": "两次输入的密码不相同",
};

@Component({
  selector: 'page-changePassWord',
  templateUrl: 'index.html'
})


export class ChangePassWordPage {

  public $http

  // 手机短信码
  smsCode: string
  // 电话号码
  phoneNum: string
  // 旧密码
  oldPass: string
  // 新密码
  newPass: string
  // 新密码确认
  newPassCheck: string

  constructor(public navCtrl: NavController) {
    this.phoneNum = "";
    this.oldPass = "";
    this.newPass = "";
    this.newPassCheck = "";
    this.smsCode = "";

    this.$http = http();
    // this.errorMsg = "";
  }

  async getSmsCode() {
    let { phoneNum } = this;
    let snsCode = await this.$http.curl('MEMBER:SMSCODE', {
      "phone": phoneNum
    });
  }

  async changePass() {
    let { phoneNum, newPass, smsCode } = this;
    let snsCode = await this.$http.curl('MEMBER:PWDPHONE', {
      "password": smsCode,
      "phone": phoneNum,
      "verficationCode": newPass
    });
  }
}
