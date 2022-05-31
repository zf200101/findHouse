var address_one=document.getElementById('address_one');
var span_one=document.getElementById('span_one');
address_one.addEventListener('click',function(){
    address_one.style.color='orange'
    span_one.style.borderBottom='5px solid red'
    span_one.style.borderTop='5px solid white'
    span_one.style.marginTop='-15px'
})