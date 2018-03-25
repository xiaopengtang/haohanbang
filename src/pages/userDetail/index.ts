import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserInfoService, ProviderListPage, RequisitionListPage} from './components';
//
import * as http from 'hhb-http';
import * as user from 'hhb-userauth';

// console.log(UserInfoService);
@Component({
  selector: 'page-userdetail',
  templateUrl: 'index.html'
})

export class UserDetail {

  public nickName: string;
  public userId: string;
  public level: string;
  public createTime: string;

  // 服务列表
  public serviceLists: Array<object>;

  constructor(public navCtrl: NavController) {
    console.log(user.state);
    let { nickName, userId, level, createTime } = user.state.userDetail;

    this.nickName = nickName;
    this.userId = userId;
    this.level = level;
    this.createTime = createTime;

    this.serviceLists = [
      {
        "name": "服务单管理",
        "navPage": ProviderListPage,
      },
      {
        "name": "请求单管理",
        "navPage": RequisitionListPage,
      },
      {
        "name": "收藏",
        "navPage": "aaa",
      },
      {
        "name": "关注",
        "navPage": "aaa",
      },
    ];
  }

  goToUserInfoService() {
    this.navCtrl.setRoot(UserInfoService);
  }

  goTo(item){
    this.navCtrl.setRoot(item.navPage);
  }

  logOut(){

  }

}
