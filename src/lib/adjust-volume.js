import $ from 'jquery';

export default function (element, volume) {
  $(element).click(function (event) {
    if (!volume.value) {
      volume.value = 1;
      $(this).text('Off');
    } else {
      volume.value = 0;
      $(this).text('On');
    }
  });
}
