let letterScores = {
  '1': ['A','E','I','O','U','L','N','R','S','T'],
  '2': ['D','G'],
  '3': ['B','C','M','P'],
  '4': ['F','H','V','W','Y'],
  '5': ['K'],
  '8': ['J','X'],
  '10': ['Q', 'Z']
}

let getScore = (letter) => {
  let score = 0;
  Object.getOwnPropertyNames(scores)
        .some((key) => {
          if(letterScores[key].includes(letter.toUpperCase())) {
            score = +key;
            return true
          } else {
            return false;
          }
        });
  return score;
};

let Scrabble = function(word) {
  if (word) {
    return word.split('').reduce((score, letter) => {
      score += getScore(letter);
      return score;
    },0);
  } else {
    return 0;
  }
};

