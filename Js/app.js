const mobileMenu = document.querySelector('#mobile-menu');
const mobileLinks = document.querySelector('.mobile__links');
const slideDown = document.querySelector('.slides');
const slideUp = document.querySelector('.slidess');
const noScroll = document.querySelector('body');

mobileMenu.addEventListener('click' , () =>{
    if(mobileMenu.classList.contains('change')){  // close mobile menu
        mobileMenu.classList.remove('change');
        mobileLinks.classList.add('fadeOut');
        slideDown.classList.remove('slideDown');
        slideUp.classList.remove('slideUp');
        noScroll.classList.remove('scroll');
    }
    else{  // open mobile menu
        mobileMenu.classList.add('change');
        mobileLinks.classList.add('fadeIn');
        mobileLinks.classList.remove('fadeOut');
        slideDown.classList.add('slideDown');
        slideUp.classList.add('slideUp');
        noScroll.classList.add('scroll');
    }
});