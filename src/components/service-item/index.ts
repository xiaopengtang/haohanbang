import { Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers }    from '@angular/http';
import {SerivceDetailPage} from '../../pages/serviceDetail'
import {config} from 'hhb-core'
import $http from 'hhb-http'

interface Params {
  "asc": boolean,
  "distance": number,
  "orderByField"?: string,
  "orderId"?: string,
  "page"?: number,
  "queryUserId": string,
  "size"?: number,
  "status"?: number,
  "title"?: string,
  "userId"?: string
}

@Component({
  selector: 'com-service-item',
  templateUrl: 'index.html'
})

export class ComServiceItem{
	@Input() list: any[] = [];
	@Input() map: Params;
	private http: Http;
	renderList: any[] = []
	get host(){
		return config('requestConfig.host')
	}
	async curl(map: Params){
    // console.log({$http})
		return await this.http.post(`${this.host}order/request/order/list`, JSON.stringify(map), {headers: new Headers({'Content-Type': 'application/json'})}).toPromise().then((res: any) => res.json())
	}
	async ngAfterViewInit(){
		if(Array.isArray(this.list) && this.list.length){
			return this.renderList = this.list
		}
		if(!this.map){
			return 
		}
		const res: any = await this.curl(this.map)
		this.renderList = res.data && res.data.records || []
		// console.log(this.renderList)
	}

	constructor(public navCtrl: NavController, http: Http){
		this.http = http
	}
	open(orderId: string|number){
		this.navCtrl.push(SerivceDetailPage, {orderId})
	}
}
