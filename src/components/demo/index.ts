import { Component/*, Input*/} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'com-demo',
  templateUrl: 'index.html'
})

export class ComDemo{
	// @Input() list: any[] = [];
	constructor(public navCtrl: NavController){}
}