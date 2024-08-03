let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>
{
	searchForm.classList.toggle('active');

	navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>
{
	navbar.classList.toggle('active');

	searchForm.classList.remove('active');

}


window.onscroll=()=>
{
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
      loop:false,
      spaceBetween: 20,

      autoplay: {
      	delay: 5000,
      	disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });




var swiper = new Swiper(".brands-slider", {
      loop:true,
      spaceBetween: 20,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });



var swiper = new Swiper(".dairy-slider", {
      loop:true,
      spaceBetween: 20,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });





















