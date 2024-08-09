setNavBackground()
window.onscroll = () => {
    setNavBackground();
    triggerAnimation();
    triggerAnimationofSkills();
    triggerAnimationofAbout();
}


function setNavBackground() {
    const links = document.querySelectorAll(".navItem");
    links.forEach((link) => {
        if (link.classList.contains("active")) {
            link.classList.remove("active");
            link.classList.add("inactive");
        }
    })
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 250 && rect.bottom > 250) {
            const id = section.getAttribute("id");
            document.querySelector(`a[href="#${id}"]`).classList.add("active");
            document.querySelector(`a[href="#${id}"]`).classList.remove("inactive");
        }
    })
}

//setting animatioin of Education
function triggerAnimation() {
    const rect = document.getElementById("Education").getBoundingClientRect();
    if (rect.top < 500 && rect.bottom > 500) {
        document.querySelectorAll(".animator").forEach((element) => {
            if (element.classList.contains("left")) {
                element.style.animationName = "leftToRight";
            } else {
                element.style.animationName = "rightToLeft";
            }
        })
    }
}

//setting animatioin of About
function triggerAnimationofAbout() {
    const rect = document.getElementById("About").getBoundingClientRect();
    if (rect.top < 500 && rect.bottom > 500) {
       document.querySelector(".aboutme").style.animationName = "rotation";
    }
}

//setting animation for skills
function triggerAnimationofSkills() {
    const rect = document.getElementById("Skills").getBoundingClientRect();
    if (rect.top < 500 && rect.bottom > 500) {
        const cards = document.querySelectorAll(".skillcard");
        let index = 0;
        const x = setInterval(()=>{
            if(index == cards.length)clearInterval(x);
            else{
                cards[index].style.animationName = "bounce";
                cards[index].style.visibility = "visible";
                index++;
            }
        },100);
    }
}

