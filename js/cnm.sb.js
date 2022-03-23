// 调用一次
gethtmlfontsize();
// 添加监听事件(resize是监听的意思)
window.addEventListener('resize', gethtmlfontsize);

function gethtmlfontsize() {
    // 三个步骤:
    // 1.获取html的宽,
    //有些浏览器documentEleme获取不nt到,那就使用后面的body
    let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
    // 2.htmlDom
    let htmlDom = document.getElementsByTagName("html")[0]
    //3.设置根元素样式
    htmlDom.style.fontSize = htmlwidth / 10 + 'px';
}

// 按钮切换页面功能代码
$(function () {
    $('div.left > ul > li:nth-child(2)').addClass('l-btn-active');
})

function CNMSBshowDetails(this_, i) {
    $(this_).addClass('l-btn-active').siblings().removeClass('l-btn-active')
    $('.items-box:eq(' + i + ')').removeClass('cnmsb').siblings().addClass('cnmsb')
    if (parseInt(i) >= 20) {
        alert('以下界面正在开发中……有问题请邮件联系站长 admin@cnm.sb')
    }
}

// 屏幕宽大于高，显示id为cnmsb的div盒子里的内容
$(document).ready(function () {
    if (window.screen.width > window.screen.height) {
        $("#cnmsb").show();
    } else {
        $("#cnmsb").hide();
    }
})

//版权输出到控制台
console.log("\n %c 一个简约好看的双栏单页源码(Date:2022.03.17)，版权所有:超耐磨水笔工作室(CNM.SB) %c https://cnm.sb \n\n",
    "color: ##725b45; background: #0499ff; border-radius: 8px 0 0 8px; padding:5px 0;", "background: #609353; border-radius: 0 8px 8px 0; padding: 5px 0;")
console.log("\n %c 网站源码，仅供学习，禁止商用 %c 开源不易，转载还请保留版权信息 \n\n",
    "color: ##725b45; background: #0499ff; border-radius: 8px 0 0 8px; padding:5px 0;", "background: #609353; border-radius: 0 8px 8px 0; padding: 5px 0;")
