(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  return !this.match(/\S/g);
}

Array.prototype.last = function() {
  return this[this.length-1];
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  this.letters = function letters() {
    const letterRegex = /[a-z]/i;
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder() {
    return this.content = this.content.toUpperCase();
  }
};

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }

}

TranslatedPhrase.prototype = new Phrase();

},{}],2:[function(require,module,exports){
let Phrase = require("actionjdjackson-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});

},{"actionjdjackson-palindrome":1}]},{},[2]);
