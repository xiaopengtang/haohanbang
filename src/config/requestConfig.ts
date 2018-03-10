export default {
  host: '//1989591.51vip.biz:17001/',
  map: {
    'QUERY:SERVICE:LIST': 'order/request/order/list',
    // 附近人
    'QUERY:USER:NEAR_LIST': '/member/user/nearby/user',
    'SAVE:USER:APPLY': '/service/order/apply/apply',
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
