
var zhang=document.getElementById('zhang');
var login_zhang =document.getElementsByClassName('login_zhang')[0];
// console.log(zhang);
zhang.className = 'botstyle';
login_zhang.style.display = 'block'
var duan=document.getElementById('duan');
var  login_duan =document.getElementsByClassName('login_duan')[0];

zhang.ontouchstart =function(){
    zhang.className = 'botstyle'
    duan.className = 'none'
    login_zhang.style.display = 'block'
    login_duan.style.display = 'none'
}
duan.ontouchstart =function(){
    duan.className = 'botstyle'
    zhang.className = 'none'
    login_zhang.style.display = 'none'
    login_duan.style.display = 'block'
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
