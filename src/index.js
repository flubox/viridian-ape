import React from 'react';
import {render} from 'react-dom';
import 'aframe';
import VirtualShowRoom from './VirtualShowRoom';

let config = {
    ...require('../config.json'),
    show: true,
    showOnlyProduct: false,
};

window.VirtualShowRoom = {
    show: () => doRender({...config, show: true}),
    hide: () => doRender({...config, show: false}),
    showOnlyProduct: () => doRender({...config, showOnlyProduct})
}

console.info('config', config);

const doRender = config => render(<VirtualShowRoom config={config}/>, document.querySelector('#root'));

document.addEventListener('DOMContentLoaded', () => doRender(config));
