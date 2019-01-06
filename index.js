window.onload = function() {
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function() {
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 152){
			cover.style.position = 'fixed';
		}else{
			cover.style.position = 'static';
		}
	}
}
//充值显示
var select = document.getElementById('select');
var button = document.getElementsByClassName('button');
var money = document.getElementsByClassName('money');
button[0].onclick = function () {
money[1].innerHTML = "￥"+select.value;
}
//轮播图
var banner = document.getElementById('banner');
var oNavlist = document.getElementById('dot').children;
var slider = document.getElementById('slider');
var left = document.getElementById('leftarrow');
var right = document.getElementById('rightarrow');
var index = 1;
var timer;
var isMoving = false;
banner.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
banner.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-5600px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index > 6){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next,3000);

//右侧公告滚动
var index1 = 0;
var isMoving1 = false;
var glide = document.getElementById('glide');
var notice = document.getElementById('notice');
function glideNotice(){
	if(isMoving1){
		return;
	}
	isMoving1 = true;
	index1++;
	animate(glide,{top:-21*index1},function(){
		if(index1 == 14){
			glide.style.top = '0';
			index1 = 1;
		}
		isMoving1 = false;
	});
}		
var timer1 = setInterval(glideNotice,1000);
notice.onmouseover = function () {
	clearInterval(timer1);
}
notice.onmouseout = function () {
	timer1 = setInterval(glideNotice,1000);
}

//右侧图标
var smallBox = document.getElementById('smallBox');
var li = smallBox.children;
var hidden = document.getElementById('hidden');
for( var i=0; i < part.length; i++ ){
	(function(i){
		li[i].onmouseover = function(){
			// this.style.marginRight = '0';
			animate(this,{right:0});
		}
		if(i == 4)
			hidden.style.display = 'block';
	})(i);
}
for( var i=0; i < part.length; i++ ){
	(function(i){
		li[i].onmouseout = function(){
			animate(this,{right:-85});
		}
	})(i);
}