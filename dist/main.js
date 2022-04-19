const body = document.querySelector('body');
const SubMenu = document.querySelectorAll('#menu-main-menu > .menu-item > a');
const MainHeader = document.querySelector('.main-header');
const SubMenuMark1 = document.querySelector('.mark1 > ul');
const SubMenuMark2 = document.querySelector('.mark2 > ul');
const linkActiveMark1 = document.querySelector('.mark1 > a');
const linkActiveMark2 = document.querySelector('.mark2 > a');
const imageHelmetMenuMark1 = document.querySelectorAll('.menu-depth-1 .helmetImage');
const image1 = "content/themes/veldt/assets/images/imageMotorHelmet.png";
const image2 = "content/themes/veldt/assets/images/veldt-logo.svg";
const submenuTitle = document.querySelectorAll('.SubmenuTitle');
const menuMark1 = 'Mark 1 - Helmet Motorbike';
const menuMark2 = 'Mark 2 - Helmet';
const closeMenu = document.querySelectorAll('.closeMenu');

const OpenMenu = (e) => {
	if(e.path[0].innerHTML === 'Mark 1') {
		SubMenuMark1.style.display = SubMenuMark1.style.display === 'grid' ? 'none' : 'grid';
		body.style.overflowY = 'hidden';
		SubMenuMark1.style.display === 'grid' ? MainHeader.style.paddingBottom = "20px" : MainHeader.style.paddingBottom = "0px";
		SubMenuMark1.style.display === 'grid' ? linkActiveMark1.classList.add('active') : linkActiveMark1.classList.remove('active');
		SubMenuMark1.style.display === 'grid' ? linkActiveMark2.classList.remove('active') : linkActiveMark2.classList.remove('active');
		SubMenuMark2.style.display = SubMenuMark2.style.display === 'none' ? '' : 'none';
		SubMenuMark1.style.display === 'grid' ? body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';

		imageHelmetMenuMark1[0].src = image1;
		submenuTitle[0].innerHTML= menuMark1;
		closeMenu[0].addEventListener("click", ()=> {
			SubMenuMark1.style.display = SubMenuMark1.style.display === 'none' ? '' : 'none';
			MainHeader.style.paddingBottom = "0px";
			linkActiveMark2.classList.remove('active');
			linkActiveMark1.classList.remove('active');
			body.style.overflowY = 'auto';
		});
	}
	if(e.path[0].innerHTML === 'Mark 2') {
		SubMenuMark2.style.display = SubMenuMark2.style.display === 'grid' ? 'none' : 'grid';
		
		SubMenuMark2.style.display === 'grid' ? MainHeader.style.paddingBottom = "20px" : MainHeader.style.paddingBottom = "0px";
		SubMenuMark2.style.display === 'grid' ? linkActiveMark2.classList.add('active') : linkActiveMark2.classList.remove('active');
		SubMenuMark2.style.display === 'grid' ? linkActiveMark1.classList.remove('active') : linkActiveMark1.classList.remove('active');
		SubMenuMark2.style.display === 'grid' ? body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';

 		SubMenuMark1.style.display = SubMenuMark1.style.display === 'none' ? '' : 'none';
		imageHelmetMenuMark1[1].src = image1;
		submenuTitle[1].innerHTML= menuMark2;
		closeMenu[1].addEventListener("click", ()=> {
			SubMenuMark2.style.display = SubMenuMark2.style.display === 'none' ? '' : 'none';
			MainHeader.style.paddingBottom = "0px";
			linkActiveMark2.classList.remove('active');
			linkActiveMark1.classList.remove('active');
			body.style.overflowY = 'auto';
		});
	}

}
SubMenu.forEach(element => element.addEventListener("click", OpenMenu));


const onScroll = () => {
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
}
window.addEventListener("scroll", onScroll)