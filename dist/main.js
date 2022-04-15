const SubMenu = document.querySelectorAll('#menu-main-menu > .menu-item > a');
const SubMenuMark1 = document.querySelector('.mark1 > ul');
const SubMenuMark2 = document.querySelector('.mark2 > ul');
const imageHelmetMenuMark1 = document.querySelector('.menu-depth-1 .helmetImage');
/* const imageHelmetMenuMark2 = document.querySelector('.menu-depth-2 .helmetImage'); */
const OpenMenu = (e) => {
	if(e.path[0].innerHTML === 'Mark 1') {
		SubMenuMark1.style.display = SubMenuMark1.style.display === 'flex' ? 'none' : 'flex';
		SubMenuMark2.style.display = SubMenuMark2.style.display === 'none' ? '' : 'none';
		//imageHelmetMenuMark1.src = "content/themes/veldt/assets/images/imageMotorHelmet.png";
	}
	if(e.path[0].innerHTML === 'Mark 2') {
		SubMenuMark2.style.display = SubMenuMark2.style.display === 'flex' ? 'none' : 'flex';
		SubMenuMark1.style.display = SubMenuMark1.style.display === 'none' ? '' : 'none';
		//imageHelmetMenuMark2.src = "content/themes/veldt/assets/images/imageMotorHelmet.png";
	}
}
SubMenu.forEach(element => element.addEventListener("click", OpenMenu));