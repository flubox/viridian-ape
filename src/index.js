import React from 'react';
import {render} from 'react-dom';
import 'aframe';
import VirtualShowRoom from './VirtualShowRoom';

const config = require('../config.json');

console.info('config', config);

const doRender = () => render(<VirtualShowRoom config={config}/>, document.querySelector('#root'));

document.addEventListener('DOMContentLoaded', () => doRender());
