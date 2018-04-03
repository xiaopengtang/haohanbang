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
    'SAVE:USER:APPLY': '/order/service/order/apply/apply',
    // 添加请求单申请人
    'SAVE:ORDER:APPLY': 'order/request/order/apply/apply',
    // 请求单审核申请人
    'SAVE:ORDER:APPROVE': 'order/request/order/apply/approve',

    // 请求单审核申请人
    'SAVE:SERVICE:APPROVE': 'order/service/order/apply/approve',
    // 请求单列表
    "QUERY:ORDER:LIST": 'order/request/order/list',
    // 服务单
    'QUERY:SERVICE:LIST': '/order/service/order/list',
    // 服务单申请
    "SAVE:SERVICE:APPLY": '/order/service/order/apply/apply',
    // 服务单详情
    "QUERY:SERVICE:DETAIL": '/order/service/order/detai',
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
    // 修改默认地址
    'ADDRESS:MODIFYDEFAULT': '/member/address/modify/default',

    // 忘记密码短信获取
    'MEMBER:SMSCODE': '/member/verfication/get/forget/sms/code',
    // 修改密码
    'MEMBER:PWDPHONE': '/member/user/forget/pwd/phone',
    // 修改用户名
    'MEMBER:NICKNAME': '/member/user/nick/name',
    // 修改用户签名
    'MEMBER:SIGN': '/member/user/sign',
    // 获取用户关注列表
    'MEMBER:FOLLOWLIST': '/member/interest/user/list',
    // 关注用户
    'MEMBER:ADDFOLLOW': '/member/interest/user/add',
    // 取消关注
    'MEMBER:DELETEFOLLOW': '/member/interest/user/delete',

    // 服务单列表
    'ORDER:LIST': '/order/service/order/list',
    // 添加服务单
    'ORDER:ADD': '/order/service/order/add',
    // 查询请求单列表
    'ORDER:REQUEST:LIST': '/order/request/order/list',
    // 请求单列表
    'ORDER:REQUEST:ADD': '/order/request/order/add',
    // 申请人确认完成
    'ORDER:REQUEST:CONFIRM': "/order/request/order/applier/confirm",
    // 服务单确认完成 
    'ORDER:SERVICE:CONFIRM': "/order/service/order/user/confirm",

    // 地区POI相关接口
    'SUPPORT:queryByParentCode': '/support/district/queryByParentCode',
  },
  setting: {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
}
