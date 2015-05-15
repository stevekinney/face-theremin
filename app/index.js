/* globals headtrackr */

require('./assets/style.scss');

import configureCanvasOverlay from './lib/configure-canvas-overlay.js';
import { headtrackrStatus, facetrackingEvent } from './lib/tracking-events.js';

const videoInput = document.getElementById('input-video');
const canvasInput = document.getElementById('compare');
const canvasOverlay = document.getElementById('overlay');
const overlayContext = canvasOverlay.getContext('2d');

configureCanvasOverlay(canvasOverlay);

document.addEventListener('headtrackrStatus', headtrackrStatus, true);
document.addEventListener('facetrackingEvent', facetrackingEvent.bind(null, overlayContext));

const htracker = new headtrackr.Tracker({ calcAngles: true, ui: true, headPosition: true });
htracker.init(videoInput, canvasInput);
htracker.start();
