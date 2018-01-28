import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'com-service-item',
  templateUrl: 'index.html'
})

export class ComServiceItem{
	@Input() list: any[] = [];
	constructor(public navCtrl: NavController){}
}