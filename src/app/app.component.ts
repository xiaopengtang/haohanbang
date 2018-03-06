import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { UserDetailPage} from '../pages/userDetail'
import { MessagePage } from '../pages/message';
import {SerivceDetailPage} from '../pages/serviceDetail'
import {ServicePage} from '../pages/service'
import * as $message from 'hhb-message'
import * as amap from 'hhb-amap'
import * as Eruda from 'eruda'
import * as user from 'hhb-userauth'
// import { LocalNotifications } from '@ionic-native/local-notifications';
// import {$pres} from 'strophe.js'

// console.log(Eruda)
Eruda.init()

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  // private notify: LocalNotifications
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen/*, private notify: LocalNotifications*/) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Map', component: MapPage },
      { title: 'Message', component: MessagePage},
      { title: 'serviceDetail', component: SerivceDetailPage},
      { title: 'Service', component: ServicePage},
      { title: 'UserDetailPage',component: UserDetailPage}
    ];
  }
  async ngAfterViewInit(){
    await amap.listen()
    // console.log({$message})
    // $message.login('0000000002@ydj-b85-hd3', '123456')
    $message.login(`${user.id}@${user.name}`, user.state.pw)
    $message.on('MESSAGE', message => {
      console.log({message})
      /*this.notify.schedule({
        id: 1,
        text: message.message
      })*/
    })
    /*var pres = $pres({
        from: '0000000002@ydj-b85-hd3',
        to: 'admin@ydj-b85-hd3' + "/" + '0000000002'
    }).c('x',{xmlns: 'http://jabber.org/protocol/muc'}).tree();
    $message.send(pres);*/
    // console.log({pres})
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
