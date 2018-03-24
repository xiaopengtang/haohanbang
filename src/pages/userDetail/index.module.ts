import { NgModule } from '@angular/core';
import { UserDetail } from './index'
import { IonicModule } from 'ionic-angular';
import { ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage, addServiceForRequisitionPage, ChangeNickNamePage } from './components';
import { OrderStatusPage } from './modules/orderStatus';

@NgModule({
  declarations: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage, addServiceForRequisitionPage, ChangeNickNamePage]
  ),
  imports: [IonicModule.forRoot(UserDetail)],
  entryComponents: [].concat(
    [UserDetail, OrderStatusPage],
    [UserDetail, ServiceList, OrderState, UserInfoService, ChangePassWordPage, AddressPage, AddressControlPage, ProviderListPage, addServiceForProviderPage, addServiceForRequisitionPage, ChangeNickNamePage]
  ),
  exports: [UserDetail]
})

export class UserDetialModule {
}
