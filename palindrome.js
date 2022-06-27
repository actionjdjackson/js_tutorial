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
    return this.processor(this.content);
  }

  this.letters = function letters() {
    return this.content;
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  this.louder = function louder() {
    return this.content = this.content.toUpperCase();
  };
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }

}

TranslatedPhrase.prototype = new Phrase();
