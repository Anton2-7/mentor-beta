let burgerMenu = document.querySelector('.header__burger-menu')
let burgerNav = document.querySelector('.header__burger-nav')
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    burgerNav.classList.toggle('open');
    console.log(burgerNav.classList)
    if (document.querySelector('.header__burger-nav').classList.contains('open')) {
        document.querySelector('.body').classList.add('overflow-none')
    }
    else {
        document.querySelector('.body').classList.remove('overflow-none')
    }
})


// ============================================================

let btnNext2 = document.querySelector(".sl__btn-next-2")
let btnPrev2 = document.querySelector(".sl__btn-prev-2")
let circle = document.querySelector(".btn-nxt-circle-1")


let btnNext4 = document.querySelector(".sl__btn-next-4")
let btnPrev4 = document.querySelector(".sl__btn-prev-4")
let circle2 = document.querySelector(".btn-nxt-circle-2")
let stickSVG2 = document.querySelector(".next-stick-svg-2")
let stickSVG4 = document.querySelector(".next-stick-svg-4")
let stickPrevSVG2 = document.querySelector(".prev-stick-svg-2")
let stickPrevSVG4 = document.querySelector(".prev-stick-svg-4")


btnNext2.addEventListener("mouseover", BtnNext2SelectorAdd);
btnNext2.addEventListener("mouseout", BtnNext2SelectorDelete);


// ======================Ссылка на тг по нажатию на кнопку связаться============================

// =================================================================================================


var slider2 = document.querySelector(".sl__line-2")
var slidesSl2 = document.querySelectorAll(".sl-img-2")
var btnSl2 = document.querySelectorAll(".btn-sl-2")




btnSl2.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
        slidesSl2.forEach(item => item.classList.remove("slider1Out2"))
        slidesSl2[index].classList.add("slider1Out2")

    })

})


btnSl2.forEach(function (elem, index) {

    elem.addEventListener("mousedown", function () {
        if (slidesSl2[index].classList.contains("slider1Out2")) {
            slidesSl2.forEach(item => item.classList.remove("slider1Out2"))



        }

    })

})


let textFooterWrapper = document.querySelector(".footer__text-wrapper");
let textFooter = document.querySelector(".footer__red-cat-name")
let footerRedCat = document.querySelector(".footer__red-cat-logo")
let footerRedCatLogo = document.querySelector(".footer__red-cat-logo")
let imgSource = document.querySelector(".footer__red-cat-logo")
let tgFooter = document.querySelector(".tg__footer-icon")
let facebkFooter = document.querySelector(".fc__footer-icon")
let instaFooter = document.querySelector(".in__footer-icon")
let vkFooter = document.querySelector(".vk__footer-icon")
let image1 = document.querySelector(".clients__logos-img-1")
let image2 = document.querySelector(".clients__logos-img-2")
let image3 = document.querySelector(".clients__logos-img-3")
let image4 = document.querySelector(".clients__logos-img-4")
let btnUp = document.querySelector(".btn__pageUp")


btnUp.addEventListener("touchstart", function() {
    btnUp.setAttribute("src", "./images/btn-up-page-hover.svg")
})

btnUp.addEventListener("touchend", function() {
    btnUp.setAttribute("src", "./images/btn-up-page.svg")
})

textFooterWrapper.addEventListener("mouseenter", function () {
    textFooter.style.setProperty("color", "red")
    footerRedCatLogo.style.setProperty("color", "red")
    imgSource.setAttribute("src", "./images/Red_Cat_logoHover.svg")
})

tgFooter.addEventListener("touchstart", function () {
    tgFooter.setAttribute("src", "./images/TG_hover.svg")
})

tgFooter.addEventListener("touchend", function () {
    tgFooter.setAttribute("src", "./images/Telegram.svg")
})



facebkFooter.addEventListener("touchstart", function () {
    facebkFooter.setAttribute("src", "./images/Facebook_hover.svg")
})

image1.addEventListener("touchstart", function () {
    image1.setAttribute("src", "./images/MBM-logo-dark.svg")
})

