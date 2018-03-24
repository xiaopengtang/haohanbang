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

  public autograph: string;

  public errMsg: string;
  constructor(public navCtrl: NavController) {
    this.$http = http();
    this.autograph = "";
    this.errMsg = "";
  }

  async changeNickName() {
    let { autograph } = this;
    let changeAutographReq = await this.$http.curl('MEMBER:NICKNAME', {
      "nickName": autograph,
      "userId": user.state.id
    });
    if (changeAutographReq.code == 1) {
      this.navCtrl.setRoot(UserInfoService);
    } else {
      this.errMsg = changeAutographReq.msg;
    }
    console.log(changeAutographReq);
  }
}
