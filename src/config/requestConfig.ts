export default {
  host: 'http://1989591.51vip.biz:17001/',
  // host: 'http://yph0303.com:17001/',
  map: {
    // 'QUERY:SERVICE:LIST': 'order/request/order/list',
    // 附近人
    'QUERY:USER:NEAR_LIST': '/member/user/nearby/user',
    // 请求单留言
    'SAVE:ORDER:APPLY_MESSAGE': 'order/request/order/leave/message/add',
    'SAVE:USER:APPLY': '/service/order/apply/apply',
    // 
    'SAVE:ORDER:APPLY': 'order/request/order/apply/apply',
    // 请求单列表
    "QUERY:ORDER:LIST": 'order/request/order/list',
    // 服务单
    'QUERY:SERVICE:LIST': '/service/order/list',
    // 服务单申请
    "SAVE:SERVICE:APPLY": '/service/order/apply/apply',
    // 服务单详情
    "QUERY:SERVICE:DETAIL": '/service/order/detai',
    // 获取请求单列表
    'QUERY:ORDER:REQUEST_LIST': 'order/request/order/list',
    //注册
    'VERFICATION:USER:REGISTERCODE': '/member/verfication/get/register/sms/code',
    'VERFICATION:USER:REGISTER': '/user/register'
  },
  setting: {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
}
