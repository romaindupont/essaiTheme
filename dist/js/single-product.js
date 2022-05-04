const singleProduct = {
	init: function() {
		singleProduct.initElements();
		singleProduct.initFunctions();
		singleProduct.initListener();
 },
 initElements: function(e) {
	singleProduct.slides = document.querySelectorAll(".slide");
	singleProduct.btnFirst = document.querySelector('.btn-first');
	singleProduct.btnSecond = document.querySelector('.btn-second');
	singleProduct.btnThird = document.querySelector('.btn-third');
 },
 initFunctions: function() {
	singleProduct.slides[0].style.display = 'block';
	singleProduct.slides[1].style.display = 'block';
	singleProduct.slides[2].style.display = 'none';
	singleProduct.slides.forEach((slide, indx) => {
		slide.style.transform = `translateY(${indx * 100}%)`;
	});
 },
 initListener: function() {
	singleProduct.btnFirst.addEventListener('click', singleProduct.slideBtnChoice);
	singleProduct.btnSecond.addEventListener('click', singleProduct.slideBtnChoice);
	singleProduct.btnThird.addEventListener('click', singleProduct.slideBtnChoice);
 },
 slideBtnChoice: function (e) {
	 const activeBtn = document.querySelector('.btn-slider-active');
	 let curSlide = 0;
	 activeBtn.classList.remove('btn-slider-active');
	 switch(e.target.classList[1]) {
		case 'btn-first':
			singleProduct.btnFirst.classList.add('btn-slider-active');
			curSlide = 0;
			singleProduct.slides[0].style.display = 'block';
			singleProduct.slides[1].style.display = 'block';
			singleProduct.slides[2].style.display = 'none';
			singleProduct.slides.forEach((slide, indx) => {
				slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
			});
			break;
		case 'btn-second':
			singleProduct.btnSecond.classList.add('btn-slider-active');
			curSlide = 1;
			singleProduct.slides[0].style.display = 'block';
			singleProduct.slides[1].style.display = 'block';
			singleProduct.slides[2].style.display = 'block';
			singleProduct.slides.forEach((slide, indx) => {
				slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
			});
			break;
		case 'btn-third':
			singleProduct.btnThird.classList.add('btn-slider-active');
			curSlide = 2;
			singleProduct.slides[0].style.display = 'block';
			singleProduct.slides[1].style.display = 'block';
			singleProduct.slides[2].style.display = 'block';
			singleProduct.slides.forEach((slide, indx) => {
				slide.style.transform = `translateY(${100 * (indx - curSlide)}%)`;
			});
			break;
		default:
			console.log(`Sorry, we are out of ${e.target.classList[1]}.`);
	 }
	
 },
};

document.addEventListener('DOMContentLoaded', singleProduct.init);