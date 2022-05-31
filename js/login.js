
var zhang=document.getElementById('zhang');
// console.log(zhang);
zhang.className = 'botstyle';
var duan=document.getElementById('duan');

zhang.ontouchstart =function(){
    zhang.className = 'botstyle'
    duan.className = 'none'
}
duan.ontouchstart =function(){
    duan.className = 'botstyle'
    zhang.className = 'none'
}
// 手机验证
var  sjyz=document.getElementById('sjyz');
// console.log(phone.value.length);
var str = /^1[3-9][0-9]{9}$/
sjyz.onblur = function(){
    if(sjyz.value.length != 0 ){
       if(str.test(sjyz.value)){
        // alert('手机号正确')
       }else{
           alert('手机号错误');
       }
    }else{
        alert('手机号不能为空');
    }
}

var pass = document.getElementById('pass');
// console.log(pass);
var pass_a = /^[a-z0-9]{6,8}$/i;

// if()