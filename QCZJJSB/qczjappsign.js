/*

 @𝐃𝐃   
//*********************************


[红包]我的邀请码19570916，填了咱俩都拿钱[红包]



说明:


汽车之家极速版 签到可以获得金币兑换现金

圈x获取不到ck就把body改成header

打开软件签到获取ck 签过到可能获取不到ck

13个ck 金币 昵称 签到 提现 时段宝箱 任务 助力 宝箱翻倍 ⚠️⚠️获取这几个看脚本下面的说明 获取惊喜福利 领取福利 分享视频赚金币 看视频领金币 观看福利视频 

// @𝐃𝐃 






surge:本地
签到获取ck
汽车之家极速版 = type=http-request,pattern=^https:\/\/mobile\.app\.autohome\.com\.cn\/*,requires-body=1,max-size=0,script-path=qczjappsign.js

视频获取body
汽车之家极速版 = type=http-request,pattern=^http:\/\/mobile\.app\.autohome\.com\.cn\/*,requires-body=1,max-size=0,script-path=qczjappsign.js

助力获取body
汽车之家极速版 = type=http-request,pattern=^https:\/\/openapi\.autohome\.com\.cn\/*,requires-body=1,max-size=0,script-path=qczjappsign.js



定时 汽车之家极速版 = type=cron,cronexp= 0 11 0-23 * * *, script-path=qczjappsign.js



圈x:本地
签到获取ck
^https:\/\/mobile\.app\.autohome\.com\.cn\/* url script-request-body qczjappsign.js

视频获取body
^http:\/\/mobile\.app\.autohome\.com\.cn\/* url script-request-body qczjappsign.js

助力获取body
^https:\/\/openapi\.autohome\.com\.cn\/* url script-request-body qczjappsign.js
 


定时 0 12 0-23 * * * qczjappsign.js, tag= 汽车之家极速版, enabled=true





loon:本地
签到获取ck
http-request ^https:\/\/mobile\.app\.autohome\.com\.cn\/* script-path=qczjappsign.js, requires-body=true, timeout=10, tag=汽车之家极速版

视频获取body
http-request ^http:\/\/mobile\.app\.autohome\.com\.cn\/* script-path=qczjappsign.js, requires-body=true, timeout=10, tag=汽车之家极速版

助力获取body
http-request ^https:\/\/openapi\.autohome\.com\.cn\/* script-path=qczjappsign.js, requires-body=true, timeout=10, tag=汽车之家极速版



定时 cron "0 12 0-23 * * *" script-path=qczjappsign.js 



小火箭:本地
签到获取ck
汽车之家极速版 = type=http-request,script-path=qczjappsign.js,pattern=^https:\/\/mobile\.app\.autohome\.com\.cn\/*,max-size=131072,requires-body=true,timeout=10,enable=true

视频获取body
汽车之家极速版 = type=http-request,script-path=qczjappsign.js,pattern=^http:\/\/mobile\.app\.autohome\.com\.cn\/*,max-size=131072,requires-body=true,timeout=10,enable=true


助力获取body
汽车之家极速版 = type=http-request,script-path=qczjappsign.js,pattern=^https:\/\/openapi\.autohome\.com\.cn\/*,max-size=131072,requires-body=true,timeout=10,enable=true


定时 汽车之家极速版 = type=cron,script-path=qczjappsign.js,cronexpr="0 0 0 * * *",timeout=10,enable=true


MITM= mobile.app.autohome.com.cn, openapi.autohome.com.cn




*/






//++++++++++++++++++++++++++++++++


const DD ='汽车之家极速版APP';

const $ = new Env(DD);
$.index = ($.index = ($.getval('qeSuffix') || '1') - 1) > 0 ? ($.index + 1 + '') : ''; // 账号扩展字符
const logs=0;//设置0关闭日志,1开启日志

const log=0;//0关闭系统日志,1开启系统日志,和系统通知不要一起打开,关闭系统通知就要打开,系统日志

const noNolog=0;//1关闭系统通知,0打开系统通知

//⚠️⚠️⚠️⚠️必须一个一个获取对应的否者无法运行
const Body =  $.getval('qczjBody'); // 0,不获取，1,获取惊喜福利，2,领取福利188,3,分享视频赚金币,4,看视频领金币,5,观看福利视频





let dd = "" //

const ashxsignurlArr = [];
let ashxsignurl = "";
const ashxsignheaderArr = [];
let ashxsignheader = "";


const initsignheaderArr = [];
let initsignheader = "";
const initsignbdArr = [];
let initsignbd = "";

const addCoinsignbdArr = [];
let addCoinsignbd = "";

