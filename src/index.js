import util from  './util';
import Popover from './popover';

let elements = Array.from(document.querySelectorAll('.testBound'));
elements.forEach((element, index) => {
	let inner = element.querySelector('span');
	let rect = util.getBounds(element);
	inner.innerText = JSON.stringify(rect);
	
	let popover = new Popover(element, {
		
		modifiers: [`n${index}`],
		text: `Popover n${index}`
		
	});
})


