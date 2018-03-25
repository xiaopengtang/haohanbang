import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

// import * as http from 'hhb-http';
import * as user from 'hhb-userauth';
import * as http from 'hhb-http'
// import * as user from 'hhb-userauth'

import {AddressPage} from '../address'

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

  // 默认
  public isDefualt;
  // 用户名
  public userName;
  // 电话号码
  public phoneNum;
  // 邮编
  public zipCode;
  // 国家
  public conunty;
  // 省、市
  public province;
  // 城市
  public city;
  // 区
  public area;
  // 详细
  public addressDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    let type = navParams.get('type');
    let item = navParams.get('item');
    console.log(item);
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

    if( type ){
      this.isDefualt = true;
      this.userName = item.name;
      this.phoneNum = item.phone;
      this.zipCode = item.zipCode;
      this.province = {name: item.provinceName, poiCode: item.provinceId};
      this.city = {name: item.cityName, poiCode: item.countyId};
      this.addressDetail = item.address;
    } else {
      this.isDefualt = true;
      this.phoneNum = "";
      this.userName = "";
      this.zipCode = "";
      this.addressDetail = "";
    }

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
        if (item.poiCode != this.province) {
          let rsp = await this.$http.curl('SUPPORT:queryByParentCode', {
            "poiCode": item.poiCode
          });
          this.citys = rsp.data;
        }
        break;
      case "city":
        if (item.poiCode != this.city) {
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

  // 添加地址
  async addAddress() {
    let type = this.navParams.get('type');
    let item = this.navParams.get('item');
    let {isDefualt, city, province, zipCode, userName, addressDetail, phoneNum} = this;
    let rsp;
    // ADDRESS:MODIFY
    if( type ){
      rsp = await this.$http.curl('ADDRESS:MODIFY', {
        "id": item.id,
        "countyId": 40002,
        "address": addressDetail,
        "cityId": city.poiCode,
        "cityName": city.name,
        "countyName": "中国",
        "isDefault": isDefualt ? 1 : 0,
        "name": userName,
        "phone": phoneNum,
        "provinceId": province.poiCode,
        "provinceName": province.name,
        "userId": user.state.id,
        "zipCode": zipCode
      });
    } else {
      rsp = await this.$http.curl('ADDRESS:ADD', {
        "countyId": 40002,
        "address": addressDetail,
        "cityId": city.poiCode,
        "cityName": city.name,
        "countyName": "中国",
        "isDefault": isDefualt ? 1 : 0,
        "name": userName,
        "phone": phoneNum,
        "provinceId": province.poiCode,
        "provinceName": province.name,
        "userId": user.state.id,
        "zipCode": zipCode
      });
    }
    // 请求成功
    if (rsp.code == 1) {
      this.navCtrl.setRoot(AddressPage);
    }
  }
}
