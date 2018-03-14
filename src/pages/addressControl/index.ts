import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

@Component({
  selector: 'page-AddressControl',
  templateUrl: 'index.html'
})

export class AddressControlPage {

  private $http;
  public addressList: Array<object>;
  public conuntys;
  public provinces;
  public citys;

  public conunty;
  public province;
  public city;

  constructor(public navCtrl: NavController) {
    this.$http = http();
    // console.log(user);

    this.conuntys = [
      {
        id:40002,
        name: "中国"
      }
    ];
    this.provinces = [];
    this.citys = [];

    this.conunty = this.conuntys[0];
    this.provinceList();
  }

  // 获取常用地址列表
  async provinceList() {
    // console.log(1111);
    // 省份列表
    let province_rsp = await this.$http.curl('SUPPORT:queryByParentCode', {
      "poiCode": 40002
    });
    this.provinces = province_rsp.data;
    console.log(province_rsp);
  }

  async cityList() {
    // console.log(1111);
    console.log(this.province);
    // 省份列表
    let citys_rsp = await this.$http.curl('SUPPORT:queryByParentCode', {
      "poiCode": this.province
    });
    this.citys = citys_rsp.data;

  }
}
