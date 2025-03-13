const bar =document.querySelector('#bar');
const nav = document.querySelector('#navbar');
const close =document.querySelector('#close');

if(bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if(close) {
   close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}

var mainimg= document.querySelector('#mainimg');
var smallimg = document.querySelectorAll('.small-img');

smallimg[0].onclick = function(){
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
    mainimg.src = smallimg[2].src;
}

smallimg[3].onclick = function(){
    mainimg.src = smallimg[3].src;
}
