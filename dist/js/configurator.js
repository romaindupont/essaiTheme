
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
		configurator.checkboxInput.forEach(tab => tab.addEventListener('change', () => {
			const checkInput = document.querySelector('.sd-tab-radio:checked + .sd-tab-label > #onglet');
			const notCheckInput = document.querySelectorAll('.sd-tab-radio:not(:checked) + .sd-tab-label > #onglet');
			console.log(tab, checkInput,notCheckInput)
			if (tab.checked) {
				if(checkInput.querySelector('#off')) {
					checkInput.innerHTML=`
					<path class="tab_on" id="on" d="M300,46h-30c-11,0-20-9-20-20v0c0-11-9-20-20-20H70c-11,0-20,9-20,20v0c0,11-9,20-20,20H0"/>
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
  },
	handleTabsChange: function(e, tab) {
		
  },
  // Responsable de la structure du form
   /*createForm: function() {
    const formElement = document.createElement('form');
    formElement.className='form';
    formElement.addEventListener('submit',app.handleFormSubmit);
    //const todoElement = document.getElementById('todo');
    app.todoElement.appendChild(formElement);
    app.inputElement = document.createElement('input');
    app.inputElement.className='form-field';
    app.inputElement.setAttribute('type', 'text');
    app.inputElement.placeholder='Ajouter une tâche';
    formElement.appendChild(app.inputElement);
  },
  // responsable de la structure du compteur
  createCounter:function() {
    app.h1Element = document.createElement('h1');
    app.h1Element.className='counter';
    app.setCounterValue();
    app.todoElement.appendChild(app.h1Element);
  },
  // responsable de la structure de la liste
  createList:function() {
    app.ulElement = document.createElement('ul');
    app.ulElement.className='list';
    app.todoElement.appendChild(app.ulElement);
    app.state.forEach((currentTask)=> {
      app.createListItem(app.ulElement, currentTask);
    });
  },
  // responsable de la structure d'un élemente de la liste
  createListItem:function(parent, task) {
    const liElement = document.createElement('li');
    parent.appendChild(liElement);
    const labelElement = document.createElement('label');
    labelElement.className='list-item';
    
    labelElement.textContent=task.title;
    liElement.appendChild(labelElement);
    const checkboxElement = document.createElement('input');
    checkboxElement.type='checkbox';
    checkboxElement.addEventListener('change', () => {
      task.done = !task.done;
      app.init();
    });
    labelElement.prepend(checkboxElement);
    if(task.done) {
      labelElement.classList.add('list-item--off');


      checkboxElement.checked=true;
    }
  },
  handleFormSubmit:function(event) {
    event.preventDefault();
    // dorénavant lorsque j'ai besoin de modifié ce qui s'affiche dans l'appli je vais modifier l'état de l'appli dans un premier temps, c'est ma source de vérité, c'est de laà que doit partir la représentation de mon application
    app.state.push({
      title: app.inputElement.value,
      done: false,
    });
    // apres modif de l'état je regenere l'interface
    app.init();
    // vider le champs
    app.inputElement.value='';
    

  },
  // change la valeur affichée dans le compteur
  setCounterValue: function() {
    
    const undoneTasks = app.state.filter((task) => !task.done);
    const counter = undoneTasks.length;
    if (counter === 0) {
      app.h1Element.textContent = `Aucune tache en cours`;
    }
    else if (counter === 1) {
      app.h1Element.textContent = `Une tache en cours`;
    }
    else {
      app.h1Element.textContent = `${counter} taches en cours`;
    }
  }, */
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', configurator.init);