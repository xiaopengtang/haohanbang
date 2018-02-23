import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-service-detail',
  templateUrl: 'index.html'  
})

export class SerivceDetailPage {
	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

	applyOrder(){
		console.log(this)
		/*alert()
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
	    prompt.present();*/
	}
}