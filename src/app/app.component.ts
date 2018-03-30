import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'

// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { MapPage } from '../pages/map/map';
import { UserDetail } from '../pages/userDetail';
import { MessagePage } from '../pages/message';
// import {SerivceDetailPage} from '../pages/serviceDetail'
import { ServicePage } from '../pages/service'
import { RequestPage } from '../pages/request'
import {config} from 'hhb-core'
import { Network } from '@ionic-native/network';
// import { SerivceDetailPage } from '../pages/serviceDetail'
// import { ServicePage } from '../pages/service'

// import { UserDetail } from '../pages/userDetail';
import { LoginPage } from '../pages/login';
// import { RegisterPage } from '../pages/register';
// import { ChangePassWordPage } from '../pages/changePassWord';
// import { addServiceForProviderPage } from '../pages/addServiceForProvider';
import * as $message from 'hhb-message'
import * as amap from 'hhb-amap'
import * as Eruda from 'eruda'
import * as user from 'hhb-userauth'
// import AMapPlugin from 'cordova-plugin-badge'
// import { LocalNotifications } from '@ionic-native/local-notifications';
// import {$pres} from 'strophe.js'

// console.log(Eruda)
Eruda.init()

// console.log(UserDetail);

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MapPage;
  // get user(){
  // console.log({user})
  // return user.state || {}
  // }
  private user;

  pages: Array<{ title: string, component: any, param?: any }>;
  // private notify: LocalNotifications
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public toast: ToastController,
    public storage: Storage, public network: Network) {
    storage.get('USER').then(state => {
      user.state = Object.assign(user.state, state)
      if(user.id){
        $message.login(`${user.id}@${config('message.host.name')}`, '123456')
      }
    })
    // console.log(AMapPlugin)
    this.user = user.state || {}
    $message.on('CHAT', mess => {
      console.log(mess)
    })
    // this.user = {};
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      // { title: 'serviceDetail', component: SerivceDetailPage},
      { title: '发现', component: MapPage },
      { title: '消息中心', component: MessagePage },
      { title: '我的请求单', component: RequestPage },
      { title: '我的服务单', component: ServicePage, param: { isService: true } },
      // { title: 'ChangePassWordPage', component: ChangePassWordPage },
      // { title: '我的信息', component: UserDetail},
      /*{ title: 'UserDetail',component: UserDetail},
      { title: 'Message', component: MessagePage },
      // { title: 'UserDetail', component: UserDetail },
      { title: 'Login', component: LoginPage },
      { title: 'RegisterPage', component: RegisterPage },
      { title: 'AddServiceForProviderPage', component: addServiceForProviderPage },
      { title: 'AddServiceForUserPage', component: RegisterPage },
      { title: 'ChangePassWordPage', component: ChangePassWordPage },*/
    ];
  }
  async ngAfterViewInit() {
    // console.log(this.network)
    this.network.onDisconnect().subscribe(() => {
      console.log('this is ondis')
      let toast = this.toast.create({
	      message: '当前网络已断开连接，请检测',
	      duration: 2000,
	      position: 'top'
	    });
	    // toast.onDidDismiss(() => callback && callback() )
	    toast.present();
    })
    // console.log(await this.network.onConnect())
    // this.network.onConnect().subscribe(async() => {
      // console.log('this is network')
      await amap.listen()
      amap.on('COMPLETE', info => {
        user.state.longitude = info.position.lng
        user.state.latitude = info.position.lat
      })
      $message.on('READY', () => {
        // console.log(111)
        // amap.on('')
        amap.on('COMPLETE', info => {

          // console.log({info})
          $message.send({
            'to': `admin@ydj-b85-hd3`,
            'from': `${user.id}@ydj-b85-hd3`,
            'type': 'normal'
          }, JSON.stringify({
            "longitude": info.position.lng,     //经度
            "latitude": info.position.lat,      //纬度
            'distance': 3000   //距离 单位米 需要显示附近多少米的人，默认3000米
          }))
          // console.log(info)

        })
        //
      })

      $message.on('MESSAGE', message => {
        // console.log({message})

      })

    // })

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
    if (!user.id) {
      return this.goToLogin()
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, page.param);
  }

  // 登录
  goToLogin() {
    this.nav.setRoot(LoginPage);
  }

  goToUserDetail() {
    this.nav.setRoot(UserDetail);
  }
}
