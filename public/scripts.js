// Nickname animation when scholling down

var profile = document.querySelector('.profile-background');
var offset = profile.offsetHeight;
var lastName = document.querySelector('.last');
var mask = document.querySelector('.mask')
window.onscroll = function() {
    if (window.pageYOffset > offset) {
        lastName.classList.add("nickname")
        mask.classList.add("nickname")
    } else {
        lastName.classList.remove("nickname")
        mask.classList.remove("nickname")

    }
}


// Attach better click actions to nav buttons

let nodes = document.querySelector('.navbar').childNodes;
nodes.forEach((elem) => {
    if (elem.nodeName == "A") {
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            let href = elem.getAttribute('href');
            let target;
            if (href == '#') {
                target = 0;
                scrolling = true;
            } else
                target = document.querySelector(href).offsetTop - document.querySelector('.header-bg').offsetHeight;
            window.scroll({
                top: target,
                behavior: "smooth"
            });
        })
    }
})

let scrolling = false;
// add listener to disable scroll
window.addEventListener('scroll', (event) => {
    if (isInViewport(document.querySelector(".profile-container")) && !scrolling) {
        // window.scroll({
        //     top: 0,
        //     behavior: "smooth"
        // })
        window.scrollTo(0, 0);
    } else {
        if (window.pageYOffset == 0)
            scrolling = false;
    }
});


var isInViewport = (elem) => {
    var bounding = elem.getBoundingClientRect();

    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

document.querySelector('.scroll-button').addEventListener('click', (event) => {
    console.log("Trying to scroll");
    scrolling = true;
    window.scroll({
        top: document.querySelector('#about').offsetTop - document.querySelector('.header-bg').offsetHeight,
        behavior: "smooth"
    });
})
