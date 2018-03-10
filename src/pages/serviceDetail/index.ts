import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import {Service} from './index.service'
import { ModalApply} from './modules/apply'

@Component({
  selector: 'page-service-detail',
  templateUrl: 'index.html'
})

export class SerivceDetailPage {
	private orderId: string;
	info: any = {};  
	public $server: Service; 
	constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams ,public modalCtrl: ModalController ,public $server: Service) {
        this.orderId = navParams.get('orderId')
    }

    async ngAfterViewInit(){
    	const res = await this.$server.queryDetail(this.orderId)
    	console.log(res)
    	return this.info = res.data || {}
    }
    reply(){
    	let prompt = this.alertCtrl.create({
	        title: '评论',
	        // message: "Enter a name for this new album you're so keen on adding",
	        inputs: [
		        {
		            name: 'message',
		            placeholder: '请输入评论信息'
		        },
	        ],
	        buttons: [
	        {
	            text: '取消',
	            handler: data => {
	                console.log('Cancel clicked');
	            }
	        },
	        {
	            text: '评论',
	            handler: data => {
	                console.log('Saved clicked');
	            }
	        } 
	        ]
	    });
	    prompt.present();
    }

	applyOrder(){
		let orderId = this.orderId
		let modal = this.modalCtrl.create(ModalApply, {orderId});
        modal.present();
		
	}
}
