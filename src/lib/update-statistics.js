import $ from 'jquery';

const $faceStatistics = $('#face-statistics');
const $synthStatistics = $('#synth-statistics');

const synthStatisticsTemplate = require('../templates/synth-statistics.hbs');
const faceStatisticsTemplate = require('../templates/face-statistics.hbs');

export function updateFaceStatistics(data) {
  $faceStatistics.html(faceStatisticsTemplate(data));
}

export function updateSynthStatistics(data) {
  $synthStatistics.html(synthStatisticsTemplate(data));
}
