
const configurator = {
   init: function() {
			configurator.initElements();
			configurator.langImportFile();
			configurator.OpenCloseMenu();
			configurator.subMenuOpenClose();
			configurator.tabsOpenClose();
			configurator.clicOnEye();
			/* configurator.jsonFileImport();  */
			configurator.slider();
			configurator.tabChoice();
  },
  initElements: function() {
    configurator.menu = document.querySelector('.header-configurator-left-menu');
		configurator.firstMenu = document.querySelector('.first_menu-configurator');
		configurator.close = document.querySelector('.closeLogo');
		configurator.subMenu = document.querySelectorAll('.first_menu-configurator-nav > #menu-main-menu > .menu-item > a');
		configurator.closeSubMenu = document.querySelectorAll('.closeMenu');
		configurator.checkboxInput = document.querySelector('.sd-tab-radio:checked');
		configurator.labelOne = document.querySelector('.label1');
		configurator.labelTwo = document.querySelector('.label2');
		configurator.labelThree = document.querySelector('.label3');
		configurator.tabOne = document.querySelector('#tabone');
		configurator.tabTwo = document.querySelector('#tabtwo');
		configurator.tabThree = document.querySelector('#tabthree');
		configurator.footerConfigurator = document.querySelector('.footer-configurator');
		configurator.downButton = document.querySelector('#down');
		configurator.eyes = document.querySelectorAll('#eye');
		configurator.SubMenuMark1 = document.querySelector('.mark1 > ul');
		configurator.SubMenuMark2 = document.querySelector('.mark2 > ul');
		configurator.linkActiveMark1 = document.querySelector('.mark1 > a');
		configurator.linkActiveMark2 = document.querySelector('.mark2 > a');
		configurator.buttonChoice = document.querySelectorAll('.buttonChoice');
		configurator.sizeButtonChoice = document.querySelectorAll('.SizebuttonChoice');
		configurator.frameChoice = document.querySelectorAll('.frame > .allScrew');
		configurator.shortChoice = document.querySelectorAll('.short_visor_page > .allScrew');
		configurator.longChoice = document.querySelectorAll('.long_visor_page > .allScrew');
		configurator.screwChoice = document.querySelectorAll('.allScrew');
		configurator.roundColor = document.querySelectorAll('.roundColor');
		configurator.elementName = document.querySelector('.elementPicker');
		configurator.chinguardElementName = document.querySelector('.chinguard > .elementChoice > .elementPicker');
		configurator.elementNumber = document.querySelector('.numberStep');
		configurator.leftChoice = document.querySelector('.leftChoice');
		configurator.rightChoice = document.querySelector('.rightChoice');
		configurator.leftChoiceChin = document.querySelector('.chinguard > .elementChoice > .leftChoice');
		configurator.rightChoiceChin = document.querySelector('.chinguard > .elementChoice > .rightChoice');
		configurator.buttonAdd = document.querySelector('.buttonAdd');
		configurator.inputVisor = document.querySelectorAll('input[name="visor"]');
		configurator.dataJson;
		configurator.dataLang;
		configurator.titreArrayChin = [];
		configurator.phpFileChin = [];
		configurator.helpMessageChin = [];
		configurator.titreArrayHelmet = [];
		configurator.phpFileHelmet = [];
		configurator.helpMessageHelmet = [];
		configurator.numberArrayPosition = 0;
		configurator.logoMenuOption = document.querySelector('#menu_option');
		configurator.menuOption = document.querySelector('.menu_option');
		configurator.logoCloseMenuOption = document.querySelector('#closeOption'); 
		configurator.logoHelp = document.querySelector('.info_logo'); 
		configurator.messagesHelp = document.querySelector('.messagesHelp'); 
		configurator.popupHelp = document.querySelector('.popupHelp'); 
		configurator.popupHelp_closeLogo = document.querySelector('.popupHelp_closeLogo'); 
		configurator.menuOptionElement = document.querySelectorAll('.menu_option > div > div > p');
		configurator.exportButton = document.querySelector('.export');
		configurator.exportWindow = document.querySelector('footer > .exportWindow');
		configurator.exportCloseButton = document.querySelector('#exportWindow_closeLogo');
		configurator.exportDownload = document.querySelector('#download');
		configurator.addChinguard = document.querySelector('.chinguardAddButton');
		configurator.addVisor = document.querySelector('.visorAddButton');
		configurator.chinguardTemplate = document.querySelector('.chinguard');
		configurator.visorTemplate = document.querySelector('.visor');
		configurator.eraseChinguard = document.querySelector('.eraseChinguard');
		configurator.eraseVisor = document.querySelector('.eraseVisor');
		configurator.patternList = document.querySelectorAll('.patternList');
		configurator.colorList = document.querySelectorAll('.colorList');
		configurator.colorListType = document.querySelectorAll('.colorListType');
/* 		configurator.localHosting = 'localhost:8080'; */
    configurator.localHosting = 'localhost:80';
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
		const json = `http://${configurator.localHosting}/essai/content/themes/veldt/dist/js/lang.${langName}.js`;
    import(json)
			.then(module => {
				configurator.dataLang = module.langage;
				configurator.jsonFileImport();
			})
			.catch(error => console.log(error));
	},
	jsonFileImport: function() {
		const json = `http://${configurator.localHosting}/essai/content/themes/veldt/dist/json/${configurator.dataLang.jsonFileToImport}.json`;
    fetch(json)
			.then(response => response.json())
			.then(data => {
				configurator.dataJson = data;
				configurator.initHelmetTitleElement();
				configurator.initChinguardElement();
				configurator.initVisorElement();
			})
			.catch(error => console.log(error));
  },
	OpenCloseMenu: function() {
    configurator.menu.addEventListener('click', configurator.handleMenuOpen);
		configurator.close.addEventListener('click', configurator.handleMenuClose);
		configurator.logoMenuOption.addEventListener('click', (e) => configurator.menuOption.style.display = 'grid');
		configurator.logoCloseMenuOption.addEventListener('click', (e) => configurator.menuOption.style.display = 'none');
		configurator.logoHelp.addEventListener('click', () => configurator.popupHelp.style.display = 'block');
		configurator.popupHelp_closeLogo.addEventListener('click', () => configurator.popupHelp.style.display = 'none');
		configurator.exportButton.addEventListener('click', () => configurator.exportWindow.style.display = 'flex');
		configurator.exportCloseButton.addEventListener('click', () => configurator.exportWindow.style.display = 'none');
		configurator.exportDownload.addEventListener('click', configurator.pdfFileMade);
		configurator.addChinguard.addEventListener('click', configurator.buttonChangeFunction);
		configurator.addVisor.addEventListener('click', configurator.buttonChangeFunction);
  },
	handleMenuOpen: function() {
    configurator.firstMenu.style.visibility = configurator.firstMenu.style.visibility === 'visible' ? 'visible' : 'visible';
		configurator.firstMenu.style.visibility === 'visible' ? configurator.firstMenu.style.left = '0' : configurator.firstMenu.style.left = '-200%';
  },
	handleMenuClose: function() {
		configurator.firstMenu.style.visibility === 'visible' ? configurator.firstMenu.style.left = '-200%' : configurator.firstMenu.style.left = '0';
		configurator.firstMenu.style.visibility === 'visible' ? configurator.firstMenu.style.transition = 'left 600ms ease-in-out' : '';
		configurator.SubMenuMark1.style.display = 'none';
		configurator.SubMenuMark2.style.display = 'none';
		configurator.linkActiveMark2.classList.remove('active');
		configurator.linkActiveMark1.classList.remove('active');
  },
	subMenuOpenClose: function() {
		configurator.subMenu.forEach(element => {
			element.addEventListener('click', configurator.handleSubMenuOpenClose);
		});
		configurator.closeSubMenu.forEach(element => {
			element.addEventListener('click', configurator.handleSubMenuOpenClose);
		});
  },
	handleSubMenuOpenClose: function(e) {
		if(e.path[0].innerHTML === 'Mark 1') {
			configurator.SubMenuMark1.style.display = configurator.SubMenuMark1.style.display === 'flex' ? 'none' : 'flex';
			configurator.SubMenuMark2.style.display = configurator.SubMenuMark2.style.display === 'none' ? '' : 'none';
			configurator.SubMenuMark1.style.display === 'flex' ? configurator.linkActiveMark1.classList.add('active') : configurator.linkActiveMark1.classList.remove('active');
			configurator.SubMenuMark1.style.display === 'flex' ? configurator.linkActiveMark2.classList.remove('active') : configurator.linkActiveMark2.classList.remove('active');
		}
		if(e.path[0].innerHTML === 'Mark 2') {
			configurator.SubMenuMark2.style.display = configurator.SubMenuMark2.style.display === 'flex' ? 'none' : 'flex';
			configurator.SubMenuMark1.style.display = configurator.SubMenuMark1.style.display === 'none' ? '' : 'none';
			configurator.SubMenuMark2.style.display === 'flex' ? configurator.linkActiveMark2.classList.add('active') : configurator.linkActiveMark2.classList.remove('active');
			configurator.SubMenuMark2.style.display === 'flex' ? configurator.linkActiveMark1.classList.remove('active') : configurator.linkActiveMark1.classList.remove('active');
		}
		if(e.path[0].className === 'closeMenu') {
			configurator.SubMenuMark2.style.display = configurator.SubMenuMark2.style.display === 'none' ? '' : 'none';
			configurator.SubMenuMark1.style.display = configurator.SubMenuMark1.style.display === 'none' ? '' : 'none';
		}
  },
	tabsOpenClose: function() {
		configurator.downButton.addEventListener('click', configurator.handleOpenCloseTabs);
  },
	handleOpenCloseTabs: function() {
		configurator.footerConfigurator.classList.toggle('openIt');	
		configurator.menuOption.classList.toggle('openMenuOption');
		configurator.logoHelp.classList.toggle('logoAppear');
		configurator.exportWindow.classList.toggle('openExportMenu');
		configurator.exportButton.classList.toggle('positionExportLogo');
	},
	buttonChoiceListener: function() {
		configurator.buttonChoice.forEach(button => button.addEventListener('click', (e) => {
			configurator.buttonChoice.forEach(button => button.classList.remove('activeButton'))
			e.target.classList.toggle('activeButton');
		}));
		configurator.screwChoice.forEach(image => image.addEventListener('click', (e) => {
			configurator.screwChoice.forEach(image => image.classList.remove('activeImage'))
			image.classList.toggle('activeImage');
		}));
		configurator.roundColor.forEach(image => image.addEventListener('click', (e) => {
			configurator.roundColor.forEach(image => image.classList.remove('activeColor'))
			image.classList.toggle('activeColor');
		}));
		configurator.sizeButtonChoice.forEach(button => button.addEventListener('click', (e) => {
			configurator.sizeButtonChoice.forEach(button => button.classList.remove('activeButton'))
			e.target.classList.toggle('activeButton');
		}));
		if (configurator.buttonAdd) {
			configurator.buttonAdd.addEventListener('click', (e) => {
				configurator.buttonAdd.style.display = 'none';
				const numberWindows = document.querySelector('.numberWindows');
				numberWindows.style.display = 'flex';
			});
		};
		configurator.frameChoice.forEach(image => image.addEventListener('click', (e) => {
			configurator.frameChoice.forEach(image => image.classList.remove('activeImage'))
			image.classList.toggle('activeImage');
		}));
		configurator.shortChoice.forEach(image => image.addEventListener('click', (e) => {
			configurator.shortChoice.forEach(image => image.classList.remove('activeImage'))
			image.classList.toggle('activeImage');
		}));
		configurator.longChoice.forEach(image => image.addEventListener('click', (e) => {
			configurator.longChoice.forEach(image => image.classList.remove('activeImage'))
			image.classList.toggle('activeImage');
		}));
		configurator.inputVisor.forEach(radioButton => radioButton.addEventListener('change', (e) => {
			configurator.visorPage(e);
		}));
		configurator.menuOptionElement.forEach(button => button.addEventListener('click', configurator.menuOptionClicAction));
		configurator.patternList.forEach(list => list.addEventListener('scroll', (e) => configurator.scrollEffectOnList(e, list)));
		configurator.colorList.forEach(list => list.addEventListener('scroll', (e) => configurator.scrollEffectOnList(e, list)));
		configurator.colorListType.forEach(list => list.addEventListener('scroll', (e) => configurator.scrollEffectOnList(e, list)));
	},
	scrollEffectOnList: function(e, list) {
		let ratio = 0;
		if(list.classList[0] === 'colorListType') {
			ratio = 3.5;
		}
		else {
			ratio = 2.5;
		}
		if(e.target.getBoundingClientRect().width < 878) {
			let calcul = e.target.clientWidth/ratio - e.target.scrollLeft;
			if(calcul < `-${e.target.clientWidth/5}`) {
				list.style.transform = `translate3d(-${calcul}, 0px, 0px)`; 
			}else {
				list.style.transform = `translate3d(${calcul}px, 0px, 0px)`; 
			}
		}
	},
	menuOptionClicAction: function(e) {
		let parts = '';
		let configuratorName = '';
		let template = document.querySelector('.template');
		if (configurator.footerConfigurator.classList[1]) {
			configurator.menuOption.style.display = 'none';
			if (e.path[1].className === 'divHelmetp') {
				configurator.tabOne.checked = true;
				configurator.tabTwo.checked = false;
				configurator.numberArrayPosition = configurator.phpFileHelmet.indexOf(e.target.classList.value);
				configurator.elementName.innerHTML = configurator.titreArrayHelmet[configurator.numberArrayPosition] + "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/'+ configurator.titreArrayHelmet.length + "</span>";
				configurator.messagesHelp.textContent = configurator.helpMessageHelmet[configurator.numberArrayPosition];
				configuratorName = 'configurator-helmet-step';
				template = document.querySelector('.helmet > .template');
			}
			if (e.path[1].className === 'divChinp') {
				configurator.tabOne.checked = false;
				configurator.tabTwo.checked = true;
				configurator.numberArrayPosition = configurator.phpFileChin.indexOf(e.target.classList.value);
				configurator.chinguardElementName.innerHTML = configurator.titreArrayChin[configurator.numberArrayPosition] + "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/' + configurator.titreArrayChin.length + "</span>";
				configurator.messagesHelp.textContent = configurator.helpMessageChin[configurator.numberArrayPosition];
				configuratorName = 'configurator-chinguard-step';
				template = document.querySelector('.chinguard > .template');
			}
		}
		else {
			configurator.menuOption.style.display = 'none';
			configurator.menuOption.classList.toggle('openMenuOption');
			configurator.footerConfigurator.classList.toggle('openIt');	
			if (e.path[1].className === 'divHelmetp') {
				configurator.tabOne.checked = true;
				configurator.tabTwo.checked = false;
				configurator.numberArrayPosition = configurator.phpFileHelmet.indexOf(e.target.classList.value);
				configurator.elementName.innerHTML = configurator.titreArrayHelmet[configurator.numberArrayPosition] + "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/'+ configurator.titreArrayHelmet.length + "</span>";
				configurator.messagesHelp.textContent = configurator.helpMessageHelmet[configurator.numberArrayPosition];
				configuratorName = 'configurator-helmet-step';
				template = document.querySelector('.helmet > .template');
			}
			if (e.path[1].className === 'divChinp') {
				configurator.tabOne.checked = false;
				configurator.tabTwo.checked = true;
				configurator.numberArrayPosition = configurator.phpFileChin.indexOf(e.target.classList.value);
				configurator.chinguardElementName.innerHTML = configurator.titreArrayChin[configurator.numberArrayPosition] + "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/' + configurator.titreArrayChin.length + "</span>";
				configurator.messagesHelp.textContent = configurator.helpMessageChin[configurator.numberArrayPosition];
				configuratorName = 'configurator-chinguard-step';
				template = document.querySelector('.chinguard > .template');
			}
		}
		parts = `http://${configurator.localHosting}/essai/content/themes/veldt/template-parts/${configuratorName}/${e.target.classList.value}.php`;
		fetch(parts)
			.then(response => response.text())
			.then(data => {
				template.innerHTML = data;
				configurator.buttonChoice = document.querySelectorAll('.buttonChoice');
				configurator.screwChoice = document.querySelectorAll('.allScrew');
				configurator.roundColor = document.querySelectorAll('.roundColor');
				configurator.buttonAdd = document.querySelector('.buttonAdd');
				configurator.sizeButtonChoice = document.querySelectorAll('.SizebuttonChoice');
				configurator.colorList = document.querySelectorAll('.colorList');
				configurator.buttonChoiceListener();
			})
			.catch(error => console.log(error));	
	},
	clicOnEye: function() {
		configurator.eyes.forEach(eye => eye.addEventListener('click', 
			() => {
				if(eye.querySelector('#on')) {
					eye.innerHTML=`
						<g>
						<path class="eye_off" id="off" d="M15.6,1.6c7.7,0,14,6.3,14,14s-6.3,14-14,14s-14-6.3-14-14S7.9,1.6,15.6,1.6 M15.6,0.6c-8.3,0-15,6.7-15,15
							s6.7,15,15,15s15-6.7,15-15S23.9,0.6,15.6,0.6L15.6,0.6z"/>
						</g>
						<g>
							<circle class="eye_off" cx="15.6" cy="15.6" r="1.8"/>
							<path class="eye_off" d="M15.6,10.8c-5,0-9.1,4.8-9.1,4.8s4.1,4.8,9.1,4.8c5,0,9.1-4.8,9.1-4.8S20.6,10.8,15.6,10.8z M15.6,19.1
								c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C19.1,17.5,17.5,19.1,15.6,19.1z"/>
						</g>
					`;
				}
				else {
					eye.innerHTML=`
						<path class="eye-on" id="on" d="M15.6,0.6c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S23.9,0.6,15.6,0.6z M15.6,20.4c-5,0-9.1-4.8-9.1-4.8
						s1.5-1.7,3.7-3.1l2.1,2.1c-0.1,0.3-0.2,0.6-0.2,1c0,1.9,1.6,3.5,3.5,3.5c0.3,0,0.7-0.1,1-0.2l1.2,1.2C17.1,20.3,16.3,20.4,15.6,20.4
						z M13.9,16.2l1,1C14.5,17.1,14.1,16.7,13.9,16.2z M21,21.8L9.4,10.1l0.8-0.8L21.8,21L21,21.8z M16.2,13.9c0.5,0.2,0.8,0.6,1,1
						L16.2,13.9z M21,18.7l-2.1-2.1c0.1-0.3,0.2-0.6,0.2-1c0-1.9-1.6-3.5-3.5-3.5c-0.3,0-0.7,0.1-1,0.2l-1.2-1.2c0.7-0.2,1.4-0.3,2.2-0.3
						c5,0,9.1,4.8,9.1,4.8S23.3,17.3,21,18.7z"/>
						`;
				}
			}
		));
	},
	initHelmetTitleElement: function() {
		for(let i = 0; i < Object.keys(configurator.dataJson.helmetElement).length;i++) {
			let obj = Object.keys(configurator.dataJson.helmetElement)[i];
			configurator.titreArrayHelmet.push(configurator.dataJson.helmetElement[`${obj}`].title);
			configurator.phpFileHelmet.push(configurator.dataJson.helmetElement[`${obj}`].phpFile);
			configurator.helpMessageHelmet.push(configurator.dataJson.helmetElement[`${obj}`].helpMessage);
		}
		const divHelmet = document.createElement("div");
		divHelmet.classList.add('divHelmetList');
		configurator.menuOption.appendChild(divHelmet);
		const h3 = document.createElement("h3");
		let titleMenuStep =`${configurator.dataLang.titleMenuStepHelmet} (${configurator.titreArrayHelmet.length} ${configurator.dataLang.step})`;
		h3.textContent = titleMenuStep;
		divHelmet.appendChild(h3);
		const divPHelmet = document.createElement("div");
		divPHelmet.classList.add('divHelmetp');
		divHelmet.appendChild(divPHelmet);
		for(let j = 0; j < configurator.titreArrayHelmet.length; j++) {
			configurator.titreArrayHelmet[j];
			const p = document.createElement("p");
			p.classList.add(configurator.phpFileHelmet[j]);
			p.textContent = (j+1) + ' ' + '-' + ' ' + configurator.titreArrayHelmet[j];
			divPHelmet.appendChild(p);
		}
		configurator.elementName.innerHTML = configurator.titreArrayHelmet[0] +  "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/'+ configurator.titreArrayHelmet.length + "</span>";
		configurator.messagesHelp.textContent =  configurator.helpMessageHelmet[configurator.numberArrayPosition];
		const parts = `http://${configurator.localHosting}/essai/content/themes/veldt/template-parts/configurator-helmet-step/${configurator.phpFileHelmet[configurator.numberArrayPosition]}.php`;	
		fetch(parts)
			.then(response => response.text())
			.then(data => {
				document.querySelector('.template').innerHTML = data;
				configurator.buttonChoice = document.querySelectorAll('.buttonChoice');
				configurator.patternList = document.querySelectorAll('.patternList');
				configurator.colorList = document.querySelectorAll('.colorList');
				configurator.colorListType = document.querySelectorAll('.colorListType');
				configurator.buttonChoiceListener();
			})
			.catch(error => console.log(error));
	},
	initChinguardElement: function() {
		for(let i = 0; i<Object.keys(configurator.dataJson.chinguardElement).length;i++) {
			let obj = Object.keys(configurator.dataJson.chinguardElement)[i];
			configurator.titreArrayChin.push(configurator.dataJson.chinguardElement[`${obj}`].title);
			configurator.phpFileChin.push(configurator.dataJson.chinguardElement[`${obj}`].phpFile);
			configurator.helpMessageChin.push(configurator.dataJson.chinguardElement[`${obj}`].helpMessage);
		}
		const divChin = document.createElement("div");
		divChin.classList.add('divChinList');
		configurator.menuOption.appendChild(divChin);
		const h3 = document.createElement("h3");

		let titleMenuStep =		`${configurator.dataLang.titleMenuStepChinguard} (${configurator.titreArrayChin.length} ${configurator.dataLang.step})`;
		h3.textContent = titleMenuStep;
		divChin.appendChild(h3);
		const divPChin = document.createElement("div");
		divPChin.classList.add('divChinp');
		divChin.appendChild(divPChin);
		for(let j = 0; j < configurator.titreArrayChin.length; j++) {
			configurator.titreArrayChin[j];
			const p = document.createElement("p");
			p.classList.add(configurator.phpFileChin[j]);
			p.textContent = (j+1) + ' ' + '-' + ' ' + configurator.titreArrayChin[j];
			divPChin.appendChild(p);
		}
		configurator.chinguardElementName.innerHTML = configurator.titreArrayChin[0] +  "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/'+ configurator.titreArrayChin.length + "</span>";
		configurator.messagesHelp.textContent =  configurator.helpMessageChin[configurator.numberArrayPosition];
		const parts = `http://${configurator.localHosting}/essai/content/themes/veldt/template-parts/configurator-chinguard-step/${configurator.phpFileChin[configurator.numberArrayPosition]}.php`;
    fetch(parts)
			.then(response => response.text())
			.then(data => {
				document.querySelector('.chinguard > .template').innerHTML = data;
				configurator.buttonChoice = document.querySelectorAll('.buttonChoice');
				configurator.patternList = document.querySelectorAll('.patternList');
				configurator.colorList = document.querySelectorAll('.colorList');
				configurator.colorListType = document.querySelectorAll('.colorListType');
				configurator.buttonChoiceListener();
			})
			.catch(error => console.log(error));
	},
	initVisorElement: function() {
		let titleMenuStep = configurator.dataLang.titleMenuStepVisor;
		let helpMessage = configurator.dataLang.visorHelpMessage;
		const divVisor = document.createElement("div");
		divVisor.classList.add('divVisorList');
		configurator.menuOption.appendChild(divVisor);
		const h3 = document.createElement("h3");
		h3.textContent = titleMenuStep;
		divVisor.appendChild(h3);
		configurator.messagesHelp.textContent =  helpMessage;
		const parts = `http://${configurator.localHosting}/essai/content/themes/veldt/template-parts/configurator-visor-step/visor.php`;
    fetch(parts)
			.then(response => response.text())
			.then(data => {
				document.querySelector('.visor > .template').innerHTML = data;
				configurator.buttonChoice = document.querySelectorAll('.buttonChoice');
				configurator.inputVisor = document.querySelectorAll('input[name="visor"]');
				configurator.frameChoice = document.querySelectorAll('.frame > .allScrew');
				configurator.shortChoice = document.querySelectorAll('.short_visor_page > .allScrew');
				configurator.longChoice = document.querySelectorAll('.long_visor_page > .allScrew');
				configurator.roundColor = document.querySelectorAll('.roundColor');
				configurator.menuOptionElement = document.querySelectorAll('.menu_option > div > div > p');
				configurator.patternList = document.querySelectorAll('.patternList');
				configurator.colorList = document.querySelectorAll('.colorList');
				configurator.colorListType = document.querySelectorAll('.colorListType');
				configurator.buttonChoiceListener();
			})
			.catch(error => console.log(error));
	},
	tabChoice: function() {
		configurator.tabOne.addEventListener('change', (e) => configurator.slider);
		configurator.tabTwo.addEventListener('change', (e) => configurator.slider);
		configurator.tabThree.addEventListener('change', (e) => configurator.slider);
	},
	slider: function() {
		configurator.leftChoice.addEventListener('click', configurator.changeNameSlider);
		configurator.rightChoice.addEventListener('click', configurator.changeNameSlider);
		configurator.leftChoiceChin.addEventListener('click', configurator.changeNameSlider);
		configurator.rightChoiceChin.addEventListener('click', configurator.changeNameSlider);
	},
	changeNameSlider: function(e) {
		let sens;
		if(e.target.classList[0] === 'leftChoice') {
			sens = -1;
			configurator.changeSliderTitle(sens);
		} 
		if(e.target.classList[0] === 'rightChoice') {
			sens = 1;
 			configurator.changeSliderTitle(sens);
		}
  },
	changeSliderTitle: function(sens) {		
		configurator.numberArrayPosition = configurator.numberArrayPosition + sens;
		configurator.popupHelp.style.display = 'none';
		if (configurator.tabOne.checked) {
			if (configurator.numberArrayPosition < 0) {
				configurator.numberArrayPosition = configurator.titreArrayHelmet.length - 1;
			}
			if (configurator.numberArrayPosition > configurator.titreArrayHelmet.length - 1) {
				configurator.numberArrayPosition = 0;
			}
			configurator.elementName.innerHTML = configurator.titreArrayHelmet[configurator.numberArrayPosition] + "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/'+ configurator.titreArrayHelmet.length + "</span>";
			configurator.messagesHelp.textContent = configurator.helpMessageHelmet[configurator.numberArrayPosition];
			const parts = `http://${configurator.localHosting}/essai/content/themes/veldt/template-parts/configurator-helmet-step/${configurator.phpFileHelmet[configurator.numberArrayPosition]}.php`;
			fetch(parts)
				.then(response => response.text())
				.then(data => {
					document.querySelector('.template').innerHTML = data;
					configurator.buttonChoice = document.querySelectorAll('.buttonChoice');
					configurator.screwChoice = document.querySelectorAll('.allScrew');
					configurator.roundColor = document.querySelectorAll('.roundColor');
					configurator.buttonAdd = document.querySelector('.buttonAdd');
					configurator.sizeButtonChoice = document.querySelectorAll('.SizebuttonChoice');
					configurator.patternList = document.querySelectorAll('.patternList');
					configurator.colorList = document.querySelectorAll('.colorList');
					configurator.colorListType = document.querySelectorAll('.colorListType');
					configurator.buttonChoiceListener();
				})
				.catch(error => console.log(error));
			}
			if (configurator.tabTwo.checked) {
				if (configurator.numberArrayPosition < 0) {
					configurator.numberArrayPosition = configurator.titreArrayChin.length - 1;
				}
				if (configurator.numberArrayPosition > configurator.titreArrayChin.length - 1) {
					configurator.numberArrayPosition = 0;
				}
				configurator.chinguardElementName.innerHTML = configurator.titreArrayChin[configurator.numberArrayPosition] + "<span class='number'>" + (configurator.numberArrayPosition + 1) + '/' + configurator.titreArrayChin.length + "</span>";
				configurator.messagesHelp.textContent = configurator.helpMessageChin[configurator.numberArrayPosition];
				const parts = `http://${configurator.localHosting}/essai/content/themes/veldt/template-parts/configurator-chinguard-step/${configurator.phpFileChin[configurator.numberArrayPosition]}.php`;
				fetch(parts)
					.then(response => response.text())
					.then(data => {
						document.querySelector('.chinguard > .template').innerHTML = data;
						configurator.buttonChoice = document.querySelectorAll('.buttonChoice');
						configurator.roundColor = document.querySelectorAll('.roundColor');
						configurator.screwChoice = document.querySelectorAll('.allScrew');
						configurator.patternList = document.querySelectorAll('.patternList');
						configurator.colorList = document.querySelectorAll('.colorList');
						configurator.colorListType = document.querySelectorAll('.colorListType');
						configurator.buttonChoiceListener();
					})
					.catch(error => console.log(error));
			}
	},
	visorPage: function(e) {
		const displayFrame = document.querySelector('.frame');
		const displayShort = document.querySelector('.short_visor_page');
		const displayLong = document.querySelector('.long_visor_page');
		const displayPeak = document.querySelector('.peak_visor_page');
		switch (e.target.value) {
			case 'long_visor':
				displayFrame.style.display = 'flex';
				displayShort.style.display = 'none';
				displayLong.style.display = 'flex';
				displayPeak.style.display = 'none';
				break;
			case 'short_visor':
				displayFrame.style.display = 'flex';
				displayShort.style.display = 'flex';
				displayLong.style.display = 'none';
				displayPeak.style.display = 'none';
				break;
			case 'peak_visor':
				displayFrame.style.display = 'none';
				displayShort.style.display = 'none';
				displayLong.style.display = 'none';
				displayPeak.style.display = 'flex';
				break;
			default:
				displayFrame.style.display = 'none';
				displayShort.style.display = 'none';
				displayLong.style.display = 'none';
				displayPeak.style.display = 'none';
		}
	},
	pdfFileMade: function() {
		const { jsPDF } = window.jspdf;
		const doc = new jsPDF({
			orientation: "portrait",
			unit: "mm",
			format: [210, 297]
		});
		const imagesQuarterPosition = document.querySelector('.menuImageToShare_quarterPosition');
		const imagesLeftPosition = document.querySelector('.menuImageToShare_leftPosition');
		const imagesFrontPosition = document.querySelector('.menuImageToShare_frontPosition');
		const imagesBackPosition = document.querySelector('.menuImageToShare_backPosition');
		const LogoVeldt = `http://${configurator.localHosting}/essai/content/themes/veldt/assets/images/logoVeldt.png`;
		doc.addImage(LogoVeldt, 80, 5, 50, 10);
		doc.addImage(imagesQuarterPosition, 50, 45, 50, 50);
		doc.addImage(imagesLeftPosition, 50, 95, 50, 50);
		doc.addImage(imagesFrontPosition, 100, 45, 50, 50);
		doc.addImage(imagesBackPosition, 100, 95, 50, 50);
		doc.text("your link", 50, 25);
		doc.save("VeldtHelmet.pdf");
	},
	buttonChangeFunction: function(e) {
		switch (e.target.classList[1]) {
			case 'chinguardAddButton':
				configurator.chinguardTemplate.style.display = 'block';
				configurator.addChinguard.textContent = configurator.dataLang.textErase;
				configurator.addChinguard.classList.add('eraseChinguard');
				configurator.eraseChinguard = document.querySelector('.eraseChinguard');
				configurator.eraseChinguard.addEventListener('click', configurator.buttonEraseToAdd);
				configurator.addChinguard.removeEventListener('click',configurator.buttonChangeFunction);
				break;
			case 'visorAddButton':
				configurator.visorTemplate.style.display = 'block';
				configurator.addVisor.textContent= configurator.dataLang.textErase;
				configurator.addVisor.classList.add('eraseVisor');
				configurator.eraseVisor = document.querySelector('.eraseVisor');
				configurator.eraseVisor.addEventListener('click', configurator.buttonEraseToAdd);
				configurator.addVisor.removeEventListener('click',configurator.buttonChangeFunction);
				break;
			default:
		}
	},
	buttonEraseToAdd: function(e) {
		switch (e.target.classList[2]) {
			case 'eraseChinguard':
				configurator.chinguardTemplate.style.display = 'none';
				configurator.addChinguard.classList.remove('eraseChinguard');
				configurator.addChinguard.textContent= configurator.dataLang.textAdd;
				configurator.addChinguard = document.querySelector('.chinguardAddButton');
				configurator.addChinguard.addEventListener('click', configurator.buttonChangeFunction);
			break;
			case 'eraseVisor':
				configurator.visorTemplate.style.display = 'none';
				configurator.addVisor.classList.remove('eraseVisor');
				configurator.addVisor.textContent= configurator.dataLang.textAdd;
				configurator.addVisor = document.querySelector('.visorAddButton');
				configurator.addVisor.addEventListener('click', configurator.buttonChangeFunction);
			break;
			default:
			}
	},
};

document.addEventListener('DOMContentLoaded', configurator.init);