image1.addEventListener("touchend", function (e) {
    e.preventDefault()
    image1.setAttribute("src", "./images/MBM-logo.svg")
})

image2.addEventListener("touchstart", function () {
    image2.setAttribute("src", "./images/Росконгрес-dark.svg")
})


image2.addEventListener("touchend", function (e) {
    e.preventDefault()
    image2.setAttribute("src", "./images/Росконгресс.svg")
})

image3.addEventListener("touchstart", function () {
    image3.setAttribute("src", "./images/Департамент-red.svg")
})

image3.addEventListener("touchend", function (e) {
    e.preventDefault()
    image3.setAttribute("src", "./images/Департамент.svg")
})

image4.addEventListener("touchstart", function () {
    image4.setAttribute("src", "./images/бизнес-уикенд-black.svg")
})

image4.addEventListener("touchend", function (e) {
    e.preventDefault()
    image4.setAttribute("src", "./images/бизнес-икенд.svg")
})

facebkFooter.addEventListener("touchend", function () {
    facebkFooter.setAttribute("src", "./images/Facebook.svg")
})

instaFooter.addEventListener("touchstart", function () {
    instaFooter.setAttribute("src", "./images/ins_hover.svg")
})

instaFooter.addEventListener("touchend", function () {
    instaFooter.setAttribute("src", "./images/Instagram.svg")
})


vkFooter.addEventListener("touchstart", function () {
    vkFooter.setAttribute("src", "./images/VK_hover.svg")
})

vkFooter.addEventListener("touchend", function () {
    vkFooter.setAttribute("src", "./images/VK.svg")
})



textFooterWrapper.addEventListener("touchstart", function () {
    textFooter.style.setProperty("color", "red")
    footerRedCatLogo.style.setProperty("color", "red")
    imgSource.setAttribute("src", "./images/Red_Cat_logoHover.svg")
})

textFooterWrapper.addEventListener("mouseleave", function () {
    textFooter.style.color = "#A58069"
    footerRedCatLogo.style.setProperty("color", "#A58069")
    imgSource.setAttribute("src", "./images/Red-Cat_logo.svg")
})


textFooterWrapper.addEventListener("touchend", function (e) {
    e.preventDefault()
    textFooter.style.color = "#A58069"
    footerRedCatLogo.style.setProperty("color", "#A58069")
    imgSource.setAttribute("src", "./images/Red-Cat_logo.svg")
})

let problemSolving1 = document.querySelector(".problem-solving__item-1")
let problemSolving2 = document.querySelector(".problem-solving__item-2")
let problemSolving3 = document.querySelector(".problem-solving__item-3")
let problemSolving4 = document.querySelector(".problem-solving__item-4")
let problemSolving5 = document.querySelector(".problem-solving__item-5")

let pS1 = problemSolving1
let pS2 = problemSolving2
let pS3 = problemSolving3
let pS4 = problemSolving4
let pS5 = problemSolving5

problemSolving1.addEventListener("touchstart", function () {
    problemSolving1.classList.add("problem-solving__touch")
})

problemSolving1.addEventListener("touchend", function (e) {
    e.preventDefault()
    problemSolving1.classList.remove("problem-solving__touch")
})

pS1.addEventListener("mouseover", function () {
    pS1.classList.add("problem-solving__touch")
})

pS1.addEventListener("mouseout", function () {
    pS1.classList.remove("problem-solving__touch")
})

pS2.addEventListener("mouseover", function () {
    pS2.classList.add("problem-solving__touch")
})

pS2.addEventListener("mouseout", function () {
    pS2.classList.remove("problem-solving__touch")
})

pS3.addEventListener("mouseover", function () {
    pS3.classList.add("problem-solving__touch")
})

pS3.addEventListener("mouseout", function () {
    pS3.classList.remove("problem-solving__touch")
})

pS4.addEventListener("mouseover", function () {
    pS4.classList.add("problem-solving__touch")
})

pS4.addEventListener("mouseout", function () {
    pS4.classList.remove("problem-solving__touch")
})

