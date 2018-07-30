import { entry } from './entry.js';
$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var bodyEntry = $('#bodyEntry').val();
    var wordsNumber = entry(bodyEntry);
    $('#wordsNumber').append("<li>" + wordsNumber + "</li>");
  });
});
