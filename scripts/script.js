// JavaScript Document
console.log("hi");

var buttonEl = document.querySelector("header nav button");
var navSec = document.querySelector("header nav section");

var HWbut = document.querySelector("footer button");
var imgEl = document.querySelector("main section div img");

var plusButton = document.querySelector("header nav div button:nth-of-type(2)");
var minButton = document.querySelector("header nav div button:nth-of-type(3)");



let toggle = true;


function TMenu () {
    buttonEl.classList.toggle("iconchange");
    navSec.classList.toggle("MenuOpen");
}

buttonEl.addEventListener("click", TMenu);

navSec.addEventListener('keydown', (evt) => {
    if (evt.key == "Tab") {
        if (navSec.classList.contains("MenuOpen")) {
            setTimeout(function(){ 
                if (navSec.querySelectorAll(":focus").length == 0) {
                    navSec.classList.remove("MenuOpen");
                }
            }, 30);
        }
    }
});
// Met behulp van Sanne

function Halloween () {
    toggle = !toggle ;
    if(toggle){
        imgEl.src = 'images/Starbucks-Logo.png';
    }else{
        imgEl.src = 'images/halloween.png'
        // https://imgbin.com/png/ewuA9eQ6/silhouette-starbucks-logo-drawing-png
    }
}
// https://www.youtube.com/watch?v=ydeQbbF9jbw

HWbut.addEventListener("click", Halloween);

function fontChangeplus() {
    document.documentElement.classList.add("groot");
}

function fontChangemin() {
    document.documentElement.classList.remove("groot");
}

plusButton.addEventListener("click",fontChangeplus);
minButton.addEventListener("click",fontChangemin);

