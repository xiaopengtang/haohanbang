import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import * as http from 'hhb-http'
import * as user from 'hhb-userauth'

@Component({
  selector: 'page-Address',
  templateUrl: 'index.html'
})

export class AddressPage {

  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
