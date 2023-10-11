import * as header from '../js/modules/header.js';
import * as burger from '../js/modules/burger.js';

header.adaptiveHeaderMenu();
burger.burgerClick();

$(window).resize(function () {
	header.adaptiveHeaderMenu();
});