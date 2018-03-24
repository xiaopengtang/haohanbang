import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import * as user from 'hhb-userauth'
import * as $http from 'hhb-http'

@Injectable()
export class Serve {
	private host = 'http://1989591.51vip.biz:17001/'
	private URL = {
		'QUERY:HISTORY:LIST': 'member/chat/log/list'
	}
	private headers = new Headers({'Content-Type': 'application/json'});
	async curl(url, data){
		url = `${this.host}${this.URL[url]}`
		return await new Promise(resolve => this.http.post(url, JSON.stringify(data), {headers: this.headers})
		.toPromise().then().catch(e => resolve(null))) 
	}
	private $http;
	constructor(private http: Http) {
		this.$http = $http()
	}
	async queryHistoryList(senderId, receiverId, page = 1): Promise<any[]>{
		let map = {
		    "asc": false,
		    "endDate": null,
		    "id": null,
		    "orderByField": null,
		    page,
		    receiverId,
		    senderId,
		    "size": 10,
		    "startDate": null
		}
		let res: any = await this.$http.curl('QUERY:HISTORY:LIST', map)
		return res && res.data  && res.data.records || []
	}
}