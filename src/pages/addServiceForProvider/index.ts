import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'index.html'
})


export class addServiceForProviderPage {

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
    }
  }

}
