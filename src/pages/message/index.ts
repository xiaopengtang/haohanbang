import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-message',
  templateUrl: 'index.html'
})

export class MessagePage {
	constructor(public navCtrl: NavController) {}
  doRefresh(){}
}
