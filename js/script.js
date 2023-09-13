import { loadHeader, loadSlideShow, slideShow, loadFooter } from "./loadHTML.js";

const url = window.location.href;
if (url.search("contact")>=0)
{
    loadHeader();
    loadFooter();
}
else
{

    loadHeader();
    loadFooter();
    loadSlideShow();
    slideShow();
}

const activeLink = ()=>{
    const url = window.location.href;
    const li = Array.from(document.getElementsByClassName("nav-links")[0].getElementsByTagName("li"));

    if (url.search("index")>=0)
    {
        li.forEach((elem)=>{
            if (elem.classList.contains("activeLink"))
            elem.classList.remove("activeLink")
        })
        li[0].classList.add("activeLink");
    }
    else if (url.search("about")>=0)
    {
        li.forEach((elem)=>{
            if (elem.classList.contains("activeLink"))
            elem.classList.remove("activeLink")
        })
        li[1].classList.add("activeLink");
    }
    else if (url.search("gallery")>=0)
    {
        li.forEach((elem)=>{
            if (elem.classList.contains("activeLink"))
            elem.classList.remove("activeLink")
        })
        li[2].classList.add("activeLink");
    }
    else if (url.search("event")>=0)
    {
        li.forEach((elem)=>{
            if (elem.classList.contains("activeLink"))
            elem.classList.remove("activeLink")
        })
        li[3].classList.add("activeLink");
    }
    else if (url.search("contact")>=0)
    {
        li.forEach((elem)=>{
            if (elem.classList.contains("activeLink"))
            elem.classList.remove("activeLink")
        })
        li[4].classList.add("activeLink");
    }
}
activeLink();


// Darkmode
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
    }
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
});

// sidebar 
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});



