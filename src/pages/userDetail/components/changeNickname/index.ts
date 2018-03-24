import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

import { UserInfoService } from '../infService';
@Component({
  selector: 'page-changeNickName',
  templateUrl: 'index.html'
})

// 修改用户名
export class ChangeNickNamePage {

  public $http;

  public nickName: string;

  public errMsg: string;
  constructor(public navCtrl: NavController) {
    this.$http = http();
    this.nickName = "";
    this.errMsg = "";
  }

  async changeNickName() {
    let { nickName } = this;
    let changeNickNameReq = await this.$http.curl('MEMBER:NICKNAME', {
      "nickName": nickName,
      "userId": user.state.id
    });
    if (changeNickNameReq.code == 1) {
      this.navCtrl.setRoot(UserInfoService);
    } else {
      this.errMsg = changeNickNameReq.msg;
    }
    console.log(changeNickNameReq);
  }
}
