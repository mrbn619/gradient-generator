var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var css=document.querySelector('h3');
var body=document.getElementById('gradient');
var random=document.getElementById('Random');
var auto=document.getElementById('Auto');
var stop=document.getElementById('Stop');
body.style.background = sessionStorage.getItem('newGradient');
color1.value=sessionStorage.getItem('newcolor1');
color2.value=sessionStorage.getItem('newcolor2');

function setGradient(){
	body.style.background=
	'linear-gradient(to right,' 
	+ color1.value
	+ ', ' 
	+ color2.value 
	+ ')';
	css.textContent=body.style.background; +';'//or css.innerText
	sessionStorage.setItem('newGradient',css.textContent);
	sessionStorage.setItem('newcolor1',color1.value);
	sessionStorage.setItem('newcolor2',color2.value);
}

function randomColor(){
	var newcolor='#'+(Math.random()* 0xFFFFFF << 0).toString(16);
	return newcolor
}

function randomGradient(){
	color1.value= randomColor();
	color2.value= randomColor();
	setGradient();

}

var a=color1.addEventListener('input',setGradient);

color2.addEventListener('input',setGradient);

random.addEventListener('click',randomGradient);

auto.addEventListener('click',function(){
	interval=setInterval(randomGradient,1300)

});

stop.onclick=function(){
	clearInterval(interval);
}


