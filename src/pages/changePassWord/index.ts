import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

const msgContent = {
  "001": "请输入有效手机号码",
  "002": "该手机号已注册",
};

@Component({
  selector: 'page-changePassWord',
  templateUrl: 'index.html'
})


export class ChangePassWordPage {
  
  // 手机号码
  phoneNum: string
  // 错误码
  errorMsg: string

  constructor(public navCtrl: NavController) { 
    this.phoneNum = "";
    this.errorMsg = "";
  }

  open(...rest: any[]) {
    console.log(111);
  }

  checkPhoneNum(...rest: any[]){
    let phoneNum = this.phoneNum;
    if(!!(/^1[34578]\d{9}$/.test(phoneNum))){

    } else {
      this.errorMsg = msgContent["001"];
    }
  }

}
