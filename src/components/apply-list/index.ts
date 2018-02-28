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
		// console.log(this.renderList)
		/*const res: any = await this.curl(this.map)
		this.renderList = res.data && res.data.records || []
		console.log(this.renderList)*/
	}
}