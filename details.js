//图片选择
var sp0 = document.getElementById('sp0');
var sp1 = document.getElementById('sp1');
var p0 = document.getElementById('p0');
sp1.onmouseover = function () {
	this.style.border = "orange solid 2px";
	p0.style.background = "url(img/pp1.jpeg) center left";
	sp0.style.border = "none";
}
// sp1.onmouseout = function () {
// 	this.style.border = "none";
// }
sp0.onmouseover = function () {	
	this.style.border = "orange solid 2px";
	p0.style.background = "url(img/pp0.jpeg) center left";
	sp1.style.border = "none";
}
// sp0.onmouseout = function () {
// 	this.style.border = "none";
// }
//购买数量选择
var choose = document.getElementById('choose');
var token = document.getElementsByClassName('token');
token[1].onclick = function () {	
	if(num.value < 5){
		num.value++;
	}
}
token[0].onclick = function () {	
	if(num.value > 1){
		num.value--;
	}
}
token[0].onmouseover = function () {
	if(num.value ==1){
		this.style = "cursor:not-allowed";
	}
	else{
		this.style = "cursor:pointer";
	}
}
token[1].onmouseover = function () {
	if(num.value == 5){
		this.style = "cursor:not-allowed";
	}
	else{
		this.style = "cursor:pointer";
	}
}

//容量选择
var redBorder = document.getElementsByClassName('redBorder');
var capacity = document.getElementById('capacity');
redBorder[0].onclick = function () {
	this.style.border = "red solid 1px";
	this.style.background = "url(img/duigou.png) bottom right no-repeat";
	capacity.innerHTML = "\'"+this.innerHTML+"\'";
	redBorder[1].style.border = "none";
	redBorder[1].style.background = "none";

}	
redBorder[1].onclick = function () {
	this.style.border = "red solid 1px";
	this.style.background = "url(img/duigou.png) bottom right no-repeat";
	capacity.innerHTML = "\'"+this.innerHTML+"\'";
	redBorder[0].style.border = "none";
	redBorder[0].style.background = "none";
}	
	

//点击加入购物车
var button2 = document.getElementById('button2');
var alertBox = document.getElementById('alertBox');
var innerbox = document.getElementById('innerbox');
var close = document.getElementById('close');
button2.onclick = function () {
	alertBox.style.display = 'block';
	innerbox.style.display = 'block';
}
close.onclick = function () {
	alertBox.style.display = 'none';
	innerbox.style.display = 'none';
}


//放大镜效果
var p0 = document.getElementById('p0');
var smallSlider = document.getElementById('smallSlider');
var bigPp0 = document.getElementById('bigPp0');
var bigPp1 = document.getElementById('bigPp1');
var bigP0 = document.getElementById('bigP0');
var background1 = 'url("img/pp0.jpeg") left center';
var background2 = 'url("img/pp1.jpeg") left center';
p0.onmouseover = function () {
	bigP0.style.display = 'block';
	bigPp0.style.display = 'block';
  	smallSlider.style.display = "block";
  	if(p0.style.background == background2){  		
  		bigPp1.style.display = "block";
  		bigPp0.style.display = "none";
  	}
  	else{
  		bigPp0.style.display = "block";
  		bigPp1.style.display = "none";
  	}

}
p0.onmouseout = function () {
	bigP0.style.display = 'none';
	smallSlider.style.display = "none";
}

p0.onmousemove = function (e) {
	var e = e || window.event;
	var left = e.clientX - 89 - smallSlider.offsetWidth/2;  //画图找到要求的位置,鼠标当前距离浏览器的距离-box距离浏览器的距离-放大镜的一半，从左上角入手
	var top = e.clientY - 100- smallSlider.offsetHeight/2;
	var maxLeft = p0.offsetWidth - smallSlider.offsetWidth;
 	var maxTop = p0.offsetHeight - smallSlider.offsetHeight;
	left = left > maxLeft?maxLeft:left<0?0:left;  //如果left超出右边界则返回max以保证max <= max ,max >=0
	top = top > maxTop? maxTop: top<0?0:top;
	//2.设置放大镜的位置
	smallSlider.style.left =  left + "px"; //由于style.left可读可写，offsetLeft只读，但是style.left设置时要有单位
	smallSlider.style.top = top + "px";
	//3.根据左侧放大镜位置，计算右侧大图的移动比例
	var w = left / maxLeft;  //当前位置/极限距离  -- 计算左侧放大镜移动的比例
	var h = top / maxTop;  //通过此比例联系左右
	//计算大图的最大移动范围
	if(bigPp1.style.display == 'block'){		
	  	var BimgLeft = bigP0.offsetWidth/2 - bigPp1.offsetWidth;
		var BimgTop = bigP0.offsetHeight/2 - bigPp1.offsetHeight;
		//计算大图的移动距离，并设置位置
		bigPp1.style.left = w*BimgLeft + "px";
		bigPp1.style.top = h*BimgTop + "px";
	}
	else{
		var BimgLeft = bigP0.offsetWidth - bigPp0.offsetWidth;
		var BimgTop = bigP0.offsetHeight - bigPp0.offsetHeight;
		//计算大图的移动距离，并设置位置
	  	bigPp0.style.left = w*BimgLeft + "px";
	  	bigPp0.style.top = h*BimgTop + "px";
	}
}
