<!--  -->
<template>
    <section class="area-wrapper js-area-wrapper" :id="isdis">
        <header class="selectcity-header">
            <span class="cancel-btn js-cancel-btn" @click="handleClick">取消</span>
            <span class="title">选择地区</span>
        </header>
        <p class="position-text">当前选中城市:<span class="city-name js-city-name">{{city}}</span></p>
        <div class="left-win js-left-win" style="touch-action: none;">
            <ul class="left-box js-left-box" @click="handleProvice">
                <li class="l-l-item list-item js-left-list-item" :class="provice==='重点地区'? 'active' : ''" data-province="重点地区">重点地区</li>
                <li class="l-l-item list-item js-left-list-item" :class="beijing" data-province="北京">北京</li>
                <li class="l-l-item list-item js-left-list-item" :class="tianjin" data-province="天津">天津</li>
                <li class="l-l-item list-item js-left-list-item" :class="hebei" data-province="河北">河北</li>
                <li class="l-l-item list-item js-left-list-item" :class="shanxi" data-province="山西">山西</li>
                <li class="l-l-item list-item js-left-list-item" :class="neimenggu" data-province="内蒙古">内蒙古</li>
                <li class="l-l-item list-item js-left-list-item" :class="liaoning" data-province="辽宁">辽宁</li>
                <li class="l-l-item list-item js-left-list-item" :class="jilin" data-province="吉林">吉林</li>
                <li class="l-l-item list-item js-left-list-item" :class="heilongjiang" data-province="黑龙江">黑龙江</li>
                <li class="l-l-item list-item js-left-list-item" :class="shanghai" data-province="上海">上海</li>
                <li class="l-l-item list-item js-left-list-item" :class="jiangsu" data-province="江苏">江苏</li>
                <li class="l-l-item list-item js-left-list-item" :class="zhejiang" data-province="浙江">浙江</li>
                <li class="l-l-item list-item js-left-list-item" :class="anhui" data-province="安徽">安徽</li>
                <li class="l-l-item list-item js-left-list-item" :class="fujian" data-province="福建">福建</li>
                <li class="l-l-item list-item js-left-list-item" :class="jiangxi" data-province="江西">江西</li>
                <li class="l-l-item list-item js-left-list-item" :class="shandong" data-province="山东">山东</li>
                <li class="l-l-item list-item js-left-list-item" :class="henan" data-province="河南">河南</li>
                <li class="l-l-item list-item js-left-list-item" :class="hubei" data-province="湖北">湖北</li>
                <li class="l-l-item list-item js-left-list-item" :class="hunan" data-province="湖南">湖南</li>
                <li class="l-l-item list-item js-left-list-item" :class="guangdong" data-province="广东">广东</li>
                <li class="l-l-item list-item js-left-list-item" :class="guangxi" data-province="广西">广西</li>
                <li class="l-l-item list-item js-left-list-item" :class="hainan" data-province="海南">海南</li>
                <li class="l-l-item list-item js-left-list-item" :class="chongqing" data-province="重庆">重庆</li>
                <li class="l-l-item list-item js-left-list-item" :class="sichuan" data-province="四川">四川</li>
                <li class="l-l-item list-item js-left-list-item" :class="guizhou" data-province="贵州">贵州</li>
                <li class="l-l-item list-item js-left-list-item" :class="yunnan" data-province="云南">云南</li>
                <li class="l-l-item list-item js-left-list-item" :class="xizang" data-province="西藏">西藏</li>
                <li class="l-l-item list-item js-left-list-item" :class="shanshanxi" data-province="陕西">陕西</li>
                <li class="l-l-item list-item js-left-list-item" :class="gansu" data-province="甘肃">甘肃</li>
                <li class="l-l-item list-item js-left-list-item" :class="qinghai" data-province="青海">青海</li>
                <li class="l-l-item list-item js-left-list-item" :class="ningxia" data-province="宁夏">宁夏</li>
                <li class="l-l-item list-item js-left-list-item" :class="xinjiang" data-province="新疆">新疆</li>
            </ul>
        </div> 
        <div class="right-win js-right-win" style="touch-action: none;">
            <div class="right-box js-right-box" @click="handleCity">
                <ul class="city-right js-city-right" :class="provice==='重点地区'? 'displayblock' : ''" data-province="">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全国'? 'active' : ''" data-city="全国">全国</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='北京'? 'active' : ''" data-city="北京">北京</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='上海'? 'active' : ''" data-city="上海">上海</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='广州'? 'active' : ''" data-city="广州">广州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='深圳'? 'active' : ''" data-city="深圳">深圳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南京'? 'active' : ''" data-city="南京">南京</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='武汉'? 'active' : ''" data-city="武汉">武汉</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='成都'? 'active' : ''" data-city="成都">成都</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='西安'? 'active' : ''" data-city="西安">西安</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='北京'? 'displayblock' : ''" data-province="北京">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='东城'? 'active' : ''" data-city="东城">东城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='西城'? 'active' : ''" data-city="西城">西城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='朝阳'? 'active' : ''" data-city="朝阳">朝阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='丰台'? 'active' : ''" data-city="丰台">丰台</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='石景山'? 'active' : ''" data-city="石景山">石景山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='海淀'? 'active' : ''" data-city="海淀">海淀</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='门头沟'? 'active' : ''" data-city="门头沟">门头沟</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='房山'? 'active' : ''" data-city="房山">房山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='通州'? 'active' : ''" data-city="通州">通州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='顺义'? 'active' : ''" data-city="顺义">顺义</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='昌平'? 'active' : ''" data-city="昌平">昌平</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='大兴'? 'active' : ''" data-city="大兴">大兴</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='怀柔'? 'active' : ''" data-city="怀柔">怀柔</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='平谷'? 'active' : ''" data-city="平谷">平谷</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='密云'? 'active' : ''" data-city="密云">密云</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='延庆'? 'active' : ''" data-city="延庆">延庆</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='天津'? 'displayblock' : ''" data-province="天津">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='和平'? 'active' : ''" data-city="和平">和平</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='河东'? 'active' : ''" data-city="河东">河东</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='河西'? 'active' : ''" data-city="河西">河西</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南开'? 'active' : ''" data-city="南开">南开</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='河北'? 'active' : ''" data-city="河北">河北</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='红桥'? 'active' : ''" data-city="红桥">红桥</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='蓟州'? 'active' : ''" data-city="蓟州">蓟州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='西青'? 'active' : ''" data-city="西青">西青</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='津南'? 'active' : ''" data-city="津南">津南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='北辰'? 'active' : ''" data-city="北辰">北辰</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='武清'? 'active' : ''" data-city="武清">武清</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宝坻'? 'active' : ''" data-city="宝坻">宝坻</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='滨海新'? 'active' : ''" data-city="滨海新">滨海新</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宁河'? 'active' : ''" data-city="宁河">宁河</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='静海'? 'active' : ''" data-city="静海">静海</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='河北'? 'displayblock' : ''" data-province="河北">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='石家庄'? 'active' : ''" data-city="石家庄">石家庄</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='唐山'? 'active' : ''" data-city="唐山">唐山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='秦皇岛'? 'active' : ''" data-city="秦皇岛">秦皇岛</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='邯郸'? 'active' : ''" data-city="邯郸">邯郸</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='邢台'? 'active' : ''" data-city="邢台">邢台</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='保定'? 'active' : ''" data-city="保定">保定</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='张家口'? 'active' : ''" data-city="张家口">张家口</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='承德'? 'active' : ''" data-city="承德">承德</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='沧州'? 'active' : ''" data-city="沧州">沧州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='廊坊'? 'active' : ''" data-city="廊坊">廊坊</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='衡水'? 'active' : ''" data-city="衡水">衡水</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='山西'? 'displayblock' : ''" data-province="山西">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='太原'? 'active' : ''" data-city="太原">太原</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='大同'? 'active' : ''" data-city="大同">大同</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阳泉'? 'active' : ''" data-city="阳泉">阳泉</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='长治'? 'active' : ''" data-city="长治">长治</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='晋城'? 'active' : ''" data-city="晋城">晋城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='朔州'? 'active' : ''" data-city="朔州">朔州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='晋中'? 'active' : ''" data-city="晋中">晋中</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='运城'? 'active' : ''" data-city="运城">运城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='忻州'? 'active' : ''" data-city="忻州">忻州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='临汾'? 'active' : ''" data-city="临汾">临汾</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='吕梁'? 'active' : ''" data-city="吕梁">吕梁</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='内蒙古'? 'displayblock' : ''" data-province="内蒙古">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='呼和浩特'? 'active' : ''" data-city="呼和浩特">呼和浩特</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='包头'? 'active' : ''" data-city="包头">包头</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='乌海'? 'active' : ''" data-city="乌海">乌海</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='赤峰'? 'active' : ''" data-city="赤峰">赤峰</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='通辽'? 'active' : ''" data-city="通辽">通辽</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='鄂尔多斯'? 'active' : ''" data-city="鄂尔多斯">鄂尔多斯</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='呼伦贝尔'? 'active' : ''" data-city="呼伦贝尔">呼伦贝尔</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='巴彦淖尔'? 'active' : ''" data-city="巴彦淖尔">巴彦淖尔</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='乌兰察布'? 'active' : ''" data-city="乌兰察布">乌兰察布</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='兴安盟'? 'active' : ''" data-city="兴安盟">兴安盟</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='锡林郭勒盟'? 'active' : ''" data-city="锡林郭勒盟">锡林郭勒盟</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阿拉善盟'? 'active' : ''" data-city="阿拉善盟">阿拉善盟</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='辽宁'? 'displayblock' : ''" data-province="辽宁">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='沈阳'? 'active' : ''" data-city="沈阳">沈阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='大连'? 'active' : ''" data-city="大连">大连</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='鞍山'? 'active' : ''" data-city="鞍山">鞍山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='抚顺'? 'active' : ''" data-city="抚顺">抚顺</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='本溪'? 'active' : ''" data-city="本溪">本溪</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='丹东'? 'active' : ''" data-city="丹东">丹东</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='锦州'? 'active' : ''" data-city="锦州">锦州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='营口'? 'active' : ''" data-city="营口">营口</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阜新'? 'active' : ''" data-city="阜新">阜新</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='辽阳'? 'active' : ''" data-city="辽阳">辽阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='盘锦'? 'active' : ''" data-city="盘锦">盘锦</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='铁岭'? 'active' : ''" data-city="铁岭">铁岭</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='朝阳'? 'active' : ''" data-city="朝阳">朝阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='葫芦岛'? 'active' : ''" data-city="葫芦岛">葫芦岛</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='吉林'? 'displayblock' : ''" data-province="吉林">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='长春'? 'active' : ''" data-city="长春">长春</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='吉林'? 'active' : ''" data-city="吉林">吉林</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='四平'? 'active' : ''" data-city="四平">四平</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='辽源'? 'active' : ''" data-city="辽源">辽源</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='通化'? 'active' : ''" data-city="通化">通化</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='白山'? 'active' : ''" data-city="白山">白山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='松原'? 'active' : ''" data-city="松原">松原</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='白城'? 'active' : ''" data-city="白城">白城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='延边'? 'active' : ''" data-city="延边">延边</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='黑龙江'? 'displayblock' : ''" data-province="黑龙江">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='哈尔滨'? 'active' : ''" data-city="哈尔滨">哈尔滨</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='齐齐哈尔'? 'active' : ''" data-city="齐齐哈尔">齐齐哈尔</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='鸡西'? 'active' : ''" data-city="鸡西">鸡西</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='鹤岗'? 'active' : ''" data-city="鹤岗">鹤岗</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='双鸭山'? 'active' : ''" data-city="双鸭山">双鸭山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='大庆'? 'active' : ''" data-city="大庆">大庆</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='伊春'? 'active' : ''" data-city="伊春">伊春</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='佳木斯'? 'active' : ''" data-city="佳木斯">佳木斯</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='七台河'? 'active' : ''" data-city="七台河">七台河</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='牡丹江'? 'active' : ''" data-city="牡丹江">牡丹江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黑河'? 'active' : ''" data-city="黑河">黑河</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='绥化'? 'active' : ''" data-city="绥化">绥化</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='大兴安岭'? 'active' : ''" data-city="大兴安岭">大兴安岭</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='上海'? 'displayblock' : ''" data-province="上海">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黄浦'? 'active' : ''" data-city="黄浦">黄浦</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='徐汇'? 'active' : ''" data-city="徐汇">徐汇</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='长宁'? 'active' : ''" data-city="长宁">长宁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='静安'? 'active' : ''" data-city="静安">静安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='普陀'? 'active' : ''" data-city="普陀">普陀</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='虹口'? 'active' : ''" data-city="虹口">虹口</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='杨浦'? 'active' : ''" data-city="杨浦">杨浦</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='闵行'? 'active' : ''" data-city="闵行">闵行</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宝山'? 'active' : ''" data-city="宝山">宝山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='嘉定'? 'active' : ''" data-city="嘉定">嘉定</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='浦东'? 'active' : ''" data-city="浦东">浦东</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='金山'? 'active' : ''" data-city="金山">金山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='松江'? 'active' : ''" data-city="松江">松江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='青浦'? 'active' : ''" data-city="青浦">青浦</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='奉贤'? 'active' : ''" data-city="奉贤">奉贤</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='崇明'? 'active' : ''" data-city="崇明">崇明</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='江苏'? 'displayblock' : ''" data-province="江苏">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南京'? 'active' : ''" data-city="南京">南京</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='无锡'? 'active' : ''" data-city="无锡">无锡</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='徐州'? 'active' : ''" data-city="徐州">徐州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='常州'? 'active' : ''" data-city="常州">常州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='苏州'? 'active' : ''" data-city="苏州">苏州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南通'? 'active' : ''" data-city="南通">南通</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='连云港'? 'active' : ''" data-city="连云港">连云港</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='淮安'? 'active' : ''" data-city="淮安">淮安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='盐城'? 'active' : ''" data-city="盐城">盐城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='扬州'? 'active' : ''" data-city="扬州">扬州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='镇江'? 'active' : ''" data-city="镇江">镇江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='泰州'? 'active' : ''" data-city="泰州">泰州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宿迁'? 'active' : ''" data-city="宿迁">宿迁</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='浙江'? 'displayblock' : ''" data-province="浙江">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='杭州'? 'active' : ''" data-city="杭州">杭州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宁波'? 'active' : ''" data-city="宁波">宁波</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='温州'? 'active' : ''" data-city="温州">温州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='嘉兴'? 'active' : ''" data-city="嘉兴">嘉兴</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='湖州'? 'active' : ''" data-city="湖州">湖州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='绍兴'? 'active' : ''" data-city="绍兴">绍兴</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='金华'? 'active' : ''" data-city="金华">金华</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='衢州'? 'active' : ''" data-city="衢州">衢州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='舟山'? 'active' : ''" data-city="舟山">舟山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='台州'? 'active' : ''" data-city="台州">台州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='丽水'? 'active' : ''" data-city="丽水">丽水</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='安徽'? 'displayblock' : ''" data-province="安徽">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='合肥'? 'active' : ''" data-city="合肥">合肥</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='芜湖'? 'active' : ''" data-city="芜湖">芜湖</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='蚌埠'? 'active' : ''" data-city="蚌埠">蚌埠</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='淮南'? 'active' : ''" data-city="淮南">淮南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='马鞍山'? 'active' : ''" data-city="马鞍山">马鞍山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='淮北'? 'active' : ''" data-city="淮北">淮北</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='铜陵'? 'active' : ''" data-city="铜陵">铜陵</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='安庆'? 'active' : ''" data-city="安庆">安庆</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黄山'? 'active' : ''" data-city="黄山">黄山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='滁州'? 'active' : ''" data-city="滁州">滁州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阜阳'? 'active' : ''" data-city="阜阳">阜阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宿州'? 'active' : ''" data-city="宿州">宿州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='六安'? 'active' : ''" data-city="六安">六安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='亳州'? 'active' : ''" data-city="亳州">亳州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='池州'? 'active' : ''" data-city="池州">池州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宣城'? 'active' : ''" data-city="宣城">宣城</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='福建'? 'displayblock' : ''" data-province="福建">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='福州'? 'active' : ''" data-city="福州">福州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='厦门'? 'active' : ''" data-city="厦门">厦门</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='莆田'? 'active' : ''" data-city="莆田">莆田</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='三明'? 'active' : ''" data-city="三明">三明</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='泉州'? 'active' : ''" data-city="泉州">泉州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='漳州'? 'active' : ''" data-city="漳州">漳州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南平'? 'active' : ''" data-city="南平">南平</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='龙岩'? 'active' : ''" data-city="龙岩">龙岩</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宁德'? 'active' : ''" data-city="宁德">宁德</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='江西'? 'displayblock' : ''" data-province="江西">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南昌'? 'active' : ''" data-city="南昌">南昌</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='景德镇'? 'active' : ''" data-city="景德镇">景德镇</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='萍乡'? 'active' : ''" data-city="萍乡">萍乡</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='九江'? 'active' : ''" data-city="九江">九江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='新余'? 'active' : ''" data-city="新余">新余</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='鹰潭'? 'active' : ''" data-city="鹰潭">鹰潭</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='赣州'? 'active' : ''" data-city="赣州">赣州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='吉安'? 'active' : ''" data-city="吉安">吉安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宜春'? 'active' : ''" data-city="宜春">宜春</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='抚州'? 'active' : ''" data-city="抚州">抚州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='上饶'? 'active' : ''" data-city="上饶">上饶</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='山东'? 'displayblock' : ''" data-province="山东">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='济南'? 'active' : ''" data-city="济南">济南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='青岛'? 'active' : ''" data-city="青岛">青岛</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='淄博'? 'active' : ''" data-city="淄博">淄博</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='枣庄'? 'active' : ''" data-city="枣庄">枣庄</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='东营'? 'active' : ''" data-city="东营">东营</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='烟台'? 'active' : ''" data-city="烟台">烟台</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='潍坊'? 'active' : ''" data-city="潍坊">潍坊</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='济宁'? 'active' : ''" data-city="济宁">济宁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='泰安'? 'active' : ''" data-city="泰安">泰安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='威海'? 'active' : ''" data-city="威海">威海</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='日照'? 'active' : ''" data-city="日照">日照</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='莱芜'? 'active' : ''" data-city="莱芜">莱芜</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='临沂'? 'active' : ''" data-city="临沂">临沂</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='德州'? 'active' : ''" data-city="德州">德州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='聊城'? 'active' : ''" data-city="聊城">聊城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='滨州'? 'active' : ''" data-city="滨州">滨州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='菏泽'? 'active' : ''" data-city="菏泽">菏泽</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='河南'? 'displayblock' : ''" data-province="河南">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='郑州'? 'active' : ''" data-city="郑州">郑州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='开封'? 'active' : ''" data-city="开封">开封</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='洛阳'? 'active' : ''" data-city="洛阳">洛阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='平顶山'? 'active' : ''" data-city="平顶山">平顶山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='安阳'? 'active' : ''" data-city="安阳">安阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='鹤壁'? 'active' : ''" data-city="鹤壁">鹤壁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='新乡'? 'active' : ''" data-city="新乡">新乡</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='焦作'? 'active' : ''" data-city="焦作">焦作</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='濮阳'? 'active' : ''" data-city="濮阳">濮阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='许昌'? 'active' : ''" data-city="许昌">许昌</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='漯河'? 'active' : ''" data-city="漯河">漯河</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='三门峡'? 'active' : ''" data-city="三门峡">三门峡</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南阳'? 'active' : ''" data-city="南阳">南阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='商丘'? 'active' : ''" data-city="商丘">商丘</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='信阳'? 'active' : ''" data-city="信阳">信阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='周口'? 'active' : ''" data-city="周口">周口</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='驻马店'? 'active' : ''" data-city="驻马店">驻马店</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='湖北'? 'displayblock' : ''" data-province="湖北">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='武汉'? 'active' : ''" data-city="武汉">武汉</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黄石'? 'active' : ''" data-city="黄石">黄石</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='十堰'? 'active' : ''" data-city="十堰">十堰</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宜昌'? 'active' : ''" data-city="宜昌">宜昌</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='襄阳'? 'active' : ''" data-city="襄阳">襄阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='鄂州'? 'active' : ''" data-city="鄂州">鄂州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='荆门'? 'active' : ''" data-city="荆门">荆门</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='孝感'? 'active' : ''" data-city="孝感">孝感</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='荆州'? 'active' : ''" data-city="荆州">荆州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黄冈'? 'active' : ''" data-city="黄冈">黄冈</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='咸宁'? 'active' : ''" data-city="咸宁">咸宁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='随州'? 'active' : ''" data-city="随州">随州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='恩施'? 'active' : ''" data-city="恩施">恩施</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='湖南'? 'displayblock' : ''" data-province="湖南">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='长沙'? 'active' : ''" data-city="长沙">长沙</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='株洲'? 'active' : ''" data-city="株洲">株洲</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='湘潭'? 'active' : ''" data-city="湘潭">湘潭</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='衡阳'? 'active' : ''" data-city="衡阳">衡阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='邵阳'? 'active' : ''" data-city="邵阳">邵阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='岳阳'? 'active' : ''" data-city="岳阳">岳阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='常德'? 'active' : ''" data-city="常德">常德</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='张家界'? 'active' : ''" data-city="张家界">张家界</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='益阳'? 'active' : ''" data-city="益阳">益阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='郴州'? 'active' : ''" data-city="郴州">郴州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='永州'? 'active' : ''" data-city="永州">永州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='怀化'? 'active' : ''" data-city="怀化">怀化</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='娄底'? 'active' : ''" data-city="娄底">娄底</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='湘西'? 'active' : ''" data-city="湘西">湘西</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='广东'? 'displayblock' : ''" data-province="广东">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='广州'? 'active' : ''" data-city="广州">广州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='韶关'? 'active' : ''" data-city="韶关">韶关</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='深圳'? 'active' : ''" data-city="深圳">深圳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='珠海'? 'active' : ''" data-city="珠海">珠海</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='汕头'? 'active' : ''" data-city="汕头">汕头</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='佛山'? 'active' : ''" data-city="佛山">佛山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='江门'? 'active' : ''" data-city="江门">江门</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='湛江'? 'active' : ''" data-city="湛江">湛江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='茂名'? 'active' : ''" data-city="茂名">茂名</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='肇庆'? 'active' : ''" data-city="肇庆">肇庆</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='惠州'? 'active' : ''" data-city="惠州">惠州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='梅州'? 'active' : ''" data-city="梅州">梅州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='汕尾'? 'active' : ''" data-city="汕尾">汕尾</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='河源'? 'active' : ''" data-city="河源">河源</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阳江'? 'active' : ''" data-city="阳江">阳江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='清远'? 'active' : ''" data-city="清远">清远</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='东莞'? 'active' : ''" data-city="东莞">东莞</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='中山'? 'active' : ''" data-city="中山">中山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='潮州'? 'active' : ''" data-city="潮州">潮州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='揭阳'? 'active' : ''" data-city="揭阳">揭阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='云浮'? 'active' : ''" data-city="云浮">云浮</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='广西'? 'displayblock' : ''" data-province="广西">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南宁'? 'active' : ''" data-city="南宁">南宁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='柳州'? 'active' : ''" data-city="柳州">柳州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='桂林'? 'active' : ''" data-city="桂林">桂林</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='梧州'? 'active' : ''" data-city="梧州">梧州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='北海'? 'active' : ''" data-city="北海">北海</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='防城港'? 'active' : ''" data-city="防城港">防城港</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='钦州'? 'active' : ''" data-city="钦州">钦州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='贵港'? 'active' : ''" data-city="贵港">贵港</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='玉林'? 'active' : ''" data-city="玉林">玉林</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='百色'? 'active' : ''" data-city="百色">百色</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='贺州'? 'active' : ''" data-city="贺州">贺州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='河池'? 'active' : ''" data-city="河池">河池</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='来宾'? 'active' : ''" data-city="来宾">来宾</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='崇左'? 'active' : ''" data-city="崇左">崇左</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='海南'? 'displayblock' : ''" data-province="海南">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='海口'? 'active' : ''" data-city="海口">海口</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='三亚'? 'active' : ''" data-city="三亚">三亚</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='三沙'? 'active' : ''" data-city="三沙">三沙</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='儋州'? 'active' : ''" data-city="儋州">儋州</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='重庆'? 'displayblock' : ''" data-province="重庆">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='万州'? 'active' : ''" data-city="万州">万州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='涪陵'? 'active' : ''" data-city="涪陵">涪陵</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='渝中'? 'active' : ''" data-city="渝中">渝中</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='璧山'? 'active' : ''" data-city="璧山">璧山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='江北'? 'active' : ''" data-city="江北">江北</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='沙坪坝'? 'active' : ''" data-city="沙坪坝">沙坪坝</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='九龙坡'? 'active' : ''" data-city="九龙坡">九龙坡</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南岸'? 'active' : ''" data-city="南岸">南岸</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='北碚'? 'active' : ''" data-city="北碚">北碚</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='綦江'? 'active' : ''" data-city="綦江">綦江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='大足'? 'active' : ''" data-city="大足">大足</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='渝北'? 'active' : ''" data-city="渝北">渝北</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='巴南'? 'active' : ''" data-city="巴南">巴南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黔江'? 'active' : ''" data-city="黔江">黔江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='长寿'? 'active' : ''" data-city="长寿">长寿</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='江津'? 'active' : ''" data-city="江津">江津</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='合川'? 'active' : ''" data-city="合川">合川</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='永川'? 'active' : ''" data-city="永川">永川</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南川'? 'active' : ''" data-city="南川">南川</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='铜梁'? 'active' : ''" data-city="铜梁">铜梁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='潼南'? 'active' : ''" data-city="潼南">潼南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='荣昌'? 'active' : ''" data-city="荣昌">荣昌</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='开州'? 'active' : ''" data-city="开州">开州</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='四川'? 'displayblock' : ''" data-province="四川">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='成都'? 'active' : ''" data-city="成都">成都</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='自贡'? 'active' : ''" data-city="自贡">自贡</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='攀枝花'? 'active' : ''" data-city="攀枝花">攀枝花</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='泸州'? 'active' : ''" data-city="泸州">泸州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='德阳'? 'active' : ''" data-city="德阳">德阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='绵阳'? 'active' : ''" data-city="绵阳">绵阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='广元'? 'active' : ''" data-city="广元">广元</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='遂宁'? 'active' : ''" data-city="遂宁">遂宁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='内江'? 'active' : ''" data-city="内江">内江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='乐山'? 'active' : ''" data-city="乐山">乐山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='南充'? 'active' : ''" data-city="南充">南充</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='眉山'? 'active' : ''" data-city="眉山">眉山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宜宾'? 'active' : ''" data-city="宜宾">宜宾</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='广安'? 'active' : ''" data-city="广安">广安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='达州'? 'active' : ''" data-city="达州">达州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='雅安'? 'active' : ''" data-city="雅安">雅安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='巴中'? 'active' : ''" data-city="巴中">巴中</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='资阳'? 'active' : ''" data-city="资阳">资阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阿坝'? 'active' : ''" data-city="阿坝">阿坝</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='甘孜'? 'active' : ''" data-city="甘孜">甘孜</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='凉山'? 'active' : ''" data-city="凉山">凉山</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='贵州'? 'displayblock' : ''" data-province="贵州">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='贵阳'? 'active' : ''" data-city="贵阳">贵阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='六盘水'? 'active' : ''" data-city="六盘水">六盘水</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='遵义'? 'active' : ''" data-city="遵义">遵义</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='安顺'? 'active' : ''" data-city="安顺">安顺</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='毕节'? 'active' : ''" data-city="毕节">毕节</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='铜仁'? 'active' : ''" data-city="铜仁">铜仁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黔西南州'? 'active' : ''" data-city="黔西南州">黔西南州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黔东南州'? 'active' : ''" data-city="黔东南州">黔东南州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黔南州'? 'active' : ''" data-city="黔南州">黔南州</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='云南'? 'displayblock' : ''" data-province="云南">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='昆明'? 'active' : ''" data-city="昆明">昆明</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='曲靖'? 'active' : ''" data-city="曲靖">曲靖</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='玉溪'? 'active' : ''" data-city="玉溪">玉溪</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='保山'? 'active' : ''" data-city="保山">保山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='昭通'? 'active' : ''" data-city="昭通">昭通</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='丽江'? 'active' : ''" data-city="丽江">丽江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='普洱'? 'active' : ''" data-city="普洱">普洱</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='临沧'? 'active' : ''" data-city="临沧">临沧</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='楚雄'? 'active' : ''" data-city="楚雄">楚雄</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='红河'? 'active' : ''" data-city="红河">红河</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='文山'? 'active' : ''" data-city="文山">文山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='大理'? 'active' : ''" data-city="大理">大理</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='德宏'? 'active' : ''" data-city="德宏">德宏</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='怒江'? 'active' : ''" data-city="怒江">怒江</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='迪庆州'? 'active' : ''" data-city="迪庆州">迪庆州</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='西藏'? 'displayblock' : ''" data-province="西藏">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='拉萨'? 'active' : ''" data-city="拉萨">拉萨</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='日喀则'? 'active' : ''" data-city="日喀则">日喀则</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='昌都'? 'active' : ''" data-city="昌都">昌都</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='林芝'? 'active' : ''" data-city="林芝">林芝</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='山南'? 'active' : ''" data-city="山南">山南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='那曲'? 'active' : ''" data-city="那曲">那曲</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阿里'? 'active' : ''" data-city="阿里">阿里</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='陕西'? 'displayblock' : ''" data-province="陕西">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='西安'? 'active' : ''" data-city="西安">西安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='铜川'? 'active' : ''" data-city="铜川">铜川</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='宝鸡'? 'active' : ''" data-city="宝鸡">宝鸡</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='咸阳'? 'active' : ''" data-city="咸阳">咸阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='渭南'? 'active' : ''" data-city="渭南">渭南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='延安'? 'active' : ''" data-city="延安">延安</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='汉中'? 'active' : ''" data-city="汉中">汉中</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='榆林'? 'active' : ''" data-city="榆林">榆林</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='安康'? 'active' : ''" data-city="安康">安康</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='商洛'? 'active' : ''" data-city="商洛">商洛</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='甘肃'? 'displayblock' : ''" data-province="甘肃">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='兰州'? 'active' : ''" data-city="兰州">兰州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='嘉峪关'? 'active' : ''" data-city="嘉峪关">嘉峪关</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='金昌'? 'active' : ''" data-city="金昌">金昌</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='白银'? 'active' : ''" data-city="白银">白银</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='天水'? 'active' : ''" data-city="天水">天水</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='武威'? 'active' : ''" data-city="武威">武威</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='张掖'? 'active' : ''" data-city="张掖">张掖</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='平凉'? 'active' : ''" data-city="平凉">平凉</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='酒泉'? 'active' : ''" data-city="酒泉">酒泉</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='庆阳'? 'active' : ''" data-city="庆阳">庆阳</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='定西'? 'active' : ''" data-city="定西">定西</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='陇南'? 'active' : ''" data-city="陇南">陇南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='临夏'? 'active' : ''" data-city="临夏">临夏</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='甘南'? 'active' : ''" data-city="甘南">甘南</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='青海'? 'displayblock' : ''" data-province="青海">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='西宁'? 'active' : ''" data-city="西宁">西宁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='海东'? 'active' : ''" data-city="海东">海东</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='海北'? 'active' : ''" data-city="海北">海北</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='黄南'? 'active' : ''" data-city="黄南">黄南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='海南'? 'active' : ''" data-city="海南">海南</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='果洛州'? 'active' : ''" data-city="果洛州">果洛州</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='玉树'? 'active' : ''" data-city="玉树">玉树</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='海西'? 'active' : ''" data-city="海西">海西</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='宁夏'? 'displayblock' : ''" data-province="宁夏">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='银川'? 'active' : ''" data-city="银川">银川</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='石嘴山'? 'active' : ''" data-city="石嘴山">石嘴山</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='吴忠'? 'active' : ''" data-city="吴忠">吴忠</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='固原'? 'active' : ''" data-city="固原">固原</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='中卫'? 'active' : ''" data-city="中卫">中卫</li>
                </ul>
                <ul class="city-right js-city-right" :class="provice==='新疆'? 'displayblock' : ''" data-province="新疆">
                    <li class="l-r-item list-item js-right-list-item" :class="city==='全部'? 'active' : ''" data-city="全部">全部</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='乌鲁木齐'? 'active' : ''" data-city="乌鲁木齐">乌鲁木齐</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='克拉玛依'? 'active' : ''" data-city="克拉玛依">克拉玛依</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='吐鲁番'? 'active' : ''" data-city="吐鲁番">吐鲁番</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='哈密'? 'active' : ''" data-city="哈密">哈密</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='昌吉'? 'active' : ''" data-city="昌吉">昌吉</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='博尔塔拉'? 'active' : ''" data-city="博尔塔拉">博尔塔拉</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='巴音郭楞'? 'active' : ''" data-city="巴音郭楞">巴音郭楞</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阿克苏'? 'active' : ''" data-city="阿克苏">阿克苏</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='克孜勒苏'? 'active' : ''" data-city="克孜勒苏">克孜勒苏</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='喀什'? 'active' : ''" data-city="喀什">喀什</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='和田'? 'active' : ''" data-city="和田">和田</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='伊犁'? 'active' : ''" data-city="伊犁">伊犁</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='塔城'? 'active' : ''" data-city="塔城">塔城</li>
                    <li class="l-r-item list-item js-right-list-item" :class="city==='阿勒泰'? 'active' : ''" data-city="阿勒泰">阿勒泰</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    data() {
        return {
           isdis :'displayblock',
           provice : '',
           city : ''
        }
    },
    computed:{
        zhongdian(){
            return {
                active : this.provice === '重点地区'
            }
        },
        beijing(){
            return {
                active : this.provice === '北京'
            }
        },
        tianjin(){
            return {
                active : this.provice === '天津'
            }
        },
        hebei(){
            return {
                active : this.provice === '河北'
            }
        },
        shanxi(){
            return {
                active : this.provice === '山西'
            }
        },
        neimenggu(){
            return {
                active : this.provice === '内蒙古'
            }
        },
        liaoning(){
            return {
                active : this.provice === '辽宁'
            }
        },
        jilin(){
            return {
                active : this.provice === '吉林'
            }
        },
        heilongjiang(){
            return {
                active : this.provice === '黑龙江'
            }
        },
        shanghai(){
            return {
                active : this.provice === '上海'
            }
        },
        jiangsu(){
            return {
                active : this.provice === '江苏'
            }
        },
        zhejiang(){
            return {
                active : this.provice === '浙江'
            }
        },
        anhui(){
            return {
                active : this.provice === '安徽'
            }
        },
        fujian(){
            return {
                active : this.provice === '福建'
            }
        },
        jiangxi(){
            return {
                active : this.provice === '江西'
            }
        },
        shandong(){
            return {
                active : this.provice === '山东'
            }
        },
        henan(){
            return {
                active : this.provice === '河南'
            }
        },
        hubei(){
            return {
                active : this.provice === '湖北'
            }
        },
        hunan(){
            return {
                active : this.provice === '湖南'
            }
        },
        guangdong(){
            return {
                active : this.provice === '广东'
            }
        },
        guangxi(){
            return {
                active : this.provice === '广西'
            }
        },
        hainan(){
            return {
                active : this.provice === '海南'
            }
        },
        chongqing(){
            return {
                active : this.provice === '重庆'
            }
        },
        sichuan(){
            return {
                active : this.provice === '四川'
            }
        },
        guizhou(){
            return {
                active : this.provice === '贵州'
            }
        },
        yunnan(){
            return {
                active : this.provice === '云南'
            }
        },
        xizang(){
            return {
                active : this.provice === '西藏'
            }
        },
        shanshanxi(){
            return {
                active : this.provice === '陕西'
            }
        },
        gansu(){
            return {
                active : this.provice === '甘肃'
            }
        },
        qinghai(){
            return {
                active : this.provice === '青海'
            }
        },
        ningxia(){
            return {
                active : this.provice === '宁夏'
            }
        },
        xinjiang(){
            return {
                active : this.provice === '新疆'
            }
        },
    },
    methods:{
        handleClick(){
            this.$emit('city')
        },
        handleProvice(ev){
            this.provice = ev.target.attributes['data-province']['nodeValue']
        },
        handleCity(ev){
            this.city = ev.target.attributes['data-city']['nodeValue']
            this.$emit('getcity',this.provice,this.city)
            this.handleClick()
            this.$router.push('/home/depart/zonghe/'+ Math.random()*10)
        }
   
    },
    updated(){
        
        
    },
//生命周期 - 创建完成（访问当前this实例）
    created() {

    },
//生命周期 - 挂载完成（访问DOM元素）
    mounted(){
        new BetterScroll('.js-right-win',{
            click:true,
        })
        new BetterScroll('.js-left-win',{
            click:true,
        })
    },
}
</script>
<style scoped lang="stylus">
#displaynone
    display none
#displayblock
    display block
</style>