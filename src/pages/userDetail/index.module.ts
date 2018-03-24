import { NgModule } from '@angular/core';
import { UserDetail } from './index'
import { IonicModule } from 'ionic-angular';
import { ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage, ChangeNickNamePage } from './components';
import { OrderStatusPage } from './modules/orderStatus';
// addServiceForRequisitionPage
@NgModule({
  declarations: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage, ChangeNickNamePage]
  ),
  imports: [IonicModule.forRoot(UserDetail)],
  entryComponents: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage, ChangeNickNamePage]
  ),
  exports: [UserDetail]
})

export class UserDetialModule {
}