const addCoin1signbdArr = [];
let addCoin1signbd = "";

const coinsignurlArr = [];
let coinsignurl = "";

const coinsignheaderArr = [];
let coinsignheader = "";

const coinsignbdArr = [];
let coinsignbd = "";

const cointowalletsignurlArr = [];
let cointowalletsignurl = "";

const cointowalletsignheaderArr = [];
let cointowalletsignheader = "";

const cointowalletsignbdArr = [];
let cointowalletsignbd = "";


const coinbodyjxArr = [];
let coinbodyjx = "";

const coinbodylqflArr = [];
let coinbodylqfl = "";

const coinbodykspArr = [];
let coinbodyksp = "";

const coinbodyzjbArr = [];
let coinbodyzjb = "";

const coinbodyflspArr = [];
let coinbodyflsp = "";

const coinbodyrwArr = [];
let coinbodyrw = "";


const reportAssbodyArr = [];
let reportAssbody = "";

const reportAssheaderArr =[];
let reportAssheader = "";

ashxsignurlArr.push($.getdata('ashxsignurl'));
ashxsignheaderArr.push($.getdata('ashxsignheader'));
 
 initsignheaderArr.push($.getdata('initsignheader'));
 initsignbdArr.push($.getdata('initsignbd'));

 addCoinsignbdArr.push($.getdata('addCoinsignbd'));
 addCoin1signbdArr.push($.getdata('addCoin1signbd'));

 coinsignurlArr.push($.getdata('coinsignurl'));
 coinsignheaderArr.push($.getdata('coinsignheader'));
 coinsignbdArr.push($.getdata('coinsignbd'));
 cointowalletsignurlArr.push($.getdata('cointowalletsignurl'));
cointowalletsignheaderArr.push($.getdata('cointowalletsignheader'));
 cointowalletsignbdArr.push($.getdata('cointowalletsignbd'));

 coinbodyjxArr.push($.getdata('coinbodyjx'));
 coinbodylqflArr.push($.getdata('coinbodylqfl'));

 coinbodykspArr.push($.getdata('coinbodyksp'));

 coinbodyzjbArr.push($.getdata('coinbodyzjb'));
 coinbodyflspArr.push($.getdata('coinbodyflsp'));

 coinbodyrwArr.push($.getdata('coinbodyrw'));
 reportAssbodyArr.push($.getdata('reportAssbody'));
reportAssheaderArr.push($.getdata('reportAssheader'));


 // boxjs中设置多账号数
  let qczjCount = ($.getval('qczjCount') || '1') - 0;
  for (let i = 2; i <= qczjCount; i++) {
    if ($.getdata('ashxsignurl${i}')) {	
  ashxsignurlArr.push($.getdata('ashxsignurl${i}'));
ashxsignheaderArr.push($.getdata('ashxsignheader${i}'));

initsignheaderArr.push($.getdata('initsignheader${i}'));
 initsignbdArr.push($.getdata('initsignbd${i}'));
 addCoinsignbdArr.push($.getdata('addCoinsignbd${i}'));
 addCoin1signbdArr.push($.getdata('addCoin1signbd${i}'));
 
coinsignurlArr.push($.getdata('coinsignurl${i}'));
 coinsignheaderArr.push($.getdata('coinsignheader${i}'));
 coinsignbdArr.push($.getdata('coinsignbd${i}'));
 cointowalletsignurlArr.push($.getdata('cointowalletsignurl${i}'));
cointowalletsignheaderArr.push($.getdata('cointowalletsignheader${i}'));
 cointowalletsignbdArr.push($.getdata('cointowalletsignbd${i}'));


 coinbodyjxArr.push($.getdata('coinbodyjx${i}'));

 coinbodylqflArr.push($.getdata('coinbodylqfl${i}'));

 coinbodykspArr.push($.getdata('coinbodyksp${i}'));

 coinbodyzjbArr.push($.getdata('coinbodyzjb${i}'));

 coinbodyflspArr.push($.getdata('coinbodyflsp${i}'));

 coinbodyrwArr.push($.getdata('coinbodyrw${i}'));
 reportAssbodyArr.push($.getdata('reportAssbody${i}'));
reportAssheaderArr.push($.getdata('reportAssheader${i}'));

    }
  }

