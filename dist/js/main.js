$(document).ready(function() {	
	$('.slider').slick({
		accessibility:true,
		arrows: true,
		nextArrow: '<button class="next-arrow"></button>',
		prevArrow: '<button class="prev-arrow"></button>',
		//бесконечное перелистывание
		infinite: true,
		//скорость прокрутки
		autoplaySpeed: 2000,
		//сколько показывать слайдов
		slidesToShow: 1,
		//навигация в виде точек
		dots: false,
		//автоматическое перелистывание
		autoplay: true,
		//скорость прокрутки
		speed: 300,
		//Пауза автопроигрывания при наведении мыши
		pauseOnHover: true,
		//количество перелистываемых слайдов
		 slidesToScroll: 1
	});
	$('.call__service').selectmenu();
	//toggle menu
	let btnToggle = document.querySelector('.header__menu_toggle .header__bars');
	let menuToggle = document.querySelector('.header__menu_toggle .header__top-nav'); 

	btnToggle.addEventListener('click', toggleMenu, false);

	function toggleMenu() {
		menuToggle.classList.toggle('header__top-nav-active');
	}

	//accordion script
	let accordion = document.querySelector('.accordion');
	let accordionHeader = document.querySelectorAll('.accordion__header');
	let accordionPanel = document.querySelectorAll('.accordion__panel');

	for (var i = 0; i < accordionHeader.length; i++) {
		accordionHeader[i].addEventListener('click', openTab, false);
	}
	function openTab() {
		closeTab();
		this.classList.add('accordion__open');
		this.nextElementSibling.classList.add('accordion__panel-open');
	}
	function closeTab() {
		for (var i = 0; i < accordionHeader.length; i++) {
			accordionHeader[i].classList.remove('accordion__open');
			accordionPanel[i].classList.remove('accordion__panel-open');
		}
	}	
});
