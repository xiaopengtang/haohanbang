import { Component } from '@angular/core';

import { MapPage } from '../../pages/map/map';
import { UserDetail } from '../../pages/userDetail';
import { ServicePage } from '../../pages/service';
import { FollowListPage } from '../../pages/followList';

@Component({
  selector: 'page-tabs',
  templateUrl: 'index.html'
})
export class TabsPage {

  public tab1;
  public tab2;
  public tab3;
  public tab4;

  private tabs: any;

  constructor() {
    this.tab1 = MapPage;
    this.tab2 = MapPage;
    this.tab3 = MapPage;
    this.tab4 = MapPage;

    this.tabs = [
      { title: "搜索", page: MapPage, icon: "water" },
      { title: "通信录", page: FollowListPage, icon: "leaf" },
      { title: "发现", page: ServicePage, icon: "flame" },
      { title: "我", page: UserDetail, icon: "magnet" },
    ];
    // ...
  }
}
