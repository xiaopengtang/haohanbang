import { MessageItem } from './item';
import { ServiceList } from './serviceList';
import { OrderState } from './orderState';
import { UserInfoService } from './infService';
import { addServiceForProviderPage } from './addServiceForProvider';
import { ChangePassWordPage } from './changePassWord';
import { AddressControlPage } from './addressControl';
import { AddressPage } from './address';
import { ProviderListPage } from './ProviderList';
import { RequisitionListPage } from './RequisitionList';
import { ChangeNickNamePage } from './changeNickname';
import { addServiceForRequisitionPage } from './addServiceForRequisition';
import { ChangeAutoGraphPage } from './changeAutograph';
// import { AddressControlPage } from './addressControl';

export {
  MessageItem,
  // 服务列表
  ServiceList,
  // 订单状态
  OrderState,
  // 用户信息修改服务
  UserInfoService,
  // 添加服务单
  addServiceForProviderPage,
  // 添加请求单
  addServiceForRequisitionPage,
  // 修改密码
  ChangePassWordPage,
  // 地址列表
  AddressPage,
  AddressControlPage,
  ProviderListPage,
  // 修改用户名
  ChangeNickNamePage,
  // 请求单列表
  RequisitionListPage,
  ChangeAutoGraphPage,
}
