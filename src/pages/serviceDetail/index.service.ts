import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {config} from 'hhb-core'
import * as user from 'hhb-userauth'

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
    const url = `${this.host}order/service/order/detail`
    return await this.http.post(url, JSON.stringify({orderId, userId: user.id}), {headers: this.headers})
    .toPromise().then((res: any) => res.json())
  }
  // 
  // handleError(){}
}

