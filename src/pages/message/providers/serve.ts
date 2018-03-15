import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import * as user from 'hhb-userauth'

@Injectable()
export class Serve {
	private host = '//1989591.51vip.biz:17001/'
	private URL = {
		'QUERY:HISTORY:LIST': 'member/chat/log/list'
	}
	private headers = new Headers({'Content-Type': 'application/json'});
	async curl(url, data){
		url = `${this.host}/${this.URL[url]}`
		return await this.http.post(url, JSON.stringify(data), {headers: this.headers})
		.toPromise()
	}
	constructor(private http: Http) {}
	async queryHistoryList(senderId, receiverId, page = 1): Promise<any[]>{
		let map = {
		    "asc": true,
		    "endDate": null,
		    "id": user.id,
		    "orderByField": null,
		    page,
		    receiverId,
		    senderId,
		    "size": 0,
		    "startDate": null
		}
		let res: any = await this.curl('QUERY:HISTORY:LIST', map)
		return res.data  && res.data.records || []
	}
}