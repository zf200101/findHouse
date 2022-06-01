var mylog_ul= document.getElementsByClassName('mylog_ul')[0].children;
// console.log(mylog_ul);

mylog_ul[0].ontouchstart =function(){
    window.location.href ="./rentaiList.html"
}
mylog_ul[1].ontouchstart =function(){
    window.location.href ="./register.html"
}

var tc = document.getElementsByClassName('tc')[0];
var hyn = document.getElementById('hyn');
console.log(hyn);
tc.ontouchstart = function(){
    alert('确定退出账户吗')
    hyn.innerHTML='登录'
}