import context from './audio-context';
import { updateSynthStatistics } from './update-statistics';

const oscillator = context.createOscillator();
const gainNode = context.createGain();

oscillator.connect(gainNode);
gainNode.connect(context.destination);

gainNode.gain.value = 0;
oscillator.start(0);

export default {
  oscillator: oscillator,
  gain: gainNode,

  isOn: false,

  update({x, height}) {

    const frequency = x * 1.5 + 220;
    const gain = height / 150;

    if (this.isOn) {
      this.oscillator.frequency.value = frequency;
      this.gain.gain.value = gain;
    }

    updateSynthStatistics(format(frequency, gain));
  },

  start() {
    this.isOn = true;
    this.gain.gain.value = 1;
  },

  stop() {
    this.isOn = false;
    this.gain.gain.value = 0;
  }
};

function format(frequency, gain) {
  return {
    frequency: frequency.toFixed(2),
    gain: gain.toFixed(2)
  };
}
