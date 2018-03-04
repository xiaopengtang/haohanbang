import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'com-apply-list',
  templateUrl: 'index.html'
}) 
export class ComApplyList {
	@Input() list: any[] = [];
	// @Input() map: {} 
	
	constructor(public navCtrl: NavController){}
	renderList: any[] = [];
	async ngAfterViewInit(){ 
		
		if(Array.isArray(this.list) && this.list.length){
			this.renderList = this.list
		}
	}
}