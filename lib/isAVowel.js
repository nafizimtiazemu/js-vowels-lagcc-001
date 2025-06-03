'use strict';

var isAVowel = function(lttr){
  // your code goes here
  var vowel = ['a','e','i','o','u'];
  if (vowel.includes(lttr)) {
    return true;
  }
    return false;

};

module.exports = isAVowel;
