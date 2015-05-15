import { overlayContext } from './page-elements.js';

export function headtrackerStatus() {
  console.log(event.status);
}

export function facetrackingEvent({ x, y, angle, detection, width, height }, context = overlayContext) {
  context.clearRect(0, 0, 640, 480);

  if (detection === 'CS') {
    context.translate(x, y);
    context.rotate(angle - (Math.PI / 2));
    context.strokeStyle = '#00CC00';
    context.strokeRect((-(width / 2)) >> 0, (-(height / 2)) >> 0, width, height);
    context.rotate((Math.PI / 2) - angle);
    context.translate(-x, -y);
  }
}
