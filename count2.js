const sonnet = `Let me not to the marriage of true minds Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken. Love's not time's fool, though rosy lips and cheeks Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

let uniques = new Map();
let words =  sonnet.match(/\w+'?\w*/g);  // matches one or more word characters but not punctuation or whitespace

for (let i = 0; i < words.length; ++i) {
  let word = words[i];
  if (uniques.get(word)) {
    let currentValue = uniques.get(word);
    uniques.set(word, currentValue + 1);
  } else {
    uniques.set(word, 1);
  }
}

console.log(uniques);

/* sample run

(base) [js_tutorial]$ node count2.js
Map {
  'Let' => 1,
  'me' => 2,
  'not' => 4,
  'to' => 4,
  'the' => 4,
  'marriage' => 1,
  'of' => 2,
  'true' => 1,
  'minds' => 1,
  'Admit' => 1,
  'impediments' => 1,
  'Love' => 3,
  'is' => 4,
  'love' => 1,
  'Which' => 1,
  'alters' => 2,
  'when' => 1,
  'it' => 3,
  'alteration' => 1,
  'finds' => 1,
  'Or' => 1,
  'bends' => 1,
  'with' => 2,
  'remover' => 1,
  'remove' => 1,
  'O' => 1,
  'no' => 2,
  'an' => 1,
  'ever' => 2,
  'fixed' => 1,
  'mark' => 1,
  'That' => 1,
  'looks' => 1,
  'on' => 1,
  'tempests' => 1,
  'and' => 4,
  'never' => 2,
  'shaken' => 1,
  'It' => 1,
  'star' => 1,
  'every' => 1,
  'wand' => 1,
  'ring' => 1,
  'bark' => 1,
  'Whose' => 1,
  'worth' => 1,
  's' => 4,
  'unknown' => 1,
  'although' => 1,
  'his' => 3,
  'height' => 1,
  'be' => 2,
  'taken' => 1,
  'time' => 1,
  'fool' => 1,
  'though' => 1,
  'rosy' => 1,
  'lips' => 1,
  'cheeks' => 1,
  'Within' => 1,
  'bending' => 1,
  'sickle' => 1,
  'compass' => 1,
  'come' => 1,
  'brief' => 1,
  'hours' => 1,
  'weeks' => 1,
  'But' => 1,
  'bears' => 1,
  'out' => 1,
  'even' => 1,
  'edge' => 1,
  'doom' => 1,
  'If' => 1,
  'this' => 1,
  'error' => 1,
  'upon' => 1,
  'proved' => 1,
  'I' => 1,
  'writ' => 1,
  'nor' => 1,
  'man' => 1,
  'loved' => 1
}

*/
