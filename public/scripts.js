// Nickname animation when scholling down
const lastName = document.querySelector('.header > .last');
const mask = document.querySelector('.header > .mask');
// window.onscroll = function() {
//     if (window.pageYOffset > offset) {
//         // lastName.classList.add("nickname")
//         // mask.classList.add("nickname")
//     } else {
//         console.log("removing nickname");
//
//         lastName.classList.remove("nickname")
//         mask.classList.remove("nickname")
//         document.querySelector('.profile > .mask').classList.remove('nickname');
//         document.querySelector('.profile > .last').classList.remove('nickname');
//     }
// }


// Attach better click actions to nav buttons
let scrolling = false;


const nodes = document.querySelector('.navbar').childNodes;
nodes.forEach((elem) => {
  if (elem.nodeName === 'A') {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      const href = elem.getAttribute('href');
      let target;
      if (href === '#') {
        target = 0;
        scrolling = true;
      } else target = document.querySelector(href).offsetTop - document.querySelector('.header-bg').offsetHeight;
      window.scroll({
        top: target,
        behavior: 'smooth',
      });
    });
  }
});

document.querySelector('.logo').addEventListener('click', (event) => {
  event.preventDefault();
  const target = 0;
  scrolling = true;
  window.scroll({
    top: target,
    behavior: 'smooth',
  });
});

const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();

  return (
    bounding.top >= 0
        && bounding.left >= 0
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const profileContainer = document.querySelector('.profile-container');
// add listener to disable scroll
window.addEventListener('scroll', (event) => {
  if (isInViewport(profileContainer) && !scrolling) {
    // window.scroll({
    //     top: 0,
    //     behavior: "smooth"
    // })
    window.scrollTo(0, 0);
} else if (window.pageYOffset === 0) {
    document.querySelector('.name.profile').classList.remove('shift');
    scrolling = false;
    profileContainer.style.opacity = '1.0';
    lastName.classList.remove('nickname');
    mask.classList.remove('nickname');
    document.querySelector('.profile > .mask').classList.remove('nickname');
    document.querySelector('.profile > .last').classList.remove('nickname');
  }
});

// Function to check if a specified element is visible



// add listener to disable scroll
window.addEventListener('scroll', (event) => {
  if (isInViewport(profileContainer) && !scrolling) {
    // window.scroll({
    //     top: 0,
    //     behavior: "smooth"
    // })
    window.scrollTo(0, 0);
  } else if (window.pageYOffset === 0) {
    document.querySelector('.name.profile').classList.remove('shift');
    scrolling = false;
    profileContainer.style.opacity = '1.0';
    lastName.classList.remove('nickname');
    mask.classList.remove('nickname');
    document.querySelector('.profile > .mask').classList.remove('nickname');
    document.querySelector('.profile > .last').classList.remove('nickname');
  }
});


// Turns button at bottom of landing to a scroll button
document.querySelector('.scroll-button').addEventListener('click', (event) => {
  scrolling = true;
  profileContainer.style.opacity = '0.0';
  setTimeout(() => {
    document.querySelector('.name.profile').classList.add('shift');
  }, 400);
  setTimeout(() => {
    document.querySelector('.profile > .last').classList.add('nickname');
    document.querySelector('.profile > .mask').classList.add('nickname');
  }, 1000);


  lastName.classList.add('nickname');
  mask.classList.add('nickname');
  setTimeout(() => {
    window.scroll({
      top: document.querySelector('#about').offsetTop - document.querySelector('.header-bg').offsetHeight,
      behavior: 'smooth',
    });
  }, 1900);
});

window.onload = function onload() { // executes code after DOM loads
  // --- select all <video> on the page
  const vids = document.getElementsByTagName('video');
  // Loop over the selected elements and add event listeners
  for (let i = 0; i < vids.length; i += 1) {
    vids[i].addEventListener('mouseover', (e) => {
      vids[i].play();
    });
    vids[i].addEventListener('mouseout', (e) => {
      vids[i].pause();
    });
  }
};
