import { Injectable }    from '@angular/core';
import {/* Headers,*/ Http } from '@angular/http';

@Injectable()
export class Service {
  // private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'test/'
  constructor(private http: Http) {}
  getHero(id: number): Promise<any> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }
  handleError(){}
}

