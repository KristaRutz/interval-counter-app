var factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else if (number > 0) {
    var factorialSum = number;
    for (var i = number; i > 1; i--) {
      factorialSum = factorialSum * (i - 1);
    }
    return factorialSum;
  }
};



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

  $("#myForm").submit(function(event) {
    event.preventDefault();

    var sentence = $("#sentence").val().split("");
    console.log(sentence);
    var chars = [];

    for (var i = 0; i < sentence.length; i++) {
      if (sentence[i] === "a" || sentence[i] === "A" || sentence[i] === "e" || sentence[i] === "E" || sentence[i] === "i" || sentence[i] === "I" || sentence[i] === "o" || sentence[i] === "O" || sentence[i] === "u" || sentence[i] === "U") {
        chars.push("-");
      } else {
        chars.push(sentence[i]);
      }
    } 
    
    $("#puzzleOutput").text(chars.join(""));
  });


  $("#factorialForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#factorialNumber").val());
    
    $("#factorialOutput").text(factorial(number));
  })


})
