
const container = document.getElementsByClassName("container")[0];
const loadHeader = () => {
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
    <div class="nav-bar">
        <i class='bx bx-menu sidebarOpen'></i>

        <div class="logoContainer">
            <a href="index.html"> 
            <img src="./util/logo.png" alt="">
            </a>
            <span class="logo navLogo"><a href="index.html">CS<span class="span"> FORUM</a></span>
        </div>

        <div class="menu">
            <div class="logo-toggle">
                <span class="logo"><a href="index.html">CS FORUM</a></span>
                <i class='bx bx-x siderbarClose'></i>
            </div>

            <ul class="nav-links">
                <li class="activeLink"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="event.html">Events</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>

        <div class="darkLight-searchBox">
            <div class="dark-light">
                <i class='bx bx-moon moon'></i>
                <i class='bx bx-sun sun'></i>
            </div>

        </div>
    </div>
    </nav>
    `;
    container.insertAdjacentElement("beforebegin", header);
}
const loadSlideShow = () => {
    const section = document.createElement("section");
    section.innerHTML = `
    <div class="slideShow">
    <i class="fa-solid fa-chevron-left" id="leftSlide"></i>
    <i class="fa-solid fa-chevron-right" id="rightSlide"></i>
    <div class="dotsContainer">
    </div>
    </div>
  `;
    container.insertAdjacentElement("beforebegin", section);

    
    
    
}

const slideShow = () => {

    let slidesArr = ["img1.jpg", "img2.jpeg", "img3.jpg"];
    // Declaration of Constants
    const leftSlideBtn = document.getElementById("leftSlide");
    const rightSlideBtn = document.getElementById("rightSlide");
    const slidesContainer = document.getElementsByClassName("slideShow")[0];
    const dotsContainer = document.getElementsByClassName("dotsContainer")[0];
    // Index of Image
    let index = 0;

    // Adds Slide in the html page
    const addSlides = (slidesArr) => {
        for (let i = 0; i < slidesArr.length; i++) {
            const img = document.createElement("img");
            img.src = "./images/slides/" + slidesArr[i];
            slidesContainer.appendChild(img);
            const div = document.createElement("div");
            div.classList.add("dot");
            dotsContainer.appendChild(div);
            index = i;
        }
    }

    // call of add slide function
    addSlides(slidesArr);

    // slide changing and dot changing function
    const changeSlide = (index) => {
        const images = Array.from(slidesContainer.getElementsByTagName("img"));
        const dots = Array.from(dotsContainer.getElementsByClassName("dot"));

        images.forEach((img) => {
            img.style.display = "none";
        })
        dots.forEach((dot) => {
            dot.classList.remove("activeDot");
        })

        images[index].style.display = "block";
        dots[index].classList.add("activeDot");
    }


    // when clicked on dot then slide is changed
    const dots = Array.from(dotsContainer.getElementsByClassName("dot"));
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            changeSlide(index);
        });
    });


    // when clicked on left slide button then left slide will load
    leftSlideBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = slidesArr.length - 1;
        }
        changeSlide(index);
    });


    // when clicked on right slide button then right slide will load
    rightSlideBtn.addEventListener("click", () => {
        index++;
        if (index > slidesArr.length - 1) {
            index = 0;
        }
        changeSlide(index);
    });

    // Slide changes after each 2 seconds
    setInterval(() => {
        index++;
        if (index > slidesArr.length - 1) {
            index = 0;
        }
        changeSlide(index);
    }, 2000);

    changeSlide(index);
}


const loadFooter = ()=>{
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.innerHTML=`
    <div class="col shortcut">
        <div class="links">
            <a href="index.html">home</a>
            <a href="about.html">about</a>
            <a href="gallery.html">gallery</a>
            <a href="event.html">events </a>
            <a href="contact.html">contact</a>
        </div>
    </div>
    <h3 class="copyright">All copyrights &copy; reserved to <a href="index.html" >Computer Science Forum </a></h3>
    `
    document.getElementsByTagName("body")[0].insertAdjacentElement("beforeend", footer);
}



export { loadHeader, loadSlideShow, slideShow, loadFooter};