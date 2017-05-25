var exec = require('cordova/exec');

exports.SPEAKER = 'speaker';
exports.EARPIECE = 'earpiece';
exports.NORMAL = 'normal';
exports.RINGTONE = 'ringtone';

exports.setAudioMode = function(mode, error) {
  cordova.exec(null, error, 'AudioTogglePlugin', 'setAudioMode', [mode]);
};
exports.getAudioMode = function(cb, error) {
  return cordova.exec(cb, error, 'AudioTogglePlugin', 'getAudioMode', []);
};
exports.setAudioModeById = function(mode, error) {
  cordova.exec(null, error, 'AudioTogglePlugin', 'setAudioModeById', [mode]);
};
exports.isSpeakerphoneOn = function(cb, error) {
  return cordova.exec(cb, error, 'AudioTogglePlugin', 'isSpeakerphoneOn', []);
};
exports.setSpeakerphoneOn = function(mode, error) {
  cordova.exec(null, error, 'AudioTogglePlugin', 'setSpeakerphoneOn', [mode]);
};
