import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { config } from 'hhb-core'
import * as user from 'hhb-userauth'

@Injectable()
export class Service {
    // private http : Http;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'verfication/get/register/sms/code'
    
    get host() {
        return config('requestConfig.host')
    }
    constructor(private http: Http) { 
    }

    async getRegisterCode(phoneNum) {
        console.log(this);
        const url = `${this.host}${this.heroesUrl}`
        return await this.http.post(url, JSON.stringify({ phone: phoneNum }), { headers: this.headers })
            .toPromise().then((res: any) => res.json())
    }

}