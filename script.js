// alert("This site is best viewed in full screen(press F11) & 100% page view");
let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click",()=>{
     if (startmenu.style.bottom =="50px"){
        startmenu.style.bottom = "-655px";
     }
     else{
        startmenu.style.bottom = "50px";
     }
})
