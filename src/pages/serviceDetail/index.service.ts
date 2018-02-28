import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {config} from 'hhb-core'

@Injectable()
export class Service {
  private headers = new Headers({'Content-Type': 'application/json'});
  // private heroesUrl = 'test/'
  // 
  get host(){
    return config('requestConfig.host')
  }
  constructor(private http: Http) {}
  async queryDetail(orderId){
    const url = `${this.host}order/request/order/detail`
    return await this.http.post(url, JSON.stringify({orderId, userId: '0000000002'}), {headers: this.headers})
    .toPromise().then((res: any) => res.json())
  }
  // 
  // handleError(){}
}

