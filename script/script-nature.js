let burgerMenu = document.querySelector('.header__burger-menu')
let burgerNav = document.querySelector('.header__burger-nav')
let textFooterWrapper = document.querySelector(".footer__text-wrapper");
let textFooter = document.querySelector(".footer__red-cat-name")
let footerRedCat = document.querySelector(".footer__red-cat-logo")
let footerRedCatLogo = document.querySelector(".footer__red-cat-logo")
let imgSource = document.querySelector(".footer__red-cat-logo")

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

textFooterWrapper.addEventListener("mouseenter", function () {
    textFooter.style.setProperty("color", "red")
    footerRedCatLogo.style.setProperty("color", "red")
    imgSource.setAttribute("src", "./images/Red_Cat_logoHover.svg")
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


// ---------------------------Генерация и подсветка содержания----------------------------------------------------


window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const elHeaders = document.querySelectorAll('.sec-4__title');
    let headerId = '';
    for (let i = elHeaders.length - 1; i >= 0; i--) {


      if (elHeaders[i].getBoundingClientRect().top + window.pageYOffset - 200 < scrollTop) {
        headerId = elHeaders[i].id;
        break;
      }

      
    }

    function codeAddress()
    {
       
    }
    window.onload = codeAddress;


    document.querySelectorAll('.table-of-contents li.active').forEach(el => {
      el.classList.remove('active');
    });
    if (headerId) {
      document.querySelector(`a[href$="#${headerId}"]`).parentElement.classList.add('active');
    }
  });



  const headers = [];
  const indexes = [0];
  // функция для получения предыдущего header
  const getPrevHeader = (diff = 0) => {
      if ((indexes.length - diff) === 0) {
          return null;
      }
      let header = headers[indexes[0]];
      for (let i = 1, length = indexes.length - diff; i < length; i++) {
          header = header.contains[indexes[i]];
      }
      return header;
  }
  // функция для добавления item в headers
  const addItemToHeaders = (el, diff) => {
      let header = headers;
      if (diff === 0) {
          header = indexes.length > 1 ? getPrevHeader(1).contains : header;
          indexes.length > 1 ? indexes[indexes.length - 1]++ : indexes[0]++;
      } else if (diff > 0) {
          header = getPrevHeader().contains;
          indexes.push(0);
      } else if (diff < 0) {
          const parentHeader = getPrevHeader(Math.abs(diff) + 1);
          for (let i = 0; i < Math.abs(diff); i++) {
              indexes.pop();
          }
          header = parentHeader ? parentHeader.contains : header;
          parentHeader ? indexes[indexes.length - 1]++ : indexes[0]++;
      }
      header.push({ el, contains: [] });
  }
  // добавим заголовки в headers
  document.querySelectorAll('main h1, main h2').forEach((el, index) => {
      if (!el.id) {
          el.id = `id-${index}`;
      }
      if (!index) {
          addItemToHeaders(el);
          return;
      }
      const diff = el.tagName.substring(1) - getPrevHeader().el.tagName.substring(1);
      addItemToHeaders(el, diff);
  });
  // сформируем оглавление страницы для вставки его на страницу
  let html = '';
  const createTableOfContents = (items) => {
      html += '<ol class="nav-menu__ol">';

      for (let i = 0, length = items.length; i < length; i++) {
          const url = `${location.href.split('#')[0]}#${items[i].el.id}`;
          html += `<li class="content__list-lvl-1"><a class="nav-menu__item" href="${url}">${items[i].el.textContent}</a>`;

          if (items[i].contains.length) {
              createTableOfContents(items[i].contains);
          }

          html += '</li>';
      }

      html += '</ol>';
  }
  createTableOfContents(headers);
  html = `<section class="anchor-text"><div class="content-title" style="font-weight: bold; margin-left: 15px; margin-bottom: 10px;">СОДЕРЖАЕНИЕ</div>${html}</section>`;

  // вставим оглавление в тег <aside>
  document.querySelector('main').insertAdjacentHTML('afterbegin', html);



  window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const elHeaders = document.querySelectorAll('main h1, main h2');
      let headerId = '';
      for (let i = elHeaders.length - 1; i >= 0; i--) {
          if (elHeaders[i].getBoundingClientRect().top + window.pageYOffset - 200 < scrollTop) {
              headerId = elHeaders[i].id;
              break;
          }
      }
      document.querySelectorAll('.anchor-text li.active, a.active').forEach(el => {
          el.classList.remove('active');
      });
      if (headerId) {
          document.querySelector(`a[href$="#${headerId}"]`).classList.add('active');
      }
      

    document.querySelectorAll('.main h1, main h2').forEach(a => {
        a.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
      
  });
// -------------------------------------------------------------------------------------

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