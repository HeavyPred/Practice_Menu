let menubtn = document.getElementById('menubtn');
menubtn.addEventListener('click', openMenu);
let menu = document.getElementById('menu-container');

function openMenu(e) {
	if (menubtn.classList.contains('closed')) {
		menubtn.classList.add('opened');
		menubtn.classList.remove('closed');

		menu.classList.remove('close-anim');
		menu.classList.add('open-anim');
		menu.style.display = 'flex';
	}
	else {
		menubtn.classList.add('closed');
		menubtn.classList.remove('opened');
		menu.classList.remove('open-anim');
		menu.classList.add('close-anim');
		menu.addEventListener('transitioned', function(){
			menu.style.display = 'none';
		})
	}
}