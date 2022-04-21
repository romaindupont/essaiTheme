
 const configurator = {
   init: function() {
    configurator.initElements();
		configurator.OpenCloseMenu();
		configurator.subMenuOpenClose();
		configurator.tabsOpenClose();
    
  },
  initElements: function() {
    configurator.menu = document.querySelector('.header-configurator-left-menu');
		configurator.firstMenu = document.querySelector('.first_menu-configurator');
		configurator.close = document.querySelector('.closeLogo');
		configurator.subMenu = document.querySelectorAll('.first_menu-configurator-nav > #menu-main-menu > .menu-item > a');
		configurator.closeSubMenu = document.querySelectorAll('.closeMenu');
		configurator.checkboxInput = document.querySelectorAll('.sd-tab-radio');
		configurator.labelOne = document.querySelector('.label1');
		configurator.labelTwo = document.querySelector('.label2');
		configurator.labelThree = document.querySelector('.label3');
		configurator.footerConfigurator = document.querySelector('.footer-configurator');
		configurator.downButton = document.querySelector('#down');

  },
	OpenCloseMenu: function() {
    configurator.menu.addEventListener('click', configurator.handleMenuOpen);
		configurator.close.addEventListener('click', configurator.handleMenuClose);
  },
	handleMenuOpen: function() {
    configurator.firstMenu.style.visibility = configurator.firstMenu.style.visibility === 'visible' ? 'visible' : 'visible';
		configurator.firstMenu.style.visibility === 'visible' ? configurator.firstMenu.style.left = '0' : configurator.firstMenu.style.left = '-100%';
  },
	handleMenuClose: function() {
		configurator.firstMenu.style.visibility === 'visible' ? configurator.firstMenu.style.left = '-100%' : configurator.firstMenu.style.left = '0';
		configurator.firstMenu.style.visibility === 'visible' ? configurator.firstMenu.style.transition = 'left 600ms ease-in-out' : '';
  },
	subMenuOpenClose: function() {
		configurator.subMenu.forEach(element => {
			element.addEventListener('click', configurator.handleSubMenuOpenClose)
		});
		configurator.closeSubMenu.forEach(element => {
			element.addEventListener('click', configurator.handleSubMenuOpenClose)
		});
  },
	handleSubMenuOpenClose: function(e) {
		const SubMenuMark1 = document.querySelector('.mark1 > ul');
		const SubMenuMark2 = document.querySelector('.mark2 > ul');
		const linkActiveMark1 = document.querySelector('.mark1 > a');
		const linkActiveMark2 = document.querySelector('.mark2 > a');
		if(e.path[0].innerHTML === 'Mark 1') {
			SubMenuMark1.style.display = SubMenuMark1.style.display === 'flex' ? 'none' : 'flex';
			SubMenuMark2.style.display = SubMenuMark2.style.display === 'none' ? '' : 'none';
			SubMenuMark1.style.display === 'flex' ? linkActiveMark1.classList.add('active') : linkActiveMark1.classList.remove('active');
			SubMenuMark1.style.display === 'flex' ? linkActiveMark2.classList.remove('active') : linkActiveMark2.classList.remove('active');
		}
		if(e.path[0].innerHTML === 'Mark 2') {
			SubMenuMark2.style.display = SubMenuMark2.style.display === 'flex' ? 'none' : 'flex';
			SubMenuMark1.style.display = SubMenuMark1.style.display === 'none' ? '' : 'none';
			SubMenuMark2.style.display === 'flex' ? linkActiveMark2.classList.add('active') : linkActiveMark2.classList.remove('active');
			SubMenuMark2.style.display === 'flex' ? linkActiveMark1.classList.remove('active') : linkActiveMark1.classList.remove('active');
		}
		if(e.path[0].className === 'closeMenu') {
			SubMenuMark2.style.display = SubMenuMark2.style.display === 'none' ? '' : 'none';
			SubMenuMark1.style.display = SubMenuMark1.style.display === 'none' ? '' : 'none';
		}
  },
	tabsOpenClose: function() {
		configurator.downButton.addEventListener('click', configurator.handleOpenCloseTabs);
  },
	handleOpenCloseTabs: function() {
		configurator.footerConfigurator.classList.toggle('openIt');
	},
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', configurator.init);