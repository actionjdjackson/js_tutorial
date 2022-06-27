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
    const lettersRegex = /[a-z]/gi;
    return (this.content.match(lettersRegex) || []).join("");
  }

  this.palindrome = function palindrome() {
    if( this.processedContent() ) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
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
