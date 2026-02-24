// الوضع الليلي فقط

function toggleMode(){
let body=document.body;
let icon=document.getElementById("modeIcon");

if(body.classList.contains("dark")){
body.classList.replace("dark","light");
if(icon) icon.classList.replace("bi-moon","bi-sun");
localStorage.setItem("mode","light");
}else{
body.classList.replace("light","dark");
if(icon) icon.classList.replace("bi-sun","bi-moon");
localStorage.setItem("mode","dark");
}
}

function toggleSidebar(){
let sidebar=document.getElementById("sidebar");
let content=document.getElementById("content");

if(sidebar) sidebar.classList.toggle("collapsed");
if(content) content.classList.toggle("full");
}

window.onload=function(){
if(localStorage.getItem("mode")==="light"){
document.body.classList.replace("dark","light");
let icon=document.getElementById("modeIcon");
if(icon) icon.classList.replace("bi-moon","bi-sun");
}
}
