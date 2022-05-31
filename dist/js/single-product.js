const singleProduct = {
	init: function() {
		singleProduct.initElements();
		singleProduct.initFunctions();
		singleProduct.initListener();
 },
 initElements: function(e) {
	singleProduct.slides = document.querySelectorAll(".slide");
	singleProduct.btnFirst = document.querySelector('.button-first');
	singleProduct.btnSecond = document.querySelector('.button-second');
	singleProduct.btnThird = document.querySelector('.button-third');
	singleProduct.singlePageSection = document.querySelector('.singlePageSection');
 },
 initFunctions: function() {
	singleProduct.slides[0].style.display = 'flex';
	singleProduct.slides[1].style.display = 'flex';
	singleProduct.slides[2].style.display = 'none';
	singleProduct.slides.forEach((slide, indx) => {
		if(singleProduct.singlePageSection.getBoundingClientRect().width < 878){
			slide.style.transform = `translateX(${indx * 100}%)`;
		}
		else {
			slide.style.transform = `translateY(${indx * 100}%)`;
		}
	});
 },
 initListener: function() {
	singleProduct.btnFirst.addEventListener('click', singleProduct.slideBtnChoice);
	singleProduct.btnSecond.addEventListener('click', singleProduct.slideBtnChoice);
	singleProduct.btnThird.addEventListener('click', singleProduct.slideBtnChoice);
	singleProduct.slides.forEach(image=> { image.addEventListener('touchstart', (e) => {
		console.log(e);
	})})
 },
 slideBtnChoice: function (e) {
	 const activeBtn = document.querySelector('.button-slider-active');
	 let curSlide = 0;
	 activeBtn.classList.remove('button-slider-active');
	 switch(e.target.classList[1]) {
		case 'button-first':
			singleProduct.btnFirst.classList.add('button-slider-active');
			curSlide = 0;
			singleProduct.slides[0].style.display = 'flex';
			singleProduct.slides[1].style.display = 'flex';
			singleProduct.slides[2].style.display = 'none';
			singleProduct.slides.forEach((slide, indx) => {
				if(singleProduct.singlePageSection.getBoundingClientRect().width < 878){
					slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
				}
				else {
					slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
				}
			});
			break;
		case 'button-second':
			singleProduct.btnSecond.classList.add('button-slider-active');
			curSlide = 1;
			singleProduct.slides[0].style.display = 'flex';
			singleProduct.slides[1].style.display = 'flex';
			singleProduct.slides[2].style.display = 'flex';
			singleProduct.slides.forEach((slide, indx) => {
				if(singleProduct.singlePageSection.getBoundingClientRect().width < 878){
					slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
				}
				else {
					slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
				}
			});
			break;
		case 'button-third':
			singleProduct.btnThird.classList.add('button-slider-active');
			curSlide = 2;
			singleProduct.slides[0].style.display = 'flex';
			singleProduct.slides[1].style.display = 'flex';
			singleProduct.slides[2].style.display = 'flex';
			singleProduct.slides.forEach((slide, indx) => {
				if(singleProduct.singlePageSection.getBoundingClientRect().width < 878){
					slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
				}
				else {
					slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
				}
			});
			break;
		default:
			console.log(`Sorry, we are out of ${e.target.classList[1]}.`);
	 }
 },
};

document.addEventListener('DOMContentLoaded', singleProduct.init);