const specialTest = {
	init: function() {
    specialTest.initElements();

  },
	initElements: function() {
		specialTest.inputSkuSize = document.querySelector('.skuSize');
		specialTest.inputSkuCertif = document.querySelector('.skuCertif');
		specialTest.inputSku = document.querySelector('.sku');
		specialTest.certif = document.querySelector('input[name=Certification]:checked');
		specialTest.size = document.querySelector('input[name=size]:checked');
		specialTest.inputCertif = document.querySelectorAll('input[name=Certification]');
		specialTest.inputSize = document.querySelectorAll('input[name=size]');
		specialTest.certifChoose = '';
		specialTest.sizeChoose = '';
		specialTest.inputCertif.forEach(element => { 
			element.addEventListener('change', (e) => {
				e.preventDefault();
				specialTest.certifChoose = specialTest.certif = document.querySelector('input[name=Certification]:checked').value;
				specialTest.inputSkuCertif.value = specialTest.certifChoose;
				console.log(specialTest.inputSku.value)
			}) 	
		});
		specialTest.inputSize.forEach(element => { 
			element.addEventListener('change', (e) => {
				e.preventDefault();
				specialTest.sizeChoose = specialTest.size = document.querySelector('input[name=size]:checked').value;
				specialTest.inputSkuSize.value = specialTest.sizeChoose;
			}) 	
		});
	},	
}

document.addEventListener('DOMContentLoaded', specialTest.init);