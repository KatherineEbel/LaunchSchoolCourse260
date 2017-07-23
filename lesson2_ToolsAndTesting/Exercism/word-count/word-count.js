let isInternationalCharacter = function(char) {
  return (/[\u0400-\u04FFÀ-ÿ]/).test(char);
};

let replacer = function(match, offset, string) {
  let isFirstOrLastChar = (offset === 0 || offset === string.length - 1);
  let shouldTrimChar =  isFirstOrLastChar && !isInternationalCharacter(match)
  return shouldTrimChar ? '' : match;
}

let normalizeWord = function(word) {
  return word.toLowerCase().replace(/\W/g, replacer);
}

let Words = function() {};
Words.prototype.count = function(phrase) {
  return phrase.trim().split(/,|\s/)
              .map(word => word.replace(/[:;@&$%^\*!?\.]/g, ''))
              .reduce((result, word) => {
                word = normalizeWord(word);
                if (word.length === 0) { return result; }
                if (result.hasOwnProperty(word)) {
                  result[word] += 1;
                } else {
                  result[word] = 1;
                }
                return result;
              },{});
};

module.exports = Words
