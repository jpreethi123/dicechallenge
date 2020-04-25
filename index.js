function fun1(){
    alert("wqjkh");
var rn1=Math.random();
rn1=Math.floor(rn1*6)+1;
var img1= "pic" + rn1 + ".png";
var dis1= document.querySelectorAll("img")[0];
dis1.setAttribute("src",img1);
}

function fun2()
{
var rn2=Math.random();
rn2=Math.floor(rn2*6)+1;
var img2= "pic" + rn2 + ".png";
var dis2= document.querySelectorAll("img")[1];
dis2.setAttribute("src",img2);
}

var win=document.querySelectorAll("h1")[2];

if(rn1>rn2)
win.innerHTML="player1 wins";
else if(rn1<rn2)
win.innerHTML="player2 wins";
else
win.innerHTML="draw";