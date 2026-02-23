document.addEventListener("DOMContentLoaded",function(){

const sidebar=document.getElementById("sidebar");
const overlay=document.getElementById("overlay");
const loader=document.querySelector(".loader");

/* ===== Loader ===== */
setTimeout(()=>{
if(loader) loader.style.display="none";
},800);

/* ===== Toggle Sidebar ===== */
window.toggleSidebar=function(){
sidebar.classList.toggle("active");
overlay.classList.toggle("show");
}

window.closeSidebar=function(){
sidebar.classList.remove("active");
overlay.classList.remove("show");
}

document.addEventListener("keydown",function(e){
if(e.key==="Escape"){
closeSidebar();
}
});

/* ===== Theme ===== */
window.toggleMode=function(){
if(document.body.classList.contains("dark")){
document.body.classList.remove("dark");
document.body.classList.add("light");
localStorage.setItem("theme","light");
}else{
document.body.classList.remove("light");
document.body.classList.add("dark");
localStorage.setItem("theme","dark");
}
}

let savedTheme=localStorage.getItem("theme")||"dark";
document.body.classList.add(savedTheme);

/* ===== Dashboard Stats ===== */
if(document.getElementById("stats")){
let clients=JSON.parse(localStorage.getItem("clients"))||[];
let bookings=JSON.parse(localStorage.getItem("bookings"))||[];
let payments=JSON.parse(localStorage.getItem("payments"))||[];

let totalContracts=bookings.reduce((s,b)=>s+b.total,0);
let totalPayments=payments.reduce((s,p)=>s+p.amount,0);
let remaining=totalContracts-totalPayments;

document.getElementById("clientsCount").innerText=clients.length;
document.getElementById("bookingsCount").innerText=bookings.length;
document.getElementById("totalContracts").innerText=totalContracts+" ريال";
document.getElementById("totalPayments").innerText=totalPayments+" ريال";
document.getElementById("remainingAmount").innerText=remaining+" ريال";
}

});
