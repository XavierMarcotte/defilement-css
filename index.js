const navbar = document.querySelector('nav')
console.log('2 main animations in css, could be usefull in the future');

let lastScroll = 0 ; 
window.addEventListener('scroll' , () => {
    if (window.scrollY < lastScroll) {
        navbar.style.top = 0;
        }
    else {
        navbar.style.top = "-200px";
    }
    lastScroll = window.scrollY;
})