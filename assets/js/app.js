// ===== Sidebar Toggle =====
function toggleSidebar(){
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if(!sidebar || !overlay) return;

sidebar.classList.toggle("active");
overlay.classList.toggle("show");
}

function closeSidebar(){
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if(!sidebar || !overlay) return;

sidebar.classList.remove("active");
overlay.classList.remove("show");
}

// ===== Dark Mode =====
function toggleMode(){
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

// Load Theme
window.addEventListener("DOMContentLoaded", function(){
let savedTheme = localStorage.getItem("theme") || "dark";
document.body.classList.add(savedTheme);
});
