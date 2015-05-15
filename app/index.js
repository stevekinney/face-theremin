/* globals headtrackr */

require('./assets/style.scss');

import configureCanvasOverlay from './lib/configure-canvas-overlay';
import synthesizer from './lib/synthesizer';
import { updateFaceStatistics } from './lib/update-statistics';
import { headtrackrStatus, facetrackingEvent } from './lib/tracking-events';

import {
  videoInput,
  canvasInput,
  canvasOverlay } from './lib/page-elements';

configureCanvasOverlay(canvasOverlay);

document.addEventListener('headtrackrStatus', headtrackrStatus, true);
document.addEventListener('facetrackingEvent', facetrackingEvent);
document.addEventListener('facetrackingEvent', updateFaceStatistics);
document.addEventListener('facetrackingEvent', synthesizer.update.bind(synthesizer));

const htracker = new headtrackr.Tracker({ calcAngles: true, ui: true, headPosition: true });
htracker.init(videoInput, canvasInput);
htracker.start();
