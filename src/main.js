import { WordCount, VowelsCount, Consonants, ReturnSentence } from './entry.js';
$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    const bodyEntry = $('#bodyEntry').val();
    let wordsNumber = WordCount(bodyEntry);
    let vowelsNumber = VowelsCount(bodyEntry);
    let consNumber = Consonants(bodyEntry);
    $('#wordsNumber').append("<li> Total amount of words in sentence: " + wordsNumber + "</li>");
    $('#vowelsNumber').append("<li>Total amount of vowels: "+ vowelsNumber + "</li>");
    $('#consNumber').append("<li>Total amount of consonants: "+ consNumber + "</li>");
  });
});
