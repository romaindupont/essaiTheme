
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
		configurator.screen = window.screen.width;
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
		/* if(configurator.screen >= 800) { */
		configurator.checkboxInput.forEach(tab => tab.addEventListener('change', () => {
			const checkInput = document.querySelector('.sd-tab-radio:checked + .sd-tab-label > #onglet');
			const notCheckInput = document.querySelectorAll('.sd-tab-radio:not(:checked) + .sd-tab-label > #onglet');
			if (tab.checked) {
				if(checkInput.querySelector('#off')) {
					checkInput.innerHTML=`
						<path class="st0" d="M300,43h-30c-11,0-20-9-20-20l0,0c0-11-9-20-20-20H70c-11,0-20,9-20,20l0,0c0,11-9,20-20,20H0v2h300V43z"/>
						<path class="tab_on" id="on" d="M300,43h-30c-11,0-20-9-20-20l0,0c0-11-9-20-20-20H70c-11,0-20,9-20,20l0,0c0,11-9,20-20,20H0"/>
						<path class="st0" d="M264.3,43.1c-75.4,0.1-150.8,0.2-226.2,0.3v-1.3c74.5,0,149-0.1,223.6-0.1c0.3,0.2,0.7,0.4,1.1,0.5
						C263.2,42.7,263.8,42.9,264.3,43.1z"/>
					 `
				}
			}
			notCheckInput.forEach(check =>  {
				if(check.querySelector('#on')) {
					check.innerHTML=`
						<path class="tab_off" id="off" d="M300,46c0,0-50,0-50,0V23c0-11-9-20-20-20L70,3c-11,0-20,9-20,20v20c0,0-50,0-50,0"/>
					`
				}
			})
			}))
  	/* } */
	},
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', configurator.init);