pS5.addEventListener("mouseover", function () {
    pS5.classList.add("problem-solving__touch")
})

pS5.addEventListener("mouseout", function () {
    pS5.classList.remove("problem-solving__touch")
})


problemSolving2.addEventListener("touchstart", function () {
    problemSolving2.classList.add("problem-solving__touch")
})

problemSolving2.addEventListener("touchend", function (e) {
    e.preventDefault()
    problemSolving2.classList.remove("problem-solving__touch")
})

problemSolving3.addEventListener("touchstart", function () {
    problemSolving3.classList.add("problem-solving__touch")
})

problemSolving3.addEventListener("touchend", function (e) {
    e.preventDefault()
    problemSolving3.classList.remove("problem-solving__touch")
})

problemSolving4.addEventListener("touchstart", function () {
    problemSolving4.classList.add("problem-solving__touch")
})

problemSolving4.addEventListener("touchend", function (e) {
    e.preventDefault()
    problemSolving4.classList.remove("problem-solving__touch")
})

problemSolving5.addEventListener("touchstart", function () {
    problemSolving5.classList.add("problem-solving__touch")
})

problemSolving5.addEventListener("touchend", function (e) {
    e.preventDefault()
    problemSolving5.classList.remove("problem-solving__touch")
})



function BtnNext2SelectorAdd() {
    circle.classList.remove("circle1-transition-out", "circle1-transition", "circle1-transition-prev-out")
    circle.classList.add("circle1-transition")
    stickSVG2.classList.remove("stick-next-2", "stick-next-out-2")
    stickSVG2.classList.add("stick-next-2")

}

function BtnNext2SelectorDelete() {
    circle.classList.add("circle1-transition-out")
    circle.classList.remove("circle1-transition");
    stickSVG2.classList.remove("stick-next-2")
    stickSVG2.classList.add("stick-next-out-2")
}

btnPrev2.addEventListener("mouseover", BtnPrev2SelectorAdd);
btnPrev2.addEventListener("mouseout", BtnPrev2SelectorDelete);

function BtnPrev2SelectorAdd() {
    circle.classList.remove("circle1-transition-prev-out", "circle1-transition-out", "circle1-transition")
    circle.classList.add("circle1-transition-prev")
    stickPrevSVG2.classList.remove("stick-prev-2", "stick-prev-out-2")
    stickPrevSVG2.classList.add("stick-prev-2")

}

function BtnPrev2SelectorDelete() {
    circle.classList.add("circle1-transition-prev-out")
    circle.classList.remove("circle1-transition-prev");
    stickPrevSVG2.classList.remove("stick-prev-2")
    stickPrevSVG2.classList.add("stick-prev-out-2")
}


btnPrev4.addEventListener("mouseover", BtnPrev4SelectorAdd);
btnPrev4.addEventListener("mouseout", BtnPrev4SelectorDelete);

btnNext4.addEventListener("mouseover", BtnNext4SelectorAdd);
btnNext4.addEventListener("mouseout", BtnNext4SelectorDelete);


function BtnNext4SelectorAdd() {
    circle2.classList.remove("circle1-transition-out", "circle1-transition", "circle1-transition-prev-out")
    circle2.classList.add("circle1-transition")
    stickSVG4.classList.remove("stick-next-4", "stick-next-out-4")
    stickSVG4.classList.add("stick-next-4")
}

function BtnNext4SelectorDelete() {
    circle2.classList.add("circle1-transition-out")
    circle2.classList.remove("circle1-transition");
    stickSVG4.classList.remove("stick-next-4")
    stickSVG4.classList.add("stick-next-out-4")

}


function BtnPrev4SelectorAdd() {
    circle2.classList.remove("circle1-transition-prev-out", "circle1-transition-out", "circle1-transition")
    circle2.classList.add("circle1-transition-prev")
    stickPrevSVG4.classList.remove("stick-prev-4", "stick-prev-out-4")
    stickPrevSVG4.classList.add("stick-prev-4")
}

