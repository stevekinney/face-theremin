/* globals tracking */

require('./assets/style');

import $ from 'jquery';
import context from './lib/audio-context';
import createOnOffSwitch from './lib/adjust-volume';

const $x = $('.information.x');
const $y = $('.information.y');

const oscillator = context.createOscillator();
const gain = context.createGain();

const volume = gain.gain;
volume.value = 0;

createOnOffSwitch($('.on-off'), volume);

oscillator.connect(gain);
gain.connect(context.destination);
oscillator.start();

const tracker = new tracking.ObjectTracker('face');
tracking.track('#video', tracker, { camera: true });

tracker.on('track', function(event) {
  if (event.data.length) {
    const face = event.data[0];

    oscillator.frequency.value = face.x * 2 + 220;

    $x.text(face.x);
    $y.text(face.y);
  }
});
