(()=>{"use strict";document.getElementById("colorChangeButton").addEventListener("click",(function(){return function(){var t,e,n=function(){for(var t="#",e=0;e<6;e+=1)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}(),r=(e=3===(e="#"===(t=n).slice(0,1)?t.slice(1):t).length?e.split("").map((function(t){return t+t})).join(""):e,(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF");document.querySelector("header").style.color=n;var o=document.getElementById("colorChangeButton");o.style.color=n,o.style.backgroundColor=r}()}))})();