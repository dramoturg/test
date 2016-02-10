export const calcScrollPosition = (el) => {
	let orientations = {'x': 'Left', 'y': 'Top'};
	
	return Object.keys(orientations).reduce((prev, current, index) => {
		let key = current;
		let orientation = orientations[key];
		
		let pageOffset = window[`page${key.toUpperCase()}Offset`];
		let scrollPosition =  document.documentElement[`scroll${orientation}`] || document.body[`scroll${orientation}`]
		return Object.assign(prev, {
			[key]: pageOffset || scrollPosition
		})
	},{})
}

export const addStyles = (element, styles) => {
	Object.keys(styles).forEach((property) => {
		element.style[property] = styles[property];
	})
}

export const getScrollBarSize = () => {
					
	const element = 	document.createElement('div');
	addStyles(element, {
		padding: 0,
		overflow: 'scroll',
		'box-sizing': 'border-box',
		width: '100px',
		height: '100px',
		overflow: 'scroll',
		opacity: 0
	})
	document.body.appendChild(element);
	
	const size = {
		vertical: element.offsetWidth  - element.clientWidth,
		horizontal: element.offsetHeight - element.clientHeight
	}
	
	document.body.removeChild(element);
	
	return size;

}

export const getBounds= (el) => {
	let doc;
	if (el === document) {
		doc = document;
		el = document.documentElement;
	} else {
		doc = el.ownerDocument;
	}

	const docEl = doc.documentElement;

	const box = {};
	const rect = el.getBoundingClientRect();
	for (let k in rect) {
		box[k] = rect[k];
	}

	if (typeof box.width === 'undefined') {
		box.width = document.body.scrollWidth - box.left - box.right;
	}
	if (typeof box.height === 'undefined') {
		box.height = document.body.scrollHeight - box.top - box.bottom;
	}

	box.top = box.top - docEl.clientTop;
	box.left = box.left - docEl.clientLeft;
	box.right = doc.body.clientWidth - box.width - box.left;
	box.bottom = doc.body.clientHeight - box.height - box.top;

	return box;
}

export default {
	calcScrollPosition,
	getScrollBarSize,
	getBounds
}