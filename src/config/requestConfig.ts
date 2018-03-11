export default {
  host: '//1989591.51vip.biz:17001/',
  map: {
    'QUERY:SERVICE:LIST': 'order/request/order/list',
    // 附近人
    'QUERY:USER:NEAR_LIST': '/member/user/nearby/user',
    'SAVE:USER:APPLY': '/service/order/apply/apply',

    // 注册
    'VERFICATION:USER:REGISTERCODE': '/member/verfication/get/register/sms/code',
    'VERFICATION:USER:REGISTER': '/member/user/register',

    // 登录
    'USER:LOGIN': '/member/user/login',

    // 用户信息
    'USER:USERDETAILS': '/member/user/get/user/byId',
  },
  setting: {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
}
