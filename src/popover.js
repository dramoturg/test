import bem from 'dx-util/src/bem/bem.js';
import util from  './util';

const BEM_BLOCK = 'popover';

const defaultProps = {
	eventType: 'click',
	autoHide: true,
	modifiers: [],
	isShownOnce: false
};

class Popover {
 
	constructor(trigger, props = {}) {
	   this.props = Object.assign({}, defaultProps, props);
	   this.isVisible = false;
	   this.trigger = trigger;
	   
	   this._create(); 
	   this.hide();
	   this.initListeners(trigger);
	   
	   this.show = this.show.bind(this);
	   this.hide = this.hide.bind(this);
	}
	
	initListeners() {
		
		
		this.trigger.addEventListener('click', (event) => {
			this.toggle();
		}, true);
		
	}
		
	_create() {
		let block = document.createElement("div");	
		block.classList.add(BEM_BLOCK);
		block.innerHTML = `<div class="${bem(BEM_BLOCK, 'content')}"></div>`;
		if (this.props.text) {
			block.lastChild.innerText = this.props.text;	
		}
		
		this.block = document.body.appendChild(block);
		
	}	
	
	_setPosition() {
		let rect = util.getBounds(this.trigger);
		console.log(rect);
		this.block.style.left = `${rect.left}px`;
		this.block.style.top  = `${rect.top}px`;
	}	
	
	toggle() {
		if(this.isVisible) {
			this.hide();
		} else {
			this.show();
		}
	}
	
	show() {
		let modifiers = this.props.modifiers.slice();
		modifiers.push('visible');
		
		this._setPosition();
		
		this.block.className = bem(BEM_BLOCK, modifiers);
		this.isVisible = true;
	}
	
	hide() {
		let modifiers = this.props.modifiers.slice();
		modifiers.push('hidden');
		this.block.className = bem(BEM_BLOCK, modifiers);
		this.isVisible = false;
	}
}

export default Popover;