/**
 * Created by 联想 on 2017/2/21.
 */
var blow = document.querySelector(".in")
var index = 0,imgIndex = 0,z = 1000;
var arr = ['../images/banner1.jpg','../images/banner2.jpg','../images/banner3.jpg','../images/banner4.jpg','../images/banner5.jpg'];
fly();
function fly() {
    var w = 8;
    var h = 5;
    var news = document.createElement('div');news.id = 'new' + index;
    news.style.zIndex = z;
    z--;
    index++;
    if (imgIndex == arr.length)imgIndex = 0;
    blow.appendChild(news);
    for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
            var oDiv = document.createElement('div');
            oDiv.style.width = blow.offsetWidth / w + 'px';
            oDiv.style.height = blow.offsetHeight / h + 'px';
            oDiv.style.float = 'left';
            oDiv.style.background = 'url(' + arr[imgIndex] + ')';
            oDiv.style.backgroundPositionX = -j * (blow.offsetWidth / w) + 'px';
            oDiv.style.backgroundPositionY = -i * (blow.offsetHeight / h) + 'px';
            oDiv.style.transition = '2s .5s';
            oDiv.style.backgroundSize=blow.offsetWidth+'px'+' '+blow.offsetHeight+'px';

            document.getElementById('new' + (index - 1)).appendChild(oDiv);
        }
    }
    imgIndex++; //换底图
    function random(min, max) {
        return parseInt(min + Math.random() * (max - min));
    }
    blow.onclick = function () {
        var onAll = document.getElementById('new' + (index - 1)).children;
        for (var i = 0; i < onAll.length; i++) {
            onAll[i].style.transform = 'perspective(800px)' +
                ' rotateX(' + random(-270, 270) + 'deg) rotateY(' + random(-270, 270) + 'deg)  ' +
                'translateX(' + random(-400, 400) + 'px) translateY(' + random(-400, 400) + 'px)';
            onAll[i].style.opacity = 0;
        }
        fly();
        //删除第一个 在现在的div后面加1个
        setTimeout(function () {
            blow.removeChild(blow.children[0])
        }, 2000);
    }
}


//gtl
$(function() {
                //首页登陆：
                $(".login-btn").click(function() {
                    $(".mask").css("display","block");
                    $(".register-with").css("display","none");
                    $(".login-with").css("display","block");
                });
                //首页注册：
                $(".register-btn").click(function() {
                    $(".mask").css("display","block");
                    $(".login-with").css("display","none");
                    $(".register-with").css("display","block");
                });
                
                //登陆按钮：
                $(".login-in").click(function() {
                    var user = $(".username").val();
                    var pas = $(".password").val();
                    if(user == "" || pas == "") {
                        $(".error").css("display","block");
                    } else {
                        //ajax请求:
                    }
                });
                //注册按钮：
                $(".register-in").click(function() {
                    var user = $(".register-username").val();
                    var pas = $(".register-password").val();
                    var rep = $(".repeat-password").val();
                    if(user == "" || pas == "" || rep == "") {
                        $(".error").css("display","block");
                    } else {
                        //ajax请求:
                    }
                });
                
                //close:
                $(".close").click(function() {
                    $(".mask").css("display","none");
                    $(".error").css("display","none");
                });
                
                //在登陆页面跳转到注册：
                $(".create_").click(function() {
                    $(".login-with").css("display","none");
                    $(".register-with").css("display","block");
                    $(".error").css("display","none");
                });
                //在注册页面跳转到登陆：
                $(".login_").click(function() {
                    $(".register-with").css("display","none");
                    $(".login-with").css("display","block");
                    $(".error").css("display","none");
                });
                
                
            });

//publish

$(".publish").click(function(){
    $(".syb_Bbox").css("display","block")
})
//all
var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay:1500
      })    


      var qld_gengduo=document.querySelector('.qld_gengduo');//
      var qdl_banner_right_text=document.querySelector('.qdl_banner_right_text');//
      var on=true;
      qld_gengduo.onclick=function(){//
        if(on){
            qdl_banner_right_text.style.height='auto';
            
            this.innerText='收起>>';
            on=false;
        }else{
            qdl_banner_right_text.style.height='75px';
            this.innerText='显示全文>>';
            on=true;
        }
        
      }

//-----

//send
// var _txt=$(".content").val()
$(".qdl_button").click(function(){
// if(_txt.length<=1){
//     var AlertBox=$(".wym_alertBox")
//     AlertBox.html("要发送有价值的邮件喔~")
//     AlertBox.css("display","block")
//     setTimeout(function(){
//           AlertBox.css("display","none")
//     },1500)
// }else{
    var AlertBox=$(".wym_alertBox")
    AlertBox.html("我们收到邮件后会为您处理喔(⊙o⊙)~")
    AlertBox.css("display","block")
    setTimeout(function(){
          AlertBox.css("display","none")
    },1500)
//}
})
