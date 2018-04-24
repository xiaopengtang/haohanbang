import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';
import * as $message from 'hhb-message'
import {Storage} from '@ionic/storage'

// import { HomePage } from '../home/home';
import {MapPage} from '../map/map'
import {RegisterPage} from '../register/index';
import {ChangePassWordPage} from '../../pages/userDetail/components/changePassWord/index';

// changePassWord/index';

import {config} from 'hhb-core'

const errMsg = {
  "001": "用户名不可以为空",
  "002": "密码不可以为空",
  "003": "用户名或密码错误",
  "004": "请输入一个有效的手机号码"
}

@Component({selector: 'page-login', templateUrl: 'index.html'})

export class LoginPage {

  private $http;

  public userName : string;
  public passWord : string;

  public errMsg : string;

  private history;

  constructor(public navCtrl : NavController, public storage : Storage, public navParams : NavParams, public modalCtrl : ModalController) {
    this.userName = "";
    this.passWord = "";
    this.errMsg = "";

    this.$http = http();

    this.history = this
      .navParams
      .get('history');
    console.log(history);
  }

  goTo(name : string) {
    let toPage
    switch (name) {
        // 注册
      case "RegisterPage":
        toPage = RegisterPage;
        break;
        // 修改密码
      case "ChangePassWordPage":
        toPage = ChangePassWordPage;
        break;
      default:
        toPage = MapPage;
        break;
    }

    let modal = this
      .modalCtrl
      .create(toPage, {});
    modal.present();
    // this.navCtrl.setRoot(toPage);
  }

  async login() {
    let {userName, passWord} = this;
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

    let data = await this
      .$http
      .curl('USER:LOGIN', {
        "account": userName,
        "password": passWord
      });

    if (data.code == 1) {
      user.state = Object.assign(user.state, {
        id: data.data.userId,
        // pw: passWord,
        userDetail: data.data
      });
      this
        .storage
        .set('USER', user.state)
      // console.log(`${user.id}@${config('message.host.name')}`, user.state.pw)
      $message.login(`${user.id}@${config('message.host.name')}`, '123456')

      this
        .navCtrl
        .setRoot(MapPage);
      // this.navCtrl.pop();
    } else {
      console.log("003");
      this.errMsg = errMsg["003"];
    }
  }
}
