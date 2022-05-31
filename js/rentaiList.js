var address_one=document.getElementById('address_one');
var span_one=document.getElementById('span_one');
var body=document.getElementsByTagName('body')[0];
var address=document.getElementById('address');
var moban=document.getElementById('moban');
address_one.addEventListener('click',function(){
    address_one.style.color='orange'
    span_one.style.borderBottom='5px solid red'
    span_one.style.borderTop='5px solid white'
    span_one.style.marginTop='-15px'
    body.style.backgroundColor=''
    moban.style.display='block'
})