



// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.sl__img'),
    sliderImages1 = document.querySelectorAll('.sl-img'),
    sliderImages2 = document.querySelectorAll('.sl-img-2'),
    sliderImages3 = document.querySelectorAll('.sl-img-3'),
    sliderImages4 = document.querySelectorAll('.sl-img-4'),


    sliderLine = document.querySelector('.sl__line')
sliderLine1 = document.querySelector('.sl__line-1')
sliderLine2 = document.querySelector('.sl__line-2')
sliderLine3 = document.querySelector('.sl__line-3')
sliderLine4 = document.querySelector('.sl__line-4')

sliderText = document.querySelectorAll('.sl-text__item'),
    sliderText2 = document.querySelectorAll('.footer__menu-item')

sliderDots = document.querySelectorAll('.sl__dot'),
    sliderDots1 = document.querySelectorAll('.sl__dot-1')
sliderDots3 = document.querySelectorAll('.sl__dot-3')

numberDots = document.querySelectorAll('.lenta__dots-item')

sliderBtnNext1 = document.querySelector('.sl__btn-next-1')
sliderBtnPrev1 = document.querySelector('.sl__btn-prev-1')

sliderBtnNext2 = document.querySelector('.sl__btn-next-2')
sliderBtnPrev2 = document.querySelector('.sl__btn-prev-2')

sliderBtnNext3 = document.querySelector('.sl__btn-next-3')
sliderBtnPrev3 = document.querySelector('.sl__btn-prev-3')

sliderBtnNext4 = document.querySelector('.sl__btn-next-4')
sliderBtnPrev4 = document.querySelector('.sl__btn-prev-4')


// Переменные    
let sliderCount = 0,
    sliderWidth;
let sliderCount1 = 0,
    sliderWidth1;
let sliderCount2 = 0,
    sliderWidth2;
let sliderCount3 = 0,
    sliderWidth3;
let sliderCount4 = 0,
    sliderWidth4;
// Адаптивность слайдера
window.addEventListener('resize', showSlide);


// Сенсорное листание слайдов

const sliderSens2 = document.querySelector(".sl__line-2")
slides2 = Array.from(document.querySelectorAll('.sl-img-2'))

let isDragging = false
startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0


slides2.forEach((slide2Sens, index) => {
    const slideImage2 = slide2Sens.querySelector('img')
    slideImage2.addEventListener('dragstart', (e) => e.preventDefault())

    //касание пальца

    slide2Sens.addEventListener('touchstart', touchStart(index))
    slide2Sens.addEventListener('touchend', touchEnd)
    slide2Sens.addEventListener('touchmove', touchMove)

    // касание курсором

    // slide2Sens.addEventListener('mousedown', touchStart(index))
    // slide2Sens.addEventListener('mouseup', touchEnd)
    // slide2Sens.addEventListener('mouseleave', touchEnd)
    // slide2Sens.addEventListener('mousemove', touchMove)

})

// отключение контекстного меню
// window.oncontextmenu = function (event) {
//     event.preventDefault()
//     event.stopPropagation()
//     return false
// }

function touchStart(index) {
    return function (event) {
        currentIndex = index
        startPos = getPositionX(event)
        console.log(startPos)
        isDragging = true

        animationID = requestAnimationFrame(animation)
        sliderSens2.classList.add('grabbing')
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
    sliderSens2.style.transform = `translate(${currentTranslate}px)`

}

function touchEnd() {
    isDragging = false
    cancelAnimationFrame(animationID)

    const movedBy = currentTranslate - prevTranslate

    if (movedBy <-100 && currentIndex < slides2.length - 1)
    currentIndex += 1

    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

    setPositionByIndex()

    sliderSens2.classList.remove('grabbing')


}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
    }
}

function setPositionByIndex () {
    currentTranslate = currentIndex * -sliderWidth2
    prevTranslate = currentTranslate
    setSliderPosition()
}

// Кнопки листания слайдов вперед и назад

