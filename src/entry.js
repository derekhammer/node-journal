export function WordCount(bodyEntry) {
  let splitArray = bodyEntry.split(" ");
  let outputWordsNumber = splitArray.length;
  //method for returning number of words
  return outputWordsNumber;
  //seperate method for returning number of vowels and consonants

  //seperate method getTeaser to return first sentence of entry.
}
export function VowelsCount(bodyEntry) {
  //
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let splitArray = bodyEntry.split("");
  let x = 0;
  splitArray.forEach(function(letter){
    vowels.forEach(function(vowel){
      if(letter === vowel){
        x += 1;
      };
    });
  });
  return x;
}
export function Consonants(bodyEntry) {
  let x = 0;
  return x;
}
export function ReturnSentence(bodyEntry) {
  var outputSentence = [bodyEntry];
  return outputSentence;
}
