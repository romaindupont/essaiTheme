const menu = {
	init: function() {
		menu.initElements();
		menu.OpenCloseSubMenu();
 	},
 	initElements: function(e) {
		menu.mainMenuMobile = document.querySelector('.main-header__menu-mobile-logo');
		menu.mainMenu = document.querySelector('.main-header > .first_menu-configurator');
		menu.body = document.querySelector('body');
		menu.subMenu = document.querySelectorAll('.custom_menu_class > #menu-main-menu > .menu-item > a');
		menu.subMenuMobile = document.querySelectorAll(' #menu-main-menu-1 > .menu-item > a');
		menu.mainHeader = document.querySelector('.main-header');
		menu.subMenuMark1 = document.querySelector('.mark1 > ul');
		menu.subMenuMark2 = document.querySelector('.mark2 > ul');
		menu.linkActiveMark1 = document.querySelector('.mark1 > a');
		menu.linkActiveMark2 = document.querySelector('.mark2 > a');
		menu.imageHelmetMenuMark1 = document.querySelectorAll('.menu-depth-1 .helmetImage');
		menu.image1 = "content/themes/veldt/assets/images/imageMotorHelmet.png";
		menu.image2 = "content/themes/veldt/assets/images/veldt-logo.svg";
		menu.submenuTitle = document.querySelectorAll('.SubmenuTitle');
		menu.menuMark1 = 'Mark 1 - Helmet Motorbike';
		menu.menuMark2 = 'Mark 2 - Helmet';
		menu.closeMenu = document.querySelectorAll('.closeMenu');
		menu.closeLogo = document.querySelector('.closeLogo');
		menu.subMenuMark1Mobile = document.querySelector('.first_menu-configurator-nav > #menu-main-menu-1 > .mark1 > .menu-depth-1');
		menu.subMenuMark2Mobile = document.querySelector('.first_menu-configurator-nav > #menu-main-menu-1 > .mark2 > .menu-depth-1');
		menu.loc = window.location;
	},
	OpenCloseSubMenu: function() {
		menu.subMenu.forEach(element => element.addEventListener("click", menu.OpenMenuAction));
		menu.closeMenu.forEach(element => element.addEventListener("click", menu.OpenMenuAction));
		window.addEventListener("scroll", menu.onScroll);
		menu.mainMenuMobile.addEventListener('click', (e) => { 
			menu.mainMenu.style.display = menu.mainMenu.style.display === 'flex' ? 'none' : 'flex';
		});
		menu.closeLogo.addEventListener('click',(e) => menu.mainMenu.style.display = 'none');
		menu.subMenuMobile.forEach(element => element.addEventListener("click", menu.OpenMenuAction));

	},
	OpenMenuAction: function(e) {
		if(e.path[0].innerHTML === 'Mark 1') {	
			menu.subMenuMark1.style.display = menu.subMenuMark1.style.display === 'grid' ? 'none' : 'grid';
			menu.body.style.overflowY = 'hidden';
			menu.subMenuMark1.style.display === 'grid' ? menu.mainHeader.style.paddingBottom = "20px" : menu.mainHeader.style.paddingBottom = "0px";
			menu.subMenuMark1.style.display === 'grid' ? menu.linkActiveMark1.classList.add('active') : menu.linkActiveMark1.classList.remove('active');
			menu.subMenuMark1.style.display === 'grid' ? menu.linkActiveMark2.classList.remove('active') : menu.linkActiveMark2.classList.remove('active');
			menu.subMenuMark2.style.display = menu.subMenuMark2.style.display === 'none' ? '' : 'none';
			menu.subMenuMark1.style.display === 'grid' ? menu.body.style.overflowY = 'hidden' : menu.body.style.overflowY = 'auto';
			menu.subMenuMark1Mobile.style.display = menu.subMenuMark1Mobile.style.display === 'flex' ? 'none' : 'flex';
			menu.subMenuMark2Mobile.style.display = menu.subMenuMark2Mobile.style.display ===  'none' ? '' : 'none';
			menu.imageHelmetMenuMark1[0].src = 	menu.loc.origin + '/essai/' + menu.image1;
			menu.submenuTitle[0].innerHTML = menu.menuMark1;
			menu.closeMenu[0].addEventListener("click", ()=> {
				menu.subMenuMark1.style.display = menu.subMenuMark1.style.display === 'none' ? '' : 'none';
				menu.mainHeader.style.paddingBottom = "0px";
				menu.linkActiveMark2.classList.remove('active');
				menu.linkActiveMark1.classList.remove('active');
				menu.body.style.overflowY = 'auto';
			});
		}
		if(e.path[0].innerHTML === 'Mark 2') {
			menu.subMenuMark2.style.display = menu.subMenuMark2.style.display === 'grid' ? 'none' : 'grid';
			menu.subMenuMark2.style.display === 'grid' ? menu.mainHeader.style.paddingBottom = "20px" : menu.mainHeader.style.paddingBottom = "0px";
			menu.subMenuMark2.style.display === 'grid' ? menu.linkActiveMark2.classList.add('active') : menu.linkActiveMark2.classList.remove('active');
			menu.subMenuMark2.style.display === 'grid' ? menu.linkActiveMark1.classList.remove('active') : menu.linkActiveMark1.classList.remove('active');
			menu.subMenuMark2.style.display === 'grid' ? menu.body.style.overflowY = 'hidden' : menu.body.style.overflowY = 'auto';
			menu.subMenuMark1.style.display = menu.subMenuMark1.style.display === 'none' ? '' : 'none';
			menu.subMenuMark2Mobile.style.display = menu.subMenuMark2Mobile.style.display === 'flex' ? 'none' : 'flex';
			menu.subMenuMark1Mobile.style.display = menu.subMenuMark1Mobile.style.display ===  'none' ? '' : 'none';
			menu.imageHelmetMenuMark1[1].src = menu.loc.origin + '/essai/' + menu.image1;
			menu.submenuTitle[1].innerHTML = menu.menuMark2;
			menu.closeMenu[1].addEventListener("click", ()=> {
				menu.subMenuMark2.style.display = menu.subMenuMark2.style.display === 'none' ? '' : 'none';
				menu.mainHeader.style.paddingBottom = "0px";
				menu.linkActiveMark2.classList.remove('active');
				menu.linkActiveMark1.classList.remove('active');
				menu.body.style.overflowY = 'auto';
			});
		}
		if(e.path[0].className === 'closeMenu') {
			menu.subMenuMark1Mobile.style.display = menu.subMenuMark1Mobile.style.display ===  'none' ? '' : 'none';
			menu.subMenuMark2Mobile.style.display = menu.subMenuMark2Mobile.style.display ===  'none' ? '' : 'none';
			menu.body.style.overflowY = 'auto';
		}
	},
	onScroll: function() {
		let bascule = document.body.offsetHeight - window.innerHeight;
		if(window.scrollY+500 >= bascule) {
			document.querySelector('.main-header').style.opacity=0;
			document.querySelector('.footer__real').style.opacity=1;
			document.querySelector('.homepage-footer').style.zIndex = '41';
		}
		if(window.scrollY+100 < bascule) {
			document.querySelector('.main-header').style.opacity=1;
			document.querySelector('.footer__real').style.opacity=0;
			document.querySelector('.homepage-footer').style.zIndex = '38';
		}
	},
};

document.addEventListener('DOMContentLoaded', menu.init);