sliderBtnNext1.addEventListener('click', nextSlide1);
sliderBtnPrev1.addEventListener('click', prevSlide1);

sliderBtnNext2.addEventListener('click', nextSlide2);
sliderBtnPrev2.addEventListener('click', prevSlide2);

sliderBtnNext3.addEventListener('click', nextSlide3);
sliderBtnPrev3.addEventListener('click', prevSlide3);

sliderBtnNext4.addEventListener('click', nextSlide4);
sliderBtnPrev4.addEventListener('click', prevSlide4);

// Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);


// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.sl').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function showSlide1() {
    sliderWidth1 = document.querySelector('.sl-1').offsetWidth;
    sliderLine1.style.width = sliderWidth1 * sliderImages1.length + 'px'
    sliderImages1.forEach(item => item.style.width = sliderWidth1 + 'px');

    rollSlider1();
}
showSlide1();

function showSlide2() {
    sliderWidth2 = document.querySelector('.sl-2').offsetWidth;
    sliderLine2.style.width = sliderWidth2 * sliderImages2.length + 'px'
    sliderImages2.forEach(item => item.style.width = sliderWidth2 + 'px');

    rollSlider2();
}
showSlide2();

function showSlide3() {

}
showSlide3();

function showSlide4() {
    sliderWidth4 = document.querySelector('.sl-4').offsetWidth;
    sliderLine4.style.width = sliderWidth4 * sliderImages4.length + 'px'
    sliderImages4.forEach(item => item.style.width = sliderWidth4 + 'px');

    rollSlider4();
}
showSlide4();

// Перелистывает слайд вперед
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
    rollSlider();
    thisSlide(sliderCount);
}

function nextSlide1() {
    sliderCount1++;
    if (sliderCount1 >= sliderImages1.length) sliderCount1 = 0;
    rollSlider1()
    thisSlide1(sliderCount1);
}

function nextSlide2() {
    sliderCount2++;
    if (sliderCount2 >= sliderImages2.length) sliderCount2 = 0;
    rollSlider2()
}

function nextSlide3() {
    sliderCount3++;
    if (sliderCount3 >= sliderImages3.length) sliderCount3 = 0
    rollSlider3()
    thisSlide3(sliderCount3)

}


function nextSlide4() {
    sliderCount4++;
    if (sliderCount4 >= sliderImages4.length) sliderCount4 = 0
    rollSlider4()

}

// Перелистывает слайд назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1
    rollSlider();
    thisSlide(sliderCount);
}

function prevSlide1() {
    sliderCount1--;
    if (sliderCount1 < 0) sliderCount1 = sliderImages1.length - 1;
    rollSlider1();
    thisSlide1(sliderCount1);
}

function prevSlide2() {
    sliderCount2--;
    if (sliderCount2 < 0) sliderCount2 = sliderImages2.length - 1;
    rollSlider2();
}

function prevSlide3() {
    sliderCount3--;
    if (sliderCount3 < 0) sliderCount3 = sliderImages3.length - 1;
    rollSlider3();
    thisSlide3(sliderCount3)

}

function prevSlide4() {
    sliderCount4--;
    if (sliderCount4 < 0) sliderCount4 = sliderImages4.length - 1;
    rollSlider4();
}

// Задает шаг перемещения слайдов



// var stop = false;
// var frameCount = 0;
// var fps, fpsInterval, startTime, now, then, elapsed;



// function startAnimating(fps) {
//     fpsInterval = 1000 / fps;
//     then = Date.now();
//     startTime = then;
//     animate();

// }

// function animate() {


//     requestAnimationFrame(animate);


//     now = Date.now();
//     elapsed = now - then;


//     if (elapsed > fpsInterval) {


//         then = now - (elapsed % fpsInterval);
//         sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;


//     }
// }



function rollSlider() {
    // MoveOut()
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}



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


