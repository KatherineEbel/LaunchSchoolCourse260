let interpretations = {
  hearsShout(sentence) {
    if (sentence.trim().length === 0 ) { return false; }
    if (sentence.replace(/[0-9\W]/g, '').length === 0) { return false; }
    return sentence.toUpperCase() === sentence;
  },
  hearsQuestion(sentence) {
    return !this.hearsShout(sentence) && sentence.trim().slice(-1) === '?';
  },
  hearsNothing(sentence) {
    return sentence.trim().length === 0;
  }
};

var Bob = function() {};

Bob.prototype.interpretations = interpretations;
Bob.prototype.responses = {
  shout: 'Whoa, chill out!',
  question: 'Sure.',
  nothing: 'Fine. Be that way!',
  anythingElse: 'Whatever.'
}
Bob.prototype.interpret = function(sentence) {
  let response = this.responses.anythingElse;
  if (this.interpretations.hearsShout(sentence)) {
    response = this.responses.shout;
  } else if (this.interpretations.hearsQuestion(sentence)) {
    response = this.responses.question;
  } else if (this.interpretations.hearsNothing(sentence)) {
    response = this.responses.nothing;
  }
  return response;
};

Bob.prototype.hey = function(sentence) {
  return this.interpret(sentence);
};

module.exports = Bob;
