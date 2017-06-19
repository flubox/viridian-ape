import React from 'react';
import {render} from 'react-dom';
import 'aframe';
import VirtualShowRoom from './VirtualShowRoom';

const doRender = () => render(<VirtualShowRoom/>, document.querySelector('#root'));

document.addEventListener('DOMContentLoaded', () => doRender());
