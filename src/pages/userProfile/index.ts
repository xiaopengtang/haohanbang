import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MessageContent} from '../../pages/message/modules/content';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';
import * as $message from 'hhb-message'
import {Storage} from '@ionic/storage'

// import { HomePage } from '../home/home';
import {MapPage} from '../map/map'
import {RegisterPage} from '../register/index';
// import { ChangePassWordPage } from '../changePassWord/index';

import {config} from 'hhb-core'

@Component({
  selector: 'page-userProfile',
  templateUrl: 'index.html'
})

export class UserProfilePage {

  private $http;

  private userInfo;
  private showInfo;

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams) {
    this.$http = http();
    this.userInfo = navParams.get('user');
    this.showInfo = [
      {title: "昵称", value: this.userInfo.nickName},
      {title: "签名", value: this.userInfo.sign},
    ]
    console.log(this.userInfo);
  }

  openMessCtrl(info) {
    this.navCtrl.push(MessageContent, {info})
  }

  // async f
}
