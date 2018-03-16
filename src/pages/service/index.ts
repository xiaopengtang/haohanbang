import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import * as user from 'hhb-userauth'
import * as $http from 'hhb-http'

@Component({
  selector: 'page-service',
  templateUrl: 'index.html'
})

export class ServicePage {
	private $http
	list: any[] = []
	private loaded = false
	map: any = {
	    "asc": true,
	    // "distance": 0,
	    // "orderByField": null,
	    // "orderId": null,
	    "page": 1,
	    "queryUserId": user.id,
	    "size": 10,
	    // "status": 0,
	    // "title": null,
	    // "userId": '0000000002'
	}
	private isService: boolean
	async doRefresh(refresher) {
		// console.log('Begin async operation', refresher);

		this.map.page = 1
		await this._loaderList()
		return refresher.complete()
		// setTimeout(() => {
		// //   console.log('Async operation has ended');
		//   this.map = {
		// 	"asc": true,
		// 	"page": 1,
		// 	"queryUserId": user.id,
		// 	"size": 10
		//   }
		//   refresher.complete();
		// }, 1000);
	}
	async doInfinite(scroll){
		if(this.loaded){
			return scroll.enable(false)
		}
		await this._loaderList()
		return scroll.complete()
		// console.log('Begin async operation');
		// scroll.enable(false)
		// return setTimeout(() => {
		// 	// console.log('Async operation has ended');
		// 	this.map.page++
		// 	scroll.complete()
		//   }, 500);
	}
	async _loaderList(page?: number){
		const res = await this.$http.curl('QUERY:SERVICE:LIST', this.map)
		if(!res){
			return 
		}
		const list = res.data && res.data.records || []
		if(list.length === 0){
			return this.loaded = true
		}
		this.list = list
		return this.loaded = false
	}
	constructor(public navCtrl: NavController) {
		this.$http = $http()
		this.isService = true
		// this.map
		// const userId = navParams.get('id')
		// const title = navParams.get('title')
		// if(userId){
		// 	this.map.queryUserId = userId
		// }
		// if(title){
		// 	this.map.title = title
		// }
		// this.$http.curl('QUERY:ORDER:LIST', this.map).then(res => console.log(res))
	}
}
