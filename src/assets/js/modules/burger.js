const burger = $('#burger');
const burgerMenu = $('#burger-menu');
const closeBurgerMenu = $('#burger-menu-close');
const body = $('body');

export function burgerClick() {
	burger.on('click', showBurgerMenu);
	closeBurgerMenu.on('click', showBurgerMenu);

	$(window).resize(() => {
		burgerMenu.removeClass('active');
		body.removeClass('lock');
	});
};

function showBurgerMenu() {
	if (!burgerMenu.hasClass('active')) {

		burgerMenu.addClass('active');
		body.addClass('lock')

	} else if (burgerMenu.hasClass('active')) {

		burgerMenu.removeClass('active');
		body.removeClass('lock');
	}
};