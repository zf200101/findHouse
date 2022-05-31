

var login_ul1 = document.getElementsByClassName('login_ul1')[0].children;
console.log(login_ul1[0]);
login_ul1[0].ontouchstart = function(){
    console.log('aaaa');
    window.location.href = "../rentaiList.html"
}

var log_in=document.getElementById('log_in');
log_in.ontouchstart =function(){
    window.location.href = "../login.html"
}