import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import {Service} from './index.service'

@Component({
  selector: 'page-service-detail',
  templateUrl: 'index.html'
})

export class SerivceDetailPage {
	private orderId: string;
	info: any = {};
	public $server: Service; 
	constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController ,public $server: Service) {
        this.orderId = navParams.get('orderId')
        // this.$server = $server
        // console.log(this.orderId)
    }

    async ngAfterViewInit(){
    	const res = await this.$server.queryDetail(this.orderId)
    	console.log(res)
    	return this.info = res.data || {}
    }

	applyOrder(){
		let prompt = this.alertCtrl.create({
	        title: 'Login',
	        message: "Enter a name for this new album you're so keen on adding",
	        inputs: [
		        {
		            name: 'title',
		            placeholder: 'Title'
		        },
	        ],
	        buttons: [
	        {
	            text: 'Cancel',
	            handler: data => {
	                console.log('Cancel clicked');
	            }
	        },
	        {
	            text: 'Save',
	            handler: data => {
	                console.log('Saved clicked');
	            }
	        } 
	        ]
	    });
	    prompt.present();
	}
}
