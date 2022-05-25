const addToCart = {
	init: function() {
    addToCart.initElements();
		addToCart.langImportFile();
  },
	initElements: function() {
		addToCart.inputSku = document.querySelector('.sku');
		addToCart.certif = document.querySelector('input[name=attribute_pa_certification]:checked');
		addToCart.size = document.querySelector('input[name=attribute_pa_size]:checked');
		addToCart.inputCertif = document.querySelectorAll('input[name=attribute_pa_certification]');
		addToCart.inputSize = document.querySelectorAll('input[name=attribute_pa_size]');
		addToCart.inputOption = document.querySelectorAll('input[name=attribute_pa_option]');
		addToCart.radios = document.querySelectorAll('input[type="radio"]:checked');
		addToCart.certifChoose = '';
		addToCart.sizeChoose = '';
		addToCart.optionChoose = '';
		addToCart.variationTable = localStorage.getItem("variationTable");
		addToCart.dataJson = JSON.parse(addToCart.variationTable);
		addToCart.personsMap = new Map(Object.entries(addToCart.dataJson));
		addToCart.inputVariableId = document.querySelector('.variation_id');
		addToCart.dataLang;
		addToCart.localHosting = 'localhost:8080';
		/* addToCart.localHosting = 'localhost:80'; */
		addToCart.inputCertif.forEach(element => { 
			element.addEventListener('change', (e) => {
				e.preventDefault();
				addToCart.certifChoose = document.querySelector('input[name=attribute_pa_certification]:checked').value;
				addToCart.radios = document.querySelectorAll('input[type="radio"]:checked');
				if(addToCart.radios.length === 3) {
					addToCart.addToCartAction();
				}
			}) 	
		});
		addToCart.inputSize.forEach(element => { 
			element.addEventListener('change', (e) => {
				e.preventDefault();
				addToCart.sizeChoose = document.querySelector('input[name=attribute_pa_size]:checked').value;
				addToCart.radios = document.querySelectorAll('input[type="radio"]:checked');
				if(addToCart.radios.length === 3) {
					addToCart.addToCartAction();
				}		
			}) 	
		});
		addToCart.inputOption.forEach(element => {
			element.addEventListener('change', (e) => {
				e.preventDefault();
				addToCart.optionChoose = document.querySelector('input[name=attribute_pa_option]:checked').value;	
				addToCart.radios = document.querySelectorAll('input[type="radio"]:checked');	
				if(addToCart.radios.length === 3) {
					addToCart.addToCartAction();
				}		
			})
		})
	},	
	langImportFile: function() {
		let langName = 'en';
		switch (navigator.language.substring(0, 2)) {
			case 'fr':
				langName = 'fr';
				break;
			case 'es':
				langName = 'es';
				break;
			case 'en':
				langName = 'en';
				break;
			default:
				langName = 'en';
		}
		const json = `http://${addToCart.localHosting}/essai/content/themes/veldt/dist/js/lang.${langName}.js`;
    import(json)
			.then(module => {
				addToCart.dataLang = module.langage;
				addToCart.initElements();
			})
			.catch(error => console.log(error));
	},
	addToCartAction : function () {
		const results = [];
		const searchSkuField = addToCart.sizeChoose.replace('-', '');
		let option = 's';
		if(addToCart.optionChoose === 'standard') {
			option = 's';
		}
		else {
			option = 'l';
		}
		const search = addToCart.inputSku.value  + '-' + option + '-' + searchSkuField + '-' + addToCart.certifChoose;
		for (let i = 0 ; i < addToCart.dataJson.length ; i++)
		{
				if (addToCart.dataJson[i]['sku'] == search.toLowerCase()) {
						results.push(addToCart.dataJson[i]);
				}
		}
		addToCart.inputVariableId.value = results[0]['variation_id'];
		const stockMessage = results[0]['availability_html'];
		const variationPrice =  results[0]['display_price'];
		const stockHtml = document.querySelector('.deliveryMessage');
		const price = document.querySelector('.price');
		if(stockMessage.includes('in-stock')) {
			stockHtml.textContent = addToCart.dataLang.deliveryMessageInStock;
			price.textContent = variationPrice;
		}
		else {
			stockHtml.textContent = addToCart.dataLang.deliveryMessageOutOfStock;
			price.textContent = variationPrice;
		}
	},
}

document.addEventListener('DOMContentLoaded', addToCart.init);