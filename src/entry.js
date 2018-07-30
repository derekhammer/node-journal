export function WordCount(bodyEntry) {
  let splitArray = bodyEntry.split(" ");
  let outputWordsNumber = splitArray.length;
  //method for returning number of words
  return outputWordsNumber;

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
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const james = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let splitArray = bodyEntry.split("");
  let x = 0;
  let y = 0;
  splitArray.forEach(function(letter){
    james.forEach(function(jam){
      if(letter == jam){
        y += 1;
        console.log(y + letter + jam);
      }else{
        x += 1;
      };
    });
  });
  return y;
}
export function ReturnSentence(bodyEntry) {
  var outputSentence = [bodyEntry];
  return outputSentence;
}
