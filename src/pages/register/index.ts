import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Service} from './index.service';

const msgContent = {
    "001": "请输入有效手机号码",
    "002": "该手机号已注册",
};

@Component({
    selector: 'page-register',
    templateUrl: 'index.html'
})

export class RegisterPage {

    // 手机号码
    phoneNum: string;
    // 错误码
    errorMsg: string;

    public $server: Service;

    constructor(public navCtrl: NavController, public $server: Service) {
        this.phoneNum = "";
        this.errorMsg = "";
    }

    async checkPhoneNum(...rest: any[]) {
        let phoneNum = this.phoneNum;
        if (!!(/^1[34578]\d{9}$/.test(phoneNum))){
            
            const res = await this.$server.getRegisterCode(this.phoneNum);
            console.log(res);
            // console.log(res)
        } else {
            this.errorMsg = msgContent["001"];
        }
    }

}
