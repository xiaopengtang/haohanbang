import { Component} from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
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
	map = null
	$map: any = {
	    "asc": true,
	    "page": 1,
	    "queryUserId": user.id,
	    "size": 10,
	}
	private isService: boolean

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
		this.$http = $http()
		this.isService = true
		let title = navParams.get('title')
		// console.log(title)
		if(title){
			this.$map.title = title
		}
	}

	async doRefresh(refresher) {
		// console.log('Begin async operation', refresher);

		this.$map.page = 1
		await this._loaderList()
		return refresher.complete()
	}
	async ngAfterViewInit(){
		await this._loaderList()
	}
	async doInfinite(scroll){
		if(this.loaded){
			return scroll.enable(false)
		}
		await this._loaderList()
		return scroll.complete()
	}
	async _loaderList(page?: number){
		const res = await this.$http.curl('QUERY:SERVICE:LIST', this.$map)

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
}
