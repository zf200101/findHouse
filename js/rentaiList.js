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
var address_two=document.getElementById('address_two');
var address_thr=document.getElementById('address_thr');
var address_four=document.getElementById('address_four');

address_two.addEventListener('click',function(){
    body.style.backgroundColor=''
    moban.style.display='block'
})

address_thr.addEventListener('click',function(){
    body.style.backgroundColor=''
    moban.style.display='block'
})

address_four.addEventListener('click',function(){
    body.style.backgroundColor=''
    moban.style.display='block'
})












var toper_one=document.getElementById('toper_one');
var toper_two=document.getElementById('toper_two');
var toper_thr=document.getElementById('toper_thr');
var toper_four=document.getElementById('toper_four');

var toperspan_one=document.getElementById('toperspan_one');
var toperspan_two=document.getElementById('toperspan_two');
var toperspan_thr=document.getElementById('toperspan_thr');
var toperspan_four=document.getElementById('toperspan_four');


var toptwo=document.getElementById('toptwo');
var top_mon=document.getElementById('top_mon');
var top_house=document.getElementById('top_house');

toper_one.onclick=function(){
    toper_one.style.color='orange';
    toper_two.style.color='black';
    toper_thr.style.color='black';
    toper_four.style.color='black';
    toperspan_one.style.borderTop='5px solid white';
    toperspan_one.style.borderBottom='5px solid orange';
    toperspan_two.style.borderTop='5px solid black';
    toperspan_two.style.borderBottom='5px solid white';
    toperspan_thr.style.borderTop='5px solid black';
    toperspan_thr.style.borderBottom='5px solid white';
    toperspan_four.style.borderTop='5px solid black';
    toperspan_four.style.borderBottom='5px solid white';
    toptwo.style.display='block';
    top_mon.style.display='none';
    top_house.style.display='none';
}

toper_two.onclick=function(){
    toper_one.style.color='black';
    toper_thr.style.color='black';
    toper_four.style.color='black';
    toper_two.style.color='orange';
    toperspan_one.style.borderTop='5px solid black';
    toperspan_one.style.borderBottom='5px solid white';
    toperspan_two.style.borderTop='5px solid white';
    toperspan_two.style.borderBottom='5px solid orange';
    toperspan_thr.style.borderTop='5px solid black';
    toperspan_thr.style.borderBottom='5px solid white';
    toperspan_four.style.borderTop='5px solid black';
    toperspan_four.style.borderBottom='5px solid white';
    toptwo.style.display='none';
    top_mon.style.display='block';
    top_house.style.display='none';
}


toper_thr.onclick=function(){
    toper_one.style.color='black';
    toper_thr.style.color='orange';
    toper_four.style.color='black';
    toper_two.style.color='black';
    toperspan_one.style.borderTop='5px solid black';
    toperspan_one.style.borderBottom='5px solid white';
    toperspan_two.style.borderTop='5px solid black';
    toperspan_two.style.borderBottom='5px solid white';
    toperspan_thr.style.borderTop='5px solid white';
    toperspan_thr.style.borderBottom='5px solid orange';
    toperspan_four.style.borderTop='5px solid black';
    toperspan_four.style.borderBottom='5px solid white';
    toptwo.style.display='none';
    top_mon.style.display='none';
    top_house.style.display='block';
}

toper_four.onclick=function(){
    toper_one.style.color='black';
    toper_thr.style.color='black';
    toper_four.style.color='orange';
    toper_two.style.color='black';
    toperspan_one.style.borderTop='5px solid black';
    toperspan_one.style.borderBottom='5px solid white';
    toperspan_two.style.borderTop='5px solid black';
    toperspan_two.style.borderBottom='5px solid white';
    toperspan_thr.style.borderTop='5px solid black';
    toperspan_thr.style.borderBottom='5px solid white';
    toperspan_four.style.borderTop='5px solid white';
    toperspan_four.style.borderBottom='5px solid orange';
}


var p_left=document.getElementById('p_left');
var p_right=document.getElementById('p_right');
var top_er=document.getElementById('top_er');
var toptwo_right=document.getElementById('toptwo_right');
p_left.onclick=function(){
    p_left.style.color='orange';
    p_left.style.backgroundColor='white'
    p_right.style.color='black';
    p_right.style.backgroundColor='#F0F0F0';
    toptwo_right.style.display='block';
    top_er.style.display='none';
}

p_right.onclick=function(){
    p_right.style.color='orange';
    p_right.style.backgroundColor='white'
    p_left.style.color='black';
    p_left.style.backgroundColor='#F0F0F0';
    toptwo_right.style.display='none';
    top_er.style.display='block';
}










var down=document.getElementById('down');

down.onclick=function(){
    moban.style.display='none'
}























