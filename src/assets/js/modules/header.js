function headerMenu(w, h) {
	const headerNav = $('#nav');
	const headerMenu = $('#menu');
	const burgerNav = $('#burger-nav');

	if (w < 992) {
		if (!headerNav.hasClass('done')) {
			headerNav.addClass('done').appendTo(burgerNav);
		};
	} else {
		if (headerNav.hasClass('done')) {
			headerNav.removeClass('done').prependTo(headerMenu);
		};
	};
};


export function adaptiveHeaderMenu() {
	let w = $(window).outerWidth();
	let h = $(window).outerHeight();

	headerMenu(w, h);
}