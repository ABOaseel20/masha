function toggleSidebar(){
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("show");
}

function closeSidebar(){
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("show");
}

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        closeSidebar();
    }
});
