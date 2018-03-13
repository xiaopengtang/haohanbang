import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/index';


const errMsg = {
  "001": "用户名不可以为空",
  "002": "密码不可以为空",
  "003": "用户名或密码错误",
  "004": "请输入一个有效的手机号码",
}

@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})

export class LoginPage {

  private $http;

  public userName: string;
  public passWord: string;

  public errMsg: string;

  constructor(public navCtrl: NavController) {
    this.userName = "";
    this.passWord = "";
    this.errMsg = "";

    this.$http = http();
  }

  goTo(name: string) {
    let toPage
    switch (name) {
      // 注册
      case "RegisterPage":
        toPage = RegisterPage;
        break;
      // case "RegisterPage":
      //   toPage = RegisterPage;
      //   break;
      default:
        toPage = HomePage;
        break;
    }

    this.navCtrl.push(toPage);
  }

  async login() {
    let { userName, passWord } = this;
    if (userName == "") {
      this.errMsg = errMsg["001"];
      return 0;
    }
    if (!(/^1[34578]\d{9}$/.test(userName))) {
      this.errMsg = errMsg["004"];
      return 0;
    }
    if (passWord == "") {
      this.errMsg = errMsg["002"];
      return 0;
    }

    let data = await this.$http.curl('USER:LOGIN', {
      "account": userName,
      "password": passWord
    });

    if (data.code == 1) {
      console.log(data);
      user.state = Object.assign(user.state, {
        id: data.data.userId,
        pw: passWord,
        userDetail: data.data
      });
      this.navCtrl.push(HomePage);
    } else {
      console.log("003");
      this.errMsg = errMsg["003"];
    }
  }
}
