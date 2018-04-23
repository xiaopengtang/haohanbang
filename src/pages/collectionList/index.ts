import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import * as http from 'hhb-http';
import * as user from 'hhb-userauth';
import * as $message from 'hhb-message'
import {Storage} from '@ionic/storage'

import {config} from 'hhb-core'

@Component({selector: 'page-collectionList', templateUrl: 'index.html'})

export class CollectionListPage {

  private $http;
  private list;
  option : string = "服务单";
  constructor(public navCtrl : NavController, public storage : Storage, public navParams : NavParams) {

    this.$http = http();

    this.queryFollowList();
    // this.history = this.navParams.get('history'); console.log(history);
  }

  async queryFollowList() {

    let list = await this
      .$http
      .curl('MEMBER:FOLLOWLIST', {
        "asc": true,
        "orderByField": "string",
        "page": 0,
        "size": 20,
        "userId": user.state.id
      });
    console.log(list);
    if (list.code == 1) {
      this.list = list.data.records;
      // user.state = Object.assign(user.state, {   id: data.data.userId,   // pw:
      // passWord,   userDetail: data.data }); this.storage.set('USER', user.state)
      // console.log(`${user.id}@${config('message.host.name')}`, user.state.pw)
      // $message.login(`${user.id}@${config('message.host.name')}`, '123456')
      // this.navCtrl.setRoot(MapPage); this.navCtrl.pop();
    } else {}
  }
}
