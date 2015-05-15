export const statusMessages = {
  "whitebalance" : "checking for stability of camera whitebalance",
  "detecting" : "Detecting face",
  "hints" : "Hmm. Detecting the face is taking a long time",
  "redetecting" : "Lost track of face, redetecting",
  "lost" : "Lost track of face",
  "found" : "Tracking face"
};

export const supportMessages = {
  "no getUserMedia" : "Unfortunately, <a href='http://dev.w3.org/2011/webrtc/editor/getusermedia.html'>getUserMedia</a> is not supported in your browser. Try <a href='http://www.opera.com/browser/'>downloading Opera 12</a> or <a href='http://caniuse.com/stream'>another browser that supports getUserMedia</a>. Now using fallback video for facedetection.",
  "no camera" : "No camera found. Using fallback video for facedetection."
};
