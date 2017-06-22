import React from 'react';
import {render} from 'react-dom';
import 'aframe';
import VirtualShowRoom from './VirtualShowRoom';

window.config = {
    ...require('../config.json'),
    show: true,
    showOnlyProduct: false,
};

window.VirtualShowRoom = {
    show: () => doRender({...window.config, show: true}),
    hide: () => doRender({...window.config, show: false}),
    showOnlyProduct: productIndex => doRender({...window.config, showOnlyProduct: true, current: {...window.config.current, product: productIndex}}),
    showAll: () => doRender({...window.config, showOnlyProduct: false}),
    selectProduct: productIndex => doRender({...window.config, current: {...window.config.current, product: productIndex}}),
    unselectProduct: productIndex => doRender({...window.config, current: {...window.config.current, product: -1, camera: -1}})
}

console.info('config', config);

const doRender = config => {
    window.config = config;
    render(<VirtualShowRoom config={config}/>, document.querySelector('#root'));
}

document.addEventListener('DOMContentLoaded', () => doRender(config));
