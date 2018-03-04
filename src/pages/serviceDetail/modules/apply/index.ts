import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'modal-apply',
  templateUrl: 'index.html'  
}) 
export class ModalApply {
	clock;
	constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}
	dismiss(){
		this.viewCtrl.dismiss();
	}

	applyOrder(){}
}