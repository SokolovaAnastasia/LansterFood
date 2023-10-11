document.querySelectorAll('.shell__link').forEach(function (shellssil) {
  shellssil.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.shell__dopcontent').forEach(function (tabContent) {
      tabContent.classList.remove('shell__dopcontent_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('shell__dopcontent_active')
  })
})
let namberProduct = document.querySelectorAll('.shell__fivesubTitle')
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      console.log();
      return '<span class="' + className + '">' + namberProduct[index].textContent + "</span>";
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




// 



const shellink = document.querySelectorAll('.shell__link')

for (let i = 0; i < shellink.length; i++) {
  shellink[i].addEventListener('click', function () {
    for (let i = 0; i < shellink.length; i++) {
      shellink[i].classList.remove('shell__link_active')
    }
    shellink[i].classList.add('shell__link_active')
  })
}
const imgsTwo = document.querySelectorAll('.shell__fivelastkardImg1')
const imgsTwos = document.querySelectorAll('.shell__fivelastkardImg2')
const body = document.querySelectorAll('.bodyActive')[0]

for (let i = 0; i < imgsTwo.length; i++) {
  imgsTwo[i].addEventListener('click', function () {
    body.classList.add('body')
    imgsTwos[i].classList.add('shell__fivelastkardImg1active')
    imgsTwo[i].parentElement.children[1].classList.add('shell__fivelastkardImg2')
  })
}
const shellfivelastkardImg1 = document.querySelectorAll('.shell__fivelastkardImg1')
const shellfivelastkardImg2 = document.querySelectorAll('.shell__fivelastkardImg2')
const shellfivemodalbtn = document.querySelectorAll('.shell__fivemodalbtn')
for (let i = 0; i < shellfivemodalbtn.length; i++) {
  shellfivemodalbtn[i].addEventListener('click', function () {
    body.classList.remove('body')
    shellfivelastkardImg1[i].classList.remove('shell__fivelastkardImg2')
    shellfivelastkardImg2[i].classList.remove('shell__fivelastkardImg1active')
  })
}


ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [55.759910, 37.613375],
    zoom: 14.245,
    controls: ['smallMapDefaultSet']
  }, {
    searchControlProvider: 'yandex#search'
  });
  myMap.controls.remove('searchControl');
  myMap.controls.remove('geolocation');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('geolocationControl');
  myMap.controls.add('geolocationControl', {
    float: 'none',
    position: {
      top: '354px',
      left: '1870px'
    }
  });
  myMap.controls.remove('zoomControl');
  myMap.controls.add('zoomControl', {
    float: 'none',
    size: "small",
    position: {
      top: '260px',
      left: '1870px'
    }
  });
  myMap.behaviors.disable('scrollZoom');
  var myPlacemark = new ymaps.Placemark([55.759910, 37.613375], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://api-maps.yandex.ru/2.0/./images/2c3d90d4e522c1f62b6cf3e59f7a877d.png',
    iconImageSize: [30, 30],
    iconImageOffset: [0, 0]
  });
  myMap.geoObjects.add(myPlacemark);

});

const shellDopcontentnewsBtn = document.querySelectorAll('.shell__dopcontentnewsBtn')
const shellDopcontentnewssubcontainer = document.querySelectorAll('.shell__dopcontentnewssubcontainer')
const shellDopcontentnewsvideo = document.querySelectorAll('.shell__dopcontentnewsvideo')
for (let i = 0; i < shellDopcontentnewsBtn.length; i++) {
  shellDopcontentnewsBtn[i].addEventListener('click', function () {
    shellDopcontentnewssubcontainer[i].classList.add('shell__dopcontentnewsActive')
    shellDopcontentnewsvideo[i].classList.add('shell__dopcontentnewsActive')
    shellDopcontentnewsBtn[i].textContent = "закрыть новость"
    shellDopcontentnewsBtn[i].addEventListener('click', function () {
      shellDopcontentnewsBtn[i].textContent = "Прочитать полностью"
      shellDopcontentnewssubcontainer[i].classList.remove('shell__dopcontentnewsActive')
      shellDopcontentnewsvideo[i].classList.remove('shell__dopcontentnewsvideoActive')
    })
  })
}
const  shellDopcontentnewsvideobtn = document.querySelectorAll('.shell__dopcontentnewsvideobtn')

for(let i = 0; i<shellDopcontentnewsvideobtn.length; i++) {
  shellDopcontentnewsvideobtn[i].addEventListener('click', function() {
    shellDopcontentnewsvideobtn[i].classList.add('shell__dopcontentnewsvideobtnNone')
    shellDopcontentnewsvideo[i].classList.add('shell__dopcontentnewsvideoActive')
  })

}
