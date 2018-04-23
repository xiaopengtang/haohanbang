import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';

import {UserInfoService, ProviderListPage} from './components';
import {LoginPage} from '../login';
import {CollectionListPage} from '../collectionList';
import {Storage} from '@ionic/storage'
import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

// 服务单&请求单状态
const serviceStates = [
  {
    "name": "待确认"
  }, {
    "name": "进行中"
  }, {
    "name": "已完成"
  }, {
    "name": "已关闭"
  }
];

@Component({selector: 'page-userdetail', templateUrl: 'index.html'})

export class UserDetail {

  public nickName : string;
  public userId : string;
  public level : string;
  public createTime : string;

  // 服务列表
  public serviceLists : Array < object >;
  // 单子状态类型
  public serviceStates : Array < object >;

  constructor(public navCtrl : NavController, public loadingCtrl : LoadingController, public storage : Storage) {
    if (!!user.state.id) {
      let {nickName, userId, level, createTime} = user.state.userDetail;

      this.nickName = nickName;
      this.userId = userId;
      this.level = level;
      this.createTime = createTime;

      // 单子状态类型
      this.serviceStates = [
        {
          "name": "待确认"
        }, {
          "name": "进行中"
        }, {
          "name": "已完成"
        }, {
          "name": "已关闭"
        }
      ];

      this.serviceLists = [
        {
          "name": "服务单管理",
          "navPage": ProviderListPage
        }, {
          "name": "收藏",
          "navPage": CollectionListPage
        }, {
          "name": "关注",
          "navPage": "aaa"
        }, {
          "name": "我的信息",
          "navPage": "aaa"
        }
      ];
    } else {
      let loading = this
        .loadingCtrl
        .create({
          content: "您还没有登录，马上为您跳转到登录页面...",
          // duration: 3000
        });
      loading.present();
      setTimeout(() => {
        loading.dismiss(); //显示多久消失
        this
          .navCtrl
          .setRoot(LoginPage);
      }, 3000);

    }
  }

  goToUserInfoService() {
    this
      .navCtrl
      .push(UserInfoService);
  }

  goTo(item) {
    this
      .navCtrl
      .push(item.navPage);
  }

  logOut() {
    this
      .storage
      .set('USER', {});
    let loader = this
      .loadingCtrl
      .create({content: "退出登录中...", duration: 3000});
    loader.present();
  }
}