!(async () => {
if (typeof $request != "undefined") {
    await qczjsign()
  } else{
    await Sign()
    await Msg()
}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


async function Sign() {

if (!ashxsignurlArr[0]) {
    $.msg($.name, '运行前需要获取cookie点击前往\n', 'http://athm.cn/udGkXrc', {"open-url": "http://athm.cn/udGkXrc"});
    return;
  } else {console.log(`\n************ 脚本共${ashxsignurlArr.length}个${$.name}账号  ************\n`
  );
  console.log(`\n============ 脚本执行时间(TM)：${new Date(new Date().getTime() + 0 * 60 * 60 * 1000).toLocaleString('zh', {hour12: false})}  =============\n`)}

  for (let i = 0; i < ashxsignurlArr.length; i++) {
  ashxsignurl = ashxsignurlArr[i];		
  ashxsignheader = ashxsignheaderArr[i];
  
  
  initsignheader = initsignheaderArr[i];	  
  initsignbd = initsignbdArr[i];

  addCoinsignbd = addCoinsignbdArr[i];

  addCoin1signbd = addCoin1signbdArr[i];

  coinsignurl = coinsignurlArr[i];
  coinsignheader = coinsignheaderArr[i];
  coinsignbd = coinsignbdArr[i];

  cointowalletsignurl = cointowalletsignurlArr[i];
  reportAssheaderVal = reportAssheaderArr[i];
  cointowalletsignheader = cointowalletsignheaderArr[i];	  
  cointowalletsignbd = cointowalletsignbdArr[i];
coinbodyjx = coinbodyjxArr[i];
coinbodylqfl = coinbodylqflArr[i];
coinbodyksp = coinbodykspArr[i];
coinbodyzjb = coinbodyzjbArr[i];
coinbodyflsp = coinbodyflspArr[i];
coinbodyrw = coinbodyrwArr[i];
reportAssbody = reportAssbodyArr[i];
reportAssheader = reportAssheaderArr[i];
      await console.log(`..........................................\n\n🔔开始执行【${$.name+(i+1)}】\n`) 

    await ashx()
    await init()
    await task()
    await addRewardLog()
    await addCoin()
    await addCoins()
    await coin1()
    await coin2()
    await coin3()
    await coin4()
    await reportAss()
    await cointowallet()
    await coin()
}
}

function ashx() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : ashxsignurl,
        headers : JSON.parse(ashxsignheader),     
      }
      $.get(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.ashx = data;
if($.ashx.returncode==0)
console.log("...开始执行【"+$.ashx.result.name+"】账号任务...\n")
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}


function init() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://mobile.app.autohome.com.cn/speedgrow_v1.0.0/taskcenter/init/activity",
        headers : JSON.parse(initsignheader),
        body: initsignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.init = data;
if($.init.returncode== 0)
dd+= "【每日签到打卡】"+"今日打卡获得"+$.init.result.list[0].data.signlist[$.init.result.list[0].data.signdaycount-1].prize+"💰金币"+",已签到"+$.init.result.list[0].data.signdaycount+"天\n";

        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}



 function addRewardLog() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://mobile.app.autohome.com.cn/fasthome/invite/addRewardLog",
        headers : JSON.parse(initsignheader),
        body: coinbodyksp,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.result = data;
if($.result.returncode ==0)
dd+= "【看视频领金币】"+"+"+$.result.result.rewardCoin+"💰金币\n";

if($.result.returncode ==101)
dd+= "【看视频领金币】"+$.result.message+"\n";

        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}



function addCoin() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "http://mobile.app.autohome.com.cn/fasthome/mainpagecoin/addCoin",
        headers : JSON.parse(initsignheader),
        body: addCoinsignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.addCoin = data;
if($.addCoin.returncode ==0)
dd+= "【首页时段奖励】"+"+"+$.addCoin.result.getcoinnum+"💰金币"+",下时段+"+$.addCoin.result.mainPageCoinResult.result.nowgetcoin+"💰金币\n";

if($.addCoin.returncode ==-104)
dd+= "【首页时段奖励】"+$.addCoin.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}







function addCoins(timeout=2000) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "http://mobile.app.autohome.com.cn/fasthome/mainpagecoin/addCoin",
        headers : JSON.parse(initsignheader),
        body: addCoin1signbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.addCoins = data;
if($.addCoins.returncode ==0)
dd+= "【首页时段翻倍】"+"+"+$.addCoins.result.getcoinnum+"💰金币\n";

if($.addCoins.returncode ==-102)
dd+= "【首页时段翻倍】"+$.addCoins.message+"\n";

if($.addCoins.returncode ==-108)
dd+= "【首页时段翻倍】"+$.addCoins.message+"\n";

        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}

function cointowallet() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : cointowalletsignurl,
        headers : JSON.parse(cointowalletsignheader),
        body: cointowalletsignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.cointowallet = data;
if($.cointowallet.returncode ==0)
dd+= "【每日随机提现】"+"提现成功+0.5元\n";