function rollSlider1() {
    sliderLine1.style.transform = `translateX(${-sliderCount1 * sliderWidth1}px)`;
}
function rollSlider2() {
    sliderLine2.style.transform = `translateX(${-sliderCount2 * sliderWidth2}px)`
}
function rollSlider3() {

    sliderLine3.style.transform = `translateX(${-sliderCount3 * sliderWidth3}px)`;
}
function rollSlider4() {
    sliderLine4.style.transform = `translateX(${-sliderCount4 * sliderWidth4}px)`;
}


function Resolution() {
    // Выполняем действие, если ширина меньше 1000px
    var w = window.innerWidth;

    if (w < 1200) {

        btnPrev4.removeEventListener("mouseover", BtnPrev4SelectorAdd);
        btnPrev4.removeEventListener("mouseout", BtnPrev4SelectorDelete);

        btnPrev2.removeEventListener("mouseover", BtnPrev2SelectorAdd);
        btnPrev2.removeEventListener("mouseout", BtnPrev2SelectorDelete);

        btnNext2.removeEventListener("mouseover", BtnNext2SelectorAdd);
        btnNext2.removeEventListener("mouseout", BtnNext2SelectorDelete);

        btnNext4.removeEventListener("mouseover", BtnNext4SelectorAdd);
        btnNext4.removeEventListener("mouseout", BtnNext4SelectorDelete);

        btnNext2.addEventListener("touchstart", circle1MoveRight);
        btnNext2.addEventListener("touchend", circle1MoveRightOut)
        btnPrev2.addEventListener("touchstart", circle1MoveLeft);
        btnPrev2.addEventListener("touchend", circle1MoveLeftOut)

        btnNext4.addEventListener("touchstart", circle2MoveRight);
        btnNext4.addEventListener("touchend", circle2MoveRightOut)

        btnPrev4.addEventListener("touchstart", circle2MoveLeft);
        btnPrev4.addEventListener("touchend", circle2MoveLeftOut)
    } else {
        btnPrev4.addEventListener("mouseover", BtnPrev4SelectorAdd);
        btnPrev4.addEventListener("mouseout", BtnPrev4SelectorDelete);

        btnPrev2.addEventListener("mouseover", BtnPrev2SelectorAdd);
        btnPrev2.addEventListener("mouseout", BtnPrev2SelectorDelete);

        btnNext2.addEventListener("mouseover", BtnNext2SelectorAdd);
        btnNext2.addEventListener("mouseout", BtnNext2SelectorDelete);

        btnNext4.addEventListener("mouseover", BtnNext4SelectorAdd);
        btnNext4.addEventListener("mouseout", BtnNext4SelectorDelete);

        btnNext2.addEventListener("touchstart", circle1MoveRight);
        btnNext2.addEventListener("touchend", circle1MoveRightOut)
        btnPrev2.addEventListener("touchstart", circle1MoveLeft);
        btnPrev2.addEventListener("touchend", circle1MoveLeftOut)

        btnNext4.addEventListener("touchstart", circle2MoveRight);
        btnNext4.addEventListener("touchend", circle2MoveRightOut)

        btnPrev4.addEventListener("touchstart", circle2MoveLeft);
        btnPrev4.addEventListener("touchend", circle2MoveLeftOut)
    }

    function circle2MoveRight() {
        circle2.classList.remove("circle2-move-right", "circle2-move-right-out", "circle2-move-left", "circle2-move-left-out")
        circle2.classList.add("circle2-move-right")
    }

    function circle2MoveRightOut() {
        circle2.classList.remove("circle2-move-right")
        circle2.classList.add("circle2-move-right-out")
    }

    function circle1MoveRight() {
        circle.classList.remove("circle1-move-right", "circle1-move-right-out", "circle1-move-left", "circle1-move-left-out")
        circle.classList.add("circle1-move-right")
    }

    function circle1MoveRightOut() {
        circle.classList.remove("circle1-move-right")
        circle.classList.add("circle1-move-right-out")
    }


    function circle1MoveLeft() {
        circle.classList.remove("circle1-move-left", "circle1-move-left-out", "circle1-move-right", "circle1-move-right-out")
        circle.classList.add("circle1-move-left")
    }

    function circle1MoveLeftOut() {
        circle.classList.remove("circle1-move-left")
        circle.classList.add("circle1-move-left-out")
    }


    function circle2MoveLeft() {
        circle2.classList.remove("circle2-move-left", "circle2-move-left-out", "circle2-move-right", "circle2-move-right-out")
        circle2.classList.add("circle2-move-left")
    }

    function circle2MoveLeftOut() {
        circle2.classList.remove("circle2-move-left")
        circle2.classList.add("circle2-move-left-out")
    }

}


