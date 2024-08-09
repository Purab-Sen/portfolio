
function setProjectCardWidth() {
    const minWidth = window.innerWidth * 0.4;
    const finalWidth = 800;
    const extendWidth = finalWidth - minWidth;
    const maxHeight = 400;
    let projectcards = document.getElementsByClassName('projectcard');
    for (let i = 0; i < projectcards.length; i++) {
        let divBottom = projectcards[i].getBoundingClientRect().bottom;
        let viewportHeight = window.innerHeight;
        let diff = divBottom - viewportHeight;
        if (diff >= 0 && diff <= maxHeight) {
            let incw = (1 - diff / maxHeight) * extendWidth;
            let inch = (1 - diff / maxHeight) * 100;
            let width = minWidth + incw;
            let incop = (1 - diff / maxHeight) * 0.9;
            projectcards[i].style.width = width + "px";
            projectcards[i].style.opacity = `${0.1 + incop}`
        } else if (diff < 0) {
            projectcards[i].style.width = finalWidth + "px";
            projectcards[i].style.opacity = "1";
        }
    }
}
window.addEventListener('scroll', () => {
    if (window.innerWidth > 890) {
        setProjectCardWidth();
    } else {
        document.querySelectorAll(".projectcard").forEach((card) => {
            card.style.width = "90vw";
            card.style.height = "fit-content";
            card.style.opacity = "1";
        })
    }
})
window.onresize = () => {
    if (window.innerWidth > 890){
        setProjectCardWidth();
    } else {
        document.querySelectorAll(".projectcard").forEach((card) => {
            card.style.width = "90vw";
            card.style.height = "fit-content";
            card.style.opacity = "1";
        })
    }
}