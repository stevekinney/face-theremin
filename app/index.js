/* globals headtrackr */

require('./assets/style.scss');

// set up video and canvas elements needed

var videoInput = document.getElementById('input-video');
var canvasInput = document.getElementById('compare');
var canvasOverlay = document.getElementById('overlay');
var overlayContext = canvasOverlay.getContext('2d');

canvasOverlay.style.position = 'absolute';
canvasOverlay.style.top = '0px';
canvasOverlay.style.zIndex = '100001';
canvasOverlay.style.display = 'block';

document.addEventListener('headtrackrStatus', function(event) {
  console.log(event.status);
}, true);

// the face tracking setup

var htracker = new headtrackr.Tracker({ calcAngles: true, ui: false, headPosition: false });
htracker.init(videoInput, canvasInput);
htracker.start();

// for each facetracking event received draw rectangle around tracked face on canvas

document.addEventListener('facetrackingEvent', function(event) {
  overlayContext.clearRect(0, 0, 320, 240);

  if (event.detection === 'CS') {
    overlayContext.translate(event.x, event.y);
    overlayContext.rotate(event.angle - (Math.PI / 2));
    overlayContext.strokeStyle = '#00CC00';
    overlayContext.strokeRect((-(event.width / 2)) >> 0, (-(event.height / 2)) >> 0, event.width, event.height);
    overlayContext.rotate((Math.PI / 2) - event.angle);
    overlayContext.translate(-event.x, -event.y);
  }
});
