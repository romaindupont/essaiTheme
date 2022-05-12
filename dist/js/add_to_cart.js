const addToCart = {
	init: function() {
    addToCart.initElements();
  },
	initElements: function() {
		addToCart.inputSku = document.querySelector('.sku');
		addToCart.certif = document.querySelector('input[name=attribute_pa_certification]:checked');
		addToCart.size = document.querySelector('input[name=attribute_pa_size]:checked');
		addToCart.inputCertif = document.querySelectorAll('input[name=attribute_pa_certification]');
		addToCart.inputSize = document.querySelectorAll('input[name=attribute_pa_size]');
		addToCart.certifChoose = '';
		addToCart.sizeChoose = '';
		addToCart.variationTable = localStorage.getItem("variationTable");
		addToCart.dataJson = JSON.parse(addToCart.variationTable);
		addToCart.personsMap = new Map(Object.entries(addToCart.dataJson));
		addToCart.inputVariableId = document.querySelector('.variation_id');
		addToCart.inputCertif.forEach(element => { 
			element.addEventListener('change', (e) => {
				e.preventDefault();
				addToCart.certifChoose = document.querySelector('input[name=attribute_pa_certification]:checked').value;
				if(document.querySelector('input[name=attribute_pa_size]:checked') !== null) {
					const results = [];
					const searchSkuField = addToCart.sizeChoose.replace('-', '');
					const search = addToCart.inputSku.value + '-' + searchSkuField + '-' + addToCart.certifChoose;
					for (let i = 0 ; i < addToCart.dataJson.length ; i++)
					{
							if (addToCart.dataJson[i]['sku'] == search.toLowerCase()) {
									results.push(addToCart.dataJson[i]);
							}
					}
					addToCart.inputVariableId.value = results[0]['variation_id'];
				}
			}) 	
		});
		addToCart.inputSize.forEach(element => { 
			element.addEventListener('change', (e) => {
				e.preventDefault();
				addToCart.sizeChoose = document.querySelector('input[name=attribute_pa_size]:checked').value;
				if(document.querySelector('input[name=attribute_pa_certification]:checked') !== null) {
				const results = [];
 				const searchSkuField = addToCart.sizeChoose.replace('-', '');
				 const search = addToCart.inputSku.value + '-' + searchSkuField + '-' + addToCart.certifChoose;
				 for (let i = 0 ; i < addToCart.dataJson.length ; i++)
				{
						if (addToCart.dataJson[i]['sku'] == search.toLowerCase()) {
								results.push(addToCart.dataJson[i]);
						}
				}
				addToCart.inputVariableId.value = results[0]['variation_id'];}
			}) 	
		});
	},	

}

document.addEventListener('DOMContentLoaded', addToCart.init);