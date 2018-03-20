import { NgModule } from '@angular/core';
import { UserDetail } from './index'
import { IonicModule } from 'ionic-angular';
import { ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage } from './components';
import { OrderStatusPage } from './modules/orderStatus';

@NgModule({
  declarations: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage]
  ),
  imports: [IonicModule.forRoot(UserDetail)],
  entryComponents: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage]
  ),
  exports: [UserDetail]
})

export class UserDetialModule {
}
