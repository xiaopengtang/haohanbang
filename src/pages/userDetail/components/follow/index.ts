import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

// import { AddressControlPage } from '../addressControl';

@Component({
  selector: 'page-Address',
  templateUrl: 'index.html'
})

export class FollowPage {

  private $http;
  public followList: Array<object>;

  constructor(public navCtrl: NavController) {
    this.$http = http();
    this.getFollowList();
  }

  // 获取常用地址列表
  async getFollowList() {
    let list = await this.$http.curl('ADDRESS:LIST', {
      "userId": user.state.id
    });
    if (1 == list.code) {
      this.followList = list.data;
    }
  }

}
