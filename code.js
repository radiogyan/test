$('input').keyup(function(volume) { // run anytime the value changes
  var firstValue = Number($('#first').val()); // get value of field
  var secondValue = Number($('#second').val()); // convert it to a float
  var thirdValue = Number($('#third').val());

  var result = Math.round(firstValue * secondValue * thirdValue * 0.5 * 10) / 10 //returns 28.5

  $('#total_expenses1').html(result)
      document.getElementById('total_expenses2').value = result


  // add them and output it
});
