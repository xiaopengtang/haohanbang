import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageContent } from '../../modules/content'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'message-item',
  templateUrl: 'index.html'
})

export class MessageItem {
	list: any[] = []
	constructor(public navCtrl: NavController, public storage: Storage) {
		/*let list = [
		    {'id': '0000000002', 'time': '3:43 pm', 'message': '您好', 'name': 'ydj-b85-hd3', 'nickName': '小明', 'imageUri': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png'},
		    {'id': '0000000003', 'time': '3:43 pm', 'message': '您好', 'name': 'ydj-b85-hd3', 'nickName': '小林', 'imageUri': 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png'}
		]*/
		storage.get('FRIEND_LIST').then(list => this.list = list)
	}
	async open(info: any){
		// let list = await this.storage.get('FRIEND_LIST')
		this.navCtrl.push(MessageContent, {info})
	}
  doRefresh(refresher){
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
