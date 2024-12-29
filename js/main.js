//輪播圖
let slideIdx = 1;
let autoplay;

function changeSlide(ctrl) {
    showSlides(slideIdx + ctrl);
}

function showSlides(idx) {
    slideIdx = idx;
    let slides = document.getElementsByClassName("slide");
    if(slideIdx > slides.length) {
        slideIdx = 1;
    }else if(slideIdx == 0) {
        slideIdx = slides.length;
    }
    for(let i=0; i<slides.length; i++) {
        slides[i].className = slides[i].className.replace(" show", "")
    }
    slides[slideIdx - 1].className += " show";
    setAutoPlay();
}

function setAutoPlay() {
    if(autoplay != undefined) clearInterval(autoplay);
    autoplay = setInterval(function() {
        changeSlide(1);
    }, 2500);
}

window.onload = function() {
    showSlides(slideIdx);
}


// 會員
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const loginbtn = document.querySelector('.loginbtn');
const iconclose = document.querySelector('.icon-close');
const submitbtn = document.querySelector('.submitbtn');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

loginbtn.addEventListener('click',()=>{
    wrapper.classList.add('active-login');
});

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-login');
});

submitbtn.addEventListener('click',()=>{
    wrapper.classList.remove('active-login');
});

//stars
const allplanet = document.querySelectorAll('.planet');

allplanet.forEach((planet,i)=>{
    planet.onclick = function(){
        let current = i+1;
        allplanet.forEach((planet,j)=>{
            const icon = planet.querySelector('iconify-icon');
            if(current >= j+1)
            {
                icon.setAttribute("style", "color:yellow");
            }
            else
            {
                icon.setAttribute("style", "color:#64663d");
            }
        })
    }
})