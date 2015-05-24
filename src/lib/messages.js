export const statusMessages = {
  'whitebalance': 'Alright, I am checking for the stability of camera\'s whitebalance.',
  'detecting': 'I am detecting your beautiful face.',
  'hints': 'Hmm. Detecting your face is taking a long time. It\'s not you, it\'s me.',
  'redetecting': 'I lost track of your gorgeous face. Give me a second to redetect it.',
  'lost': 'i lost your wonderful face. Hopefully, it\'s not gone forever.',
  'found': 'There\'s that amazing face of yours.'
};

export const supportMessages = {
  'no getUserMedia': 'Unfortunately, <a href="http://dev.w3.org/2011/webrtc/editor/getusermedia.html">getUserMedia</a> is not supported in your browser. Try <a href="http://www.opera.com/browser/">downloading Opera 12</a> or <a href="http://caniuse.com/stream">another browser that supports getUserMedia</a>. Now using fallback video for facedetection.',
  'no camera': 'No camera found. Using fallback video for facedetection.'
};