if($.cointowallet.returncode ==-12)
dd+= "【每日随机提现】"+$.cointowallet.message+"\n";

if($.cointowallet.returncode ==-11)
dd+= "【每日随机提现】"+$.cointowallet.message+"\n";

if($.cointowallet.returncode ==-1)
dd+= "【每日随机提现】"+$.cointowallet.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}




function coin1(timeout=2000) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "http://mobile.app.autohome.com.cn/fasthome/invite/addRewardLog",
        headers : JSON.parse(cointowalletsignheader),
        body: coinbodyjx,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.coin1 = data;
if($.coin1.returncode ==101)
dd+= "【惊喜福利奖励】"+$.coin1.message+"\n";


if($.coin1.result.rewardCoin >0)
dd+= "【惊喜福利奖励】"+"+"+$.coin1.result.rewardCoin+"💰金币\n";

if($.coin1.result.finish ==1)
dd+= "【惊喜福利奖励】"+"今日已完成任务\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}



function coin2(timeout=2000) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "http://mobile.app.autohome.com.cn/fasthome/invite/addRewardLog",
        headers : JSON.parse(cointowalletsignheader),
        body: coinbodylqfl,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.coin2 = data;
if($.coin2.returncode ==0)
dd+= "【领取福利368】"+"+"+$.coin2.result.rewardCoin+"💰金币\n";

if($.coin2.returncode ==101)
dd+= "【领取福利368】"+$.coin2.message+"\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


function coin3(timeout=2000) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "http://mobile.app.autohome.com.cn/fasthome/invite/addRewardLog",
        headers : JSON.parse(cointowalletsignheader),
        body: coinbodyflsp,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.coin3 = data;
if($.coin3.returncode ==101)
dd+= "【观看福利视频】"+$.coin3.message+"\n";

if($.coin3.result.rewardCoin >0)
dd+= "【观看福利视频】"+"+"+$.coin3.result.rewardCoin+"💰金币\n";

if($.coin3.result.finish ==1)
dd+= "【观看福利视频】"+"今日已完成任务\n";

        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}

function coin4(timeout=2000) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "http://mobile.app.autohome.com.cn/fasthome/invite/addRewardLog",
        headers : JSON.parse(cointowalletsignheader),
        body: coinbodyzjb,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.coin4 = data;
if($.coin4.returncode ==0)
dd+= "【分享视频赚金币】"+"+"+$.coin4.result.rewardCoin+"💰金币\n";

if($.coin4.returncode ==101)
dd+= "【分享视频赚金币】"+$.coin4.message+"\n";



        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}



function task(timeout=0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://mobile.app.autohome.com.cn/speedgrow_v1.0.0/taskcenter/init/task",
        headers : JSON.parse(cointowalletsignheader),
        body: coinbodyrw,
           }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.task = data;
if ($.task.returncode == 0)

for(let i=0;i<$.task.result.list[1].tasklist.length;i++)
 {
var gg=$.task.result.list[1].tasklist[i].status==0?"(未完成)":"(已完成)";
if($.task.result.list[1].tasklist[i].id==14)
console.log($.task.result.list[1].tasklist[i].title+",可获得"+$.task.result.list[1].tasklist[i].tiptxt+"金币💰"+"进度"+$.task.result.list[1].tasklist[i].step+gg+"\n");

else
if($.task.result.list[1].tasklist[i].id==9)
console.log($.task.result.list[1].tasklist[i].title+",可获得"+$.task.result.list[1].tasklist[i].tiptxt+"金币💰"+gg+"\n")
else
if($.task.result.list[1].tasklist[i].id==18)
console.log($.task.result.list[1].tasklist[i].title+",可获得"+$.task.result.list[1].tasklist[i].tiptxt+"金币💰"+"进度"+$.task.result.list[1].tasklist[i].step+gg+"\n");

else
if($.task.result.list[1].tasklist[i].id==35)
console.log($.task.result.list[1].tasklist[i].title+",可获得"+$.task.result.list[1].tasklist[i].tiptxt+"金币💰"+gg+"\n")
else
if($.task.result.list[1].tasklist[i].btntxt=="去分享")
console.log($.task.result.list[1].tasklist[i].title+",可获得"+$.task.result.list[1].tasklist[i].tiptxt+"金币💰"+"进度"+$.task.result.list[1].tasklist[i].step+gg+"\n")

else
if($.task.result.list[1].tasklist[i].id==10)
console.log($.task.result.list[1].tasklist[i].title+",可获得"+$.task.result.list[1].tasklist[i].tiptxt+"金币💰"+gg+"\n")

else
if($.task.result.list[1].tasklist[i].id==15)
console.log($.task.result.list[1].tasklist[i].title+",可获得"+$.task.result.list[1].tasklist[i].tiptxt+"金币💰"+gg+"\n")
}
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}




