const specialTest = {
	init: function() {
    specialTest.initElements();

  },
	initElements: function() {
		specialTest.certif = document.querySelector('input[name=Certification]:checked');
		specialTest.size = document.querySelector('input[name=size]:checked');
		specialTest.button = document.querySelector('.special-test');
		specialTest.button.addEventListener('click', (e) => {
			e.preventDefault();
			console.log(specialTest.certif = document.querySelector('input[name=Certification]:checked').value, specialTest.size = document.querySelector('input[name=size]:checked').value)
		})
	},
}

document.addEventListener('DOMContentLoaded', specialTest.init);