function BtnPrev4SelectorDelete() {
    circle2.classList.add("circle1-transition-prev-out")
    circle2.classList.remove("circle1-transition-prev");
    stickPrevSVG4.classList.remove("stick-prev-4")
    stickPrevSVG4.classList.add("stick-prev-out-4")

}
// ===========================================================

let blockHover1 = document.querySelector(".problem-solving__item-1")

let blockHover2 = document.querySelector(".problem-solving__item-2")

let blockHover3 = document.querySelector(".problem-solving__item-3")

let blockHover4 = document.querySelector(".problem-solving__item-4")

let blockHover5 = document.querySelector(".problem-solving__item-5")

let straightLine1 = document.querySelector("#progress-bar-i-1")

let straightLine2 = document.querySelector("#progress-bar-i-2")

let straightLine3 = document.querySelector("#progress-bar-i-3")

let straightLine4 = document.querySelector("#progress-bar-i-4")

let straightLine5 = document.querySelector("#progress-bar-i-5")



let dotsBtn1 = document.querySelectorAll(".sl__dot-1")
let slPageObj1 = document.querySelectorAll(".sl-img")


dotsBtn1.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
        slPageObj1.forEach(item => item.classList.remove("slider1Out"))
        slPageObj1[index].classList.add("slider1Out")
    })
})

blockHover1.addEventListener("mouseover", function () {

    straightLine1.style.setProperty("--opacity", 1)
})

blockHover1.addEventListener("mouseout", function () {
    straightLine1.style.setProperty("--opacity", 0)

})

blockHover1.addEventListener("touchstart", function () {

    straightLine1.style.setProperty("--opacity", 1)
})

blockHover1.addEventListener("touchend", function () {
    straightLine1.style.setProperty("--opacity", 0)

})

blockHover2.addEventListener("mouseover", function () {

    straightLine2.style.setProperty("--opacity", 1)
})

blockHover2.addEventListener("mouseout", function () {

    straightLine2.style.setProperty("--opacity", 0)
})


blockHover2.addEventListener("touchstart", function () {

    straightLine2.style.setProperty("--opacity", 1)
})

blockHover2.addEventListener("touchend", function () {

    straightLine2.style.setProperty("--opacity", 0)
})


blockHover3.addEventListener("mouseover", function () {

    straightLine3.style.setProperty("--opacity", 1)
})

blockHover3.addEventListener("mouseout", function () {

    straightLine3.style.setProperty("--opacity", 0)
})


blockHover3.addEventListener("touchstart", function () {

    straightLine3.style.setProperty("--opacity", 1)
})

blockHover3.addEventListener("touchend", function () {

    straightLine3.style.setProperty("--opacity", 0)
})



blockHover4.addEventListener("mouseover", function () {

    straightLine4.style.setProperty("--opacity", 1)
})

blockHover4.addEventListener("mouseout", function () {

    straightLine4.style.setProperty("--opacity", 0)
})


blockHover4.addEventListener("touchstart", function () {

    straightLine4.style.setProperty("--opacity", 1)
})

blockHover4.addEventListener("touchend", function () {

    straightLine4.style.setProperty("--opacity", 0)
})



blockHover5.addEventListener("mouseover", function () {

    straightLine5.style.setProperty("--opacity", 1)
})

blockHover5.addEventListener("mouseout", function () {

    straightLine5.style.setProperty("--opacity", 0)
})


blockHover5.addEventListener("touchstart", function () {

    straightLine5.style.setProperty("--opacity", 1)
})

blockHover5.addEventListener("touchend", function () {

    straightLine5.style.setProperty("--opacity", 0)
})
// --------------------------------------------------------------------------

let menuLi = document.querySelectorAll(".sl__dot")
let hoverLineValues = document.querySelector('.sl-text__item')

// --------------------------------Кнопка вверх------------------------------

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 3350) {
       // Если страница прокручена вниз более, чем на 550 пикселей,
       // выводим кнопку на экран
       document.querySelector('.btn__page').style.display = 'block';
    } else {
       // В противном случае убираем кнопку с экрана
       document.querySelector('.btn__page').style.display = 'none';
    }
 }

// --------------------------------------------------------------------------