window.addEventListener('resize', calcBlock)


function calcBlock() {
    const widthWindow = window.innerWidth
    const win = widthWindow


    sliderWidth4 = document.querySelector('.sl-4').offsetWidth;
    sliderLine4.style.width = sliderWidth4 * sliderImages4.length + 'px'
    sliderImages4.forEach(item => item.style.width = sliderWidth4 + 'px');

    rollSlider4();

    sliderWidth3 = document.querySelector('.sl-3').offsetWidth;
    sliderLine3.style.width = sliderWidth3 * sliderImages3.length + 'px'
    sliderImages3.forEach(item => item.style.width = sliderWidth3 + 'px');

    rollSlider3();

    sliderWidth2 = document.querySelector('.sl-2').offsetWidth;
    sliderLine2.style.width = sliderWidth2 * sliderImages2.length + 'px'
    sliderImages2.forEach(item => item.style.width = sliderWidth2 + 'px');

    rollSlider2();

    sliderWidth1 = document.querySelector('.sl-1').offsetWidth;
    sliderLine1.style.width = sliderWidth1 * sliderImages1.length + 'px'
    sliderImages1.forEach(item => item.style.width = sliderWidth1 + 'px');

    rollSlider1();

    Resolution()
    return win

}


calcBlock()


// Указывает как слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));

    sliderDots[index].classList.add('active-dot');

    sliderImages.forEach(item => item.classList.remove('sl__img--active'))

    sliderImages[index].classList.add('sl__img--active')
}


function btn__show() {
    if (sliderCount3 === 0) {
        sliderBtnPrev.classList.add("display-none")
    }
    else {
        sliderBtnPrev.classList.remove("display-none")
    }
}

function thisSlide1(index) {
    sliderDots1.forEach(item => item.classList.remove('active-dot-1'))
    sliderDots1[index].classList.add('active-dot-1')
}


function pseudoElem2(index) {
    sliderText2.forEach(item => item.classList.remove('footer__menu-item--active'))
    sliderText2[index].classList.add('footer__menu-item--active')

}

function thisSlide3(index) {
    sliderDots3.forEach(item => item.classList.remove('active-dot-3'))
    sliderDots3[index].classList.add('active-dot-3')
    numberDots.forEach(item => item.classList.remove('dots-number-active'))
    numberDots[index].classList.add('dots-number-active')

}

function sliderPrBtn(index) {
    sliderBtnPrev3.forEach(item => item.classList.remove('sl__btn-prev-3'))
    if ([index] == 0) {

    }
}



// Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        thisSlide(sliderCount);
        rollSlider();
    })
})

sliderDots1.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount1 = index;
        rollSlider1();
        thisSlide1(sliderCount1);
    })
})

sliderDots3.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount3 = index;
        rollSlider3();
        thisSlide3(sliderCount3);
        Resolution();
    })
})

// -----------------Закрываем/открываем окно меню при нажатии на пункт меню-----------------
const menuLists = document.querySelectorAll(".header__burger-list");
const windowMenu = document.querySelector('.open');

for (a = 0; a < menuLists.length; a++) {
    menuLists[a].addEventListener("click", function () {
        burgerNav.classList.toggle('open');
        document.querySelector('.body').classList.remove('overflow-none')
        burgerMenu.classList.toggle('active');


    })
}
