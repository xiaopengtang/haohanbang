import { NgModule } from '@angular/core';
import { UserDetail } from './index'
import { IonicModule } from 'ionic-angular';
import {
  ServiceList,
  OrderState,
  UserInfoService,
  ChangePassWordPage,
  AddressPage,
  AddressControlPage,
  ProviderListPage,
  RequisitionListPage,
  addServiceForProviderPage,
  addServiceForRequisitionPage,
  ChangeNickNamePage,
  ChangeAutoGraphPage
} from './components';

import { OrderStatusPage } from './modules/orderStatus';
// addServiceForRequisitionPage
@NgModule({
  declarations: [].concat(
    [UserDetail, OrderStatusPage],
    [
      UserDetail,
      ServiceList,
      OrderState,
      UserInfoService,
      ChangePassWordPage,
      AddressPage,
      AddressControlPage,
      ProviderListPage,
      RequisitionListPage,
      addServiceForProviderPage,
      addServiceForRequisitionPage,
      ChangeNickNamePage,
      ChangeAutoGraphPage
    ]
  ),
  imports: [IonicModule.forRoot(UserDetail)],
  entryComponents: [].concat(
    [UserDetail, OrderStatusPage],
    [
      UserDetail,
      ServiceList,
      OrderState,
      UserInfoService,
      ChangePassWordPage,
      AddressPage,
      AddressControlPage,
      ProviderListPage,
      RequisitionListPage,
      addServiceForProviderPage,
      addServiceForRequisitionPage,
      ChangeNickNamePage,
      ChangeAutoGraphPage
    ]
  ),
  exports: [UserDetail]
})

export class UserDetialModule {
}
