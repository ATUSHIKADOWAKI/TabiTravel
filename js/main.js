'use strict'
{
var slider1 = new Swiper('.slider1', {
	effect: 'fade',
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});

var slider2 = new Swiper('.slider2', {
  breakpoints:{
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    700:{
      spaceBetween: 20,
      slidesPerView: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    },
    960:{
      spaceBetween: 50,
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    }
  }
});
// var slider2 = new Swiper('.slider2', {
// 	spaceBetween: 50,
// 	slidesPerView: 3,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev'
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 		clickable: true
// 	}
// });

var slider3 = new Swiper('.slider3', {
  breakpoints:{
    spaceBetween: 20,
    slidesPerView: 1,
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    700:{
      spaceBetween: 20,
      slidesPerView: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    },
    960:{
      spaceBetween: 20,
      slidesPerView: 4,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
      },
    }
  }
});




const tab = document.querySelectorAll('.tab');
const selecter = document.querySelectorAll('.selecter');

function selectItem(){
  removeBorder();
  removeSelected();
  this.classList.add('under-line');
  const tabSelector = document.querySelector(`#${this.id}-selecter`);
  tabSelector.classList.add('selected');
}

function removeBorder(){
  tab.forEach(item => item.classList.remove('under-line'));
}

function removeSelected(){
  selecter.forEach(item => item.classList.remove('selected'))
}

tab.forEach(item => item.addEventListener('click', selectItem));



}