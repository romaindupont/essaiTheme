const configurator = {
   init: function() {
    configurator.initElements();
		configurator.OpenCloseMenu();
		configurator.subMenuOpenClose();
		configurator.tabsOpenClose();
		configurator.clicOnEye();
    
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
		configurator.eyes = document.querySelectorAll('#eye');
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
			element.addEventListener('click', configurator.handleSubMenuOpenClose);
		});
		configurator.closeSubMenu.forEach(element => {
			element.addEventListener('click', configurator.handleSubMenuOpenClose);
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
	clicOnEye: function() {
		configurator.eyes.forEach(eye => eye.addEventListener('click', 
		() => {
			if(eye.querySelector('#on')){
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
				 `}
				 else {
					eye.innerHTML=`
					<path class="eye-on" id="on" d="M15.6,0.6c-8.3,0-15,6.7-15,15s6.7,15,15,15s15-6.7,15-15S23.9,0.6,15.6,0.6z M15.6,20.4c-5,0-9.1-4.8-9.1-4.8
					s1.5-1.7,3.7-3.1l2.1,2.1c-0.1,0.3-0.2,0.6-0.2,1c0,1.9,1.6,3.5,3.5,3.5c0.3,0,0.7-0.1,1-0.2l1.2,1.2C17.1,20.3,16.3,20.4,15.6,20.4
					z M13.9,16.2l1,1C14.5,17.1,14.1,16.7,13.9,16.2z M21,21.8L9.4,10.1l0.8-0.8L21.8,21L21,21.8z M16.2,13.9c0.5,0.2,0.8,0.6,1,1
					L16.2,13.9z M21,18.7l-2.1-2.1c0.1-0.3,0.2-0.6,0.2-1c0-1.9-1.6-3.5-3.5-3.5c-0.3,0-0.7,0.1-1,0.2l-1.2-1.2c0.7-0.2,1.4-0.3,2.2-0.3
					c5,0,9.1,4.8,9.1,4.8S23.3,17.3,21,18.7z"/>
					 `
				 }
		}
		));
	},
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', configurator.init);