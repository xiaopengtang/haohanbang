export default {
  host: 'http://1989591.51vip.biz:17001/',
  // host: 'http://yph0303.com:17001/',
  map: {
    // 'QUERY:SERVICE:LIST': 'order/request/order/list',
    // 聊天记录
    'QUERY:HISTORY:LIST': 'member/chat/log/list',
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
    'VERFICATION:USER:REGISTER': '/member/user/register',
    // 登录
    'USER:LOGIN': '/member/user/login',
    // 用户信息
    'USER:USERDETAILS': '/member/user/get/user/byId',

    // 用户地址列表
    'ADDRESS:LIST': '/member/address/list',
    // 添加地址
    'ADDRESS:ADD': '/member/address/add',
    // 删除地址
    'ADDRESS:DELETE': '/member/address/delete',
    // 修改地址
    'ADDRESS:MODIFY': '/member/address/modify',
    // 修改地址
    'ADDRESS:MODIFYDEFAULT': '/member/address/modify/default',

    // 忘记密码短信获取
    'MEMBER:SMSCODE': '/member/verfication/get/forget/sms/code',
    // 修改密码
    'MEMBER:PWDPHONE': '/member/user/forget/pwd/phone',

    // 修改用户名
    'MEMBER:NICKNAME': '/user/nick/name',

    // 地区POI相关接口
    'SUPPORT:queryByParentCode': '/support/district/queryByParentCode',
  },
  setting: {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
}
