import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import * as http from 'hhb-http'
// import * as user from 'hhb-userauth'

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
  public areas;

  public conunty;
  public province;
  public city;
  public area;

  constructor(public navCtrl: NavController) {
    this.$http = http();
    // console.log(user);

    this.conuntys = [
      {
        id: 40002,
        name: "中国"
      }
    ];
    this.provinces = [];
    this.citys = [];
    this.areas = [];

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

  async ChangeCity() {

    if (this.citys.length == 0) {
      // 省份列表
      let citys_rsp = await this.$http.curl('SUPPORT:queryByParentCode', {
        "poiCode": this.province
      });
      this.citys = citys_rsp.data;
    }
  }

  async ChangeArea() {
    if (this.areas.length == 0) {
      // 省份列表
      let areas_rsp = await this.$http.curl('SUPPORT:queryByParentCode', {
        "poiCode": this.city
      });
      this.areas = areas_rsp.data;
    }
  }

  async CheckNewItem(key, item) {
    switch (key) {
      case "province":
        if( item.poiCode != this.province){
          console.log(item);
          let rsp = await this.$http.curl('SUPPORT:queryByParentCode', {
            "poiCode": item.poiCode
          });
          this.citys = rsp.data;
        }
        break;
      case "city":
        if( item.poiCode != this.city){
          let rsp = await this.$http.curl('SUPPORT:queryByParentCode', {
            "poiCode": item.poiCode
          });
          this.areas = rsp.data;
        }
        break;
      default:
        break;
    }
  }
}
