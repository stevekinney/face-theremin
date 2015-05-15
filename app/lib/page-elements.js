import $ from 'jquery';
import synthesizer from './synthesizer';

export const videoInput = document.getElementById('input-video');
export const canvasInput = document.getElementById('compare');
export const canvasOverlay = document.getElementById('overlay');
export const onOffButton = document.getElementById('on-off');
export const overlayContext = canvasOverlay.getContext('2d');

$(onOffButton).click(function () {

  $(this).toggleClass('off');

  if ($(this).hasClass('off')) {
    $(this).text('Off');
    synthesizer.start();
  } else {
    $(this).text('On');
    synthesizer.stop();
  }

});