function reportAss(timeout=2000) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : "https://openapi.autohome.com.cn/autohome/uc-news-quickappservice/msapi/dealers/reportAss",
        headers : JSON.parse(reportAssheader),
        body: reportAssbody.replace(/userAssistanceId=[0-9]/, `userAssistanceId=${(Math.floor(Math.random() * 444444444) + 111111111)}`),
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.reportAss = data;
if($.reportAss.status==0)
dd+= "【分享赚现金】"+"助力成功✅\n";
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


function coin() {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let Url = {
        url : coinsignurl,
        headers : JSON.parse(coinsignheader),
        body: coinsignbd,
     
      }
      $.post(Url, async (err, resp, data) => {
        try {
          data = JSON.parse(data);
          if(logs==1)console.log(data)
          $.coin = data;
if($.coin.returncode== 0)
dd+= "【账号金币查询】"+"现金"+$.coin.result.nowmoney+"元💸"+",今日"+$.coin.result.nowcoin+"💰金币\n";

        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },)
  })
}











function Msg() {

if(log==1)console.log(dd)

 if(noNolog==0)$.msg($.name,"",dd)

}









function qczjsign() {


if ($request.url.indexOf("ashx?") > 0) {
    

$.setdata($request.url,'ashxsignurl' + $.index)
    $.setdata(JSON.stringify($request.headers),'ashxsignheader' + $.index)
    
    $.msg($.name + $.index,"","[获取昵称数据]✅成功")}
else  
if ($request.url.indexOf("activity") > -1) {
    

$.setdata($request.url,'initsignurl' + $.index)
    $.setdata(JSON.stringify($request.headers),'initsignheader' + $.index)
    $.setdata($request.body,'initsignbd' + $.index)

    
    $.msg($.name + $.index,"","[获取签到数据]✅成功")}

  else
if ($request.body.indexOf("moreflag=0") > -1) {
    


    $.setdata($request.body,'addCoinsignbd' + $.index)

    
    $.msg($.name + $.index,"","[获取首页时段数据]✅成功")}

  else
if ($request.body.indexOf("moreflag=1") > -1) {

    $.setdata($request.body,'addCoin1signbd' + $.index)
    $.msg($.name + $.index,"","[获取首页时段翻倍数据]✅成功")}

else
if ($request.url.indexOf("cointowallet") > -1) {
    

$.setdata($request.url,'cointowalletsignurl' + $.index)
    $.setdata(JSON.stringify($request.headers),'cointowalletsignheader' + $.index)

$.setdata($request.body,'cointowalletsignbd' + $.index)

    
    $.msg($.name + $.index,"","[获取提现数据]✅成功")}

else
if ($request.url.indexOf("coin") > 0) {
    

$.setdata($request.url,'coinsignurl' + $.index)
    $.setdata(JSON.stringify($request.headers),'coinsignheader' + $.index)
    $.setdata($request.body,'coinsignbd' + $.index)

    
    $.msg($.name + $.index,"","[获取金币数据]✅成功")}


  else
if ($request.url.indexOf("addRewardLog") > 0&&$request.body.indexOf("pm=1") > 0)
 {
    if(Body==1){

    $.setdata($request.body,'coinbodyjx' + $.index)

    $.msg($.name + $.index,"","[获取惊喜福利数据]✅成功");}
if(Body==2){

    $.setdata($request.body,'coinbodylqfl' + $.index)

    $.msg($.name + $.index,"","[获取领取福利368数据]✅成功");}
if(Body==3){

    $.setdata($request.body,'coinbodyzjb' + $.index)

    $.msg($.name + $.index,"","[获取分享视频赚金币数据]✅成功");}

if(Body==4){

    $.setdata($request.body,'coinbodyksp' + $.index)

    $.msg($.name + $.index,"","[获取看视频领金币数据]✅成功");}

if(Body==5){

    $.setdata($request.body,'coinbodyflsp' + $.index)

    $.msg($.name + $.index,"","[获取观看福利视频数据]✅成功");}

}

  else
if ($request.url.indexOf("task") > 0) {
    
    $.setdata($request.body,'coinbodyrw' + $.index)
    $.msg($.name + $.index,"","[获取任务数据]✅成功")}

  else
if ($request.url.indexOf("reportAss") > 0) {
    $.setdata(JSON.stringify($request.headers),'reportAssheader' + $.index)
    $.setdata($request.body,'reportAssbody' + $.index)
    $.msg($.name + $.index,"","[获取助力数据]✅成功")}





}






























function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
