import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

@Component({
  selector: 'page-login',
  templateUrl: 'index.html'
})

export class LoginPage {

  private $http;

  public userName: string;
  public passWord: string;

  constructor(public navCtrl: NavController) {
    this.userName = "";
    this.passWord = "";

    this.$http = http();
  }

  async login() {
    let {userName, passWord} = this;
    let data = await this.$http.curl('USER:LOGIN', {
      "account": userName,
      "password": passWord
    });

    if (data.code == 1) {
      let userDetial = await this.$http.curl('USER:USERDETAILS', {
        "userId": data.data.userId,
      });
      console.log(userDetial);
    } else {

    }
  }
}
