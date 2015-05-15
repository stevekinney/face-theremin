const template = require('../templates/face-statistics.hbs');

import $ from 'jquery';

const $statistics = $('#statistics');

export function headtrackerStatus() {
  console.log(event.status);
}

export function facetrackingEvent(overlayContext, { x, y, angle, detection, width, height }) {
  overlayContext.clearRect(0, 0, 640, 480);

  $statistics.html(template({x: x, y: y, width: width, height}));

  if (detection === 'CS') {
    overlayContext.translate(x, y);
    overlayContext.rotate(angle - (Math.PI / 2));
    overlayContext.strokeStyle = '#00CC00';
    overlayContext.strokeRect((-(width / 2)) >> 0, (-(height / 2)) >> 0, width, height);
    overlayContext.rotate((Math.PI / 2) - angle);
    overlayContext.translate(-x, -y);
  }
}
