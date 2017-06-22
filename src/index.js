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
    showOnlyProduct: () => doRender({...config, showOnlyProduct: true}),
    showAll: () => doRender({...config, showOnlyProduct: false}),
    selectProduct: productIndex => doRender({...config, current: {...config.current, product: productIndex}}),
    unselectProduct: productIndex => doRender({...config, current: {...config.current, product: -1}})
}

console.info('config', config);

const doRender = config => render(<VirtualShowRoom config={config}/>, document.querySelector('#root'));

document.addEventListener('DOMContentLoaded', () => doRender(config));
