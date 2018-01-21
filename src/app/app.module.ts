import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
// import { MessagePage } from '../pages/message';
import { MessageModule } from '../pages/message/index.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// console.log(new HttpClientModule)


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    // MessagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MessageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    // MessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
