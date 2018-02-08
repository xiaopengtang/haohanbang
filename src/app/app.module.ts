import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import {ComponentsModule} from '../components/index.module'
// import {ComServiceItem} from '../components'
// import { MapPage } from '../pages/map/map';
// import { MessagePage } from '../pages/message';
import { MessageModule } from '../pages/message/index.module';
import { MapModule } from '../pages/map/map.module';
import { ServiceModule } from '../pages/service/index.module';
// import {ComDemo} from '../components/demo'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as core from 'hhb-core'
import * as config from '../config'

// const components = Object.keys(componentsModules).map(k => componentsModules[k])
// console.log({IonicApp})
// 配置安装
core.config(config)


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    // ComServiceItem
    // ComDemo
    // ...components
    // MapPage,
    // MessagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // ComponentsModule,
    MessageModule,
    MapModule,
    ServiceModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    // ComServiceItem,
    // ComDemo
    // ...components
    // MapPage,
    // MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
