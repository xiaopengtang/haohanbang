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

    this.$http = http();
    // this.errorMsg = "";
  }

  async changePass() {
    let { phoneNum } = this;
    console.log(1111);
    console.log(user);
    let snsCode = await this.$http.curl('MEMBER:SMSCODE', {
      "phone": phoneNum
    });
  }


}
