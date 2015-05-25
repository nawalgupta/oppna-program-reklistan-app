'use strict';

import Images from './../shared/utils/images';
import customUi from './../shared/modules/ui';
import {inspect} from './../shared/utils/debug';
import ActionBar from './../shared/viewmodel/ActionBar';

let page;
let actionBar;

function loaded() {
}

function navigatedTo(args) {
	customUi.setViewDefaults();
	page = args.object;
	actionBar = new ActionBar('Den här sidan', 'Förra sidan', 1);
	page.bindingContext = {
		actionBar: actionBar
	};
}

function drugsTap() {
	actionBar.selectedIndex = 0;
}

function adviceTap() {
	actionBar.selectedIndex = 1;
}



module.exports.loaded = loaded;
module.exports.navigatedTo = navigatedTo;
module.exports.drugsTap = drugsTap;
module.exports.adviceTap = adviceTap;
