import util from  './util';
let elements = Array.from(document.querySelectorAll('.testBound'));
elements.forEach((element) => {
	let inner = element.querySelector('span');
	let rect = util.getBounds(element);
	inner.innerText = JSON.stringify(rect);
})