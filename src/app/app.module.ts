import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
// import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { UserDetailPage } from '../pages/userDetail'
// import {ComponentsModule} from '../components/index.module'
// import {ComServiceItem} from '../components'
// import { MapPage } from '../pages/map/map';

// import { LoginPage } from '../pages/login';
// import { RegisterPage } from '../pages/register';
// import { ChangePassWordPage } from '../pages/changePassWord';
// import { addServiceForProviderPage } from '../pages/addServiceForProvider';
import { UserDetialModule } from '../pages/userDetail/index.module';
// import { RegisterModule } from '../pages/register/index.module';

// import { MessagePage } from '../pages/message';
import { MessageModule } from '../pages/message/index.module';
import { MapModule } from '../pages/map/map.module';
import { IonicStorageModule } from '@ionic/storage';
import { ServiceModule } from '../pages/service/index.module';
import { ServiceDetailModule } from '../pages/serviceDetail/index.module';
import { LocalNotifications } from '@ionic-native/local-notifications'
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
    // UserDetailPage,
    // UserDetailPage
    // ComServiceItem
    // ComDemo
    // ...components
    // MapPage,
    // LoginPage,
    RegisterPage,
    ChangePassWordPage,
    addServiceForProviderPage,
    // UserDetial
    // MessagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    // ComponentsModule,
    // HttpClientModule,
    MessageModule,
    MapModule,
    ServiceModule,
    ServiceDetailModule,
    UserDetialModule,
    // RegisterModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    // UserDetailPage,
    // ComServiceItem,
    // ComDemo
    // ...components
    // MapPage,
    // LoginPage,
    RegisterPage,
    ChangePassWordPage,
    addServiceForProviderPage,

    // MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
