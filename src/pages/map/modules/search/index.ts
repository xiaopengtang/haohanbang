import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage'
import * as user from 'hhb-userauth'
import $http from 'hhb-http'
import {ServicePage} from '../../../service'

@Component({
  selector: 'page-map-search',
  templateUrl: 'index.html'
})

export class MapPageSearch{
	list: any[] = []
	title?: string = ''
	isService:boolean
	history: any[] = []
	private $http;
	map: any = null /*{
	    "asc": true,
	    // "distance": 0,
	    // "orderByField": null,
	    // "orderId": null,
	    "page": 1,
	    "queryUserId": user.id,
	    "size": 10,
	    // "status": 0,
	    "title": '',
	    // "userId": '0000000002'
	}*/
	private key = 'HISTOR_KEY_WORD_LIST'
	constructor(public navCtrl: NavController, public storage: Storage, private toastCtrl: ToastController){
		storage.get(this.key).then((list?: any[]) => this.history = list || [])
		this.$http = $http()
		this.isService = false
	}
	$toast(message){
		let toast = this.toastCtrl.create({
	      message,
	      duration: 2000,
	      position: 'top'
	    });
	    // toast.onDidDismiss(() => callback && callback() )
	    toast.present();
	}
	async queryList(title){
		const res = await this.$http.curl('QUERY:ORDER:REQUEST_LIST', {
		    "asc": true,
		   
		    "page": 1,
		    "queryUserId": user.id,
		    "size": 10,
		    title,
		    latitude: user.state.latitude,
		    longitude: user.state.longitude
		})
		// console.log(res)
		this.list = res && res.data && res.data.records || []
		// console.log(user.state)
		if(!this.list.length){
			return this.$toast('未查询到相关信息')
		}
		// this.navCtrl.push(ServicePage, {title})
	}
	updateHistory(){
		this.storage.set(this.key, this.history)
	}
	deleteHistoryByKey(i){
		// console.log({i})
		this.history = this.history.filter((v, k) => k !== i)
		this.updateHistory()
	}
	async handleClickKeyWord(title){
		this.title = title
		return await this.queryList(title)
	}
	async getItems(e){
		// console.log({e})
		const value = e.target.value
		if(!value){
			return 
		}
		this.history.push(value)
		if(this.history.length > 10){
			this.history = this.history.slice(0, 10)
		}
		this.updateHistory()
		return await this.queryList(value)
	}
}
