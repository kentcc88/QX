/******************************
脚本功能：长相思-登录后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-22
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/poetry\.nanxiani\.cn\/api\/(user\/getuserdata|User\/loginUserInfo) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/cxs.js
[mitm] 
hostname = poetry.nanxiani.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "vip_group": "cxs_svip",
  "had_vip": true,
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
