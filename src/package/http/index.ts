/**
* 交互类
*
*/
import { Http } from '@angular/http';
import { Injectable }    from '@angular/core';
import { config } from 'hhb-core'


@Injectable()
export default class {
  constructor(private http: Http){
    this.http = http
  }
  private http: Http
  private host = '//1989591.51vip.biz:17001/' ;
  //
  get config(){
    return config('requestConfig')
  }
  handleError(e){
    console.log(e)
  }
  //
  async curl(key: string, data?: any): Promise<any>{
    let requestUrl: string = this.config[key]
    const r = /(([^:]+):)?(.+)/
    let method = 'post', urlBody = requestUrl
    if(r.test(requestUrl)){
      method = RegExp.$2
      urlBody = RegExp.$3
    }
    const url: string = `${this.host.replace(/\/+$/, '')}/${urlBody.replace(/^\/+/g, '')}`
    let requestAction = this.http[method]
    if(!requestAction){
      return
    }
    return await requestAction(url, data).toPromise().catch(this.handleError.bind(this))
  }
}
