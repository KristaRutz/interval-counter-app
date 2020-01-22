$(document).ready(function() {
  $("#numberInputs").submit(function(event) {
    event.preventDefault();

    var countTo = parseInt($("#countTo").val());
    var countBy = Math.abs(parseInt($("#countBy").val()));

    var numberList = [];

    if (!countTo || !countBy){
      $("#output").text(`Please enter a value!`);
    }

    if ((countTo > 0) && (countBy > 0)) {
      if (countBy > countTo) {
        $("#output").text(`You can't count to ${countTo} by ${countBy} because ${countBy} is larger than ${countTo}!`);
      } else {
        for (var i = countBy; i <= countTo; i += countBy) {
          numberList.push(" " + i);
        }
        $("#output").text(numberList);
      }
    } else if (countTo < 0) {
      if (countBy > Math.abs(countTo)) {
        $("#output").text(`You can't count to ${countTo} by ${countBy} because ${countBy} is larger than ${countTo}!`);
      } else {
        for (var i = -countBy; i >= countTo; i -= countBy) {
          numberList.push(" " + i);
        }
        $("#output").text(numberList);
      }   
    }
  });
})
