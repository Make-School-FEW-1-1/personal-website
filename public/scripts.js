var header = document.querySelector('header');
var offset = header.offsetTop;
var firstName = document.querySelector('.first');
window.onscroll = function() {
    if(window.pageYOffset > offset) {
        header.classList.add("moving-header")
        firstName.classList.add("nickname")
    } else {
        header.classList.remove("moving-header")
        firstName.classList.remove("nickname")

    }
}
