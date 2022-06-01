


// 验证码倒计时
var yzm = document.getElementById('yzm');
yzm.ontouchstart=function(){
    clearTimeout(set);
    var ind = 60;
    var set = setInterval(function(){
        ind--
        yzm.innerHTML ='('+ ind +')'+'秒后获取'
        if(ind<1){
            clearTimeout(set)
            yzm.innerHTML ='点击获取'
        }
        if(ind==57){
            alert('9527')
        }
    },1000)
}


    // 手机号验证
    var phone =document.getElementById('phone');
    // console.log(phone.value.length);
    var str = /^1[3-9][0-9]{9}$/
    phone.onblur = function(){
        if(phone.value.length != 0 ){
           if(str.test(phone.value)){
            // alert('手机号正确')
           }else{
               alert('手机号错误')
           }
        }else{
            alert('手机号不能为空')
        }
    }


    // 请输入短信中的验证码

    var qdyzm=document.getElementById('qdyzm');

    qdyzm.onblur =function(){
        if(qdyzm.value.length!=0){
            if(qdyzm.value=='9527'){

            }else{
                alert('验证码错误')
            }
        }else{
            alert('验证码不能为空')
        }
    }


    // 请输入新密码
    var xinpass=document.getElementById('xinpass');
    var xinstr=/^[a-z0-9]{6,8}$/i
    xinpass.onblur = function(){
        if(xinpass.value.length!=0){
            if(xinstr.test(xinpass.value)){

            }else{
                alert('密码错误')
            }
        }else{
            alert('密码不能为空')
        }
    }
// 请确定新密码
    var qrpass= document.getElementById('qrpass');
    qrpass.onblur = function(){
       if(qrpass.value.length!=0){
        if(qrpass.value==xinpass.value){
            
        }else{
            alert('两次密码不同')
        }
       }else{
        alert('请确认密码')
       }
    }

    // 提交

    var but=document.getElementById('but');
    but.ontouchstart =function(){
        if(str.test(phone.value)&&qdyzm.value=='9527'&&xinstr.test(xinpass.value)&&qrpass.value==xinpass.value){

        }else{
            alert('注册失败 请重新注册')
        }
    }