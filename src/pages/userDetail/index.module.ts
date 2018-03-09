import {NgModule} from '@angular/core';
import {UserDetail} from './index'
import {IonicModule} from 'ionic-angular';
import {UserInfo, ServiceList, OrderState} from './components';
import {OrderStatusPage} from './modules/orderStatus';

@NgModule({
  declarations: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, UserInfo, ServiceList, OrderState]
  ),
  imports: [IonicModule.forRoot(UserDetail)],
  entryComponents: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, UserInfo, ServiceList, OrderState]
  ),
  exports: [UserDetail]
})

export class UserDetialModule {
}
