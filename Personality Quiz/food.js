
function sum() {
var result = 0;
var question1 = document.querySelector ('input[name=q1]:checked').value;

         if (question1 == "china") {
            result += 2;
          }
          else if (question1 == "Mexico") {
            result += 3;
          }

          else if (question1 == "Italy") {
              result += 4;
            }

            else if (question1 == "United State") {
              result += 1;
            }
var question2 = document.querySelector('input[name=q2]:checked').value;
    if (question1 == "Playing a Sport") {
      result += 1;
    }
    else if (question1 == "crafts") {
      result += 2;
    }
    else if (question1 == "Watching a Movie") {
        result += 4;
      }

      else if (question1 == "Playing an insturment") {
        result += 3;
      }
var question3 = document.querySelector('input[name=q3]:checked').value;


          if (question1 == "ketchup") {
            result += 0;
          }
          else if (question1 == "ranch") {
            result += 0;
          }

          else if (question1 == "ice cream") {
              result += 0;
            }

            else if (question1 == "sriracha") {
              result += 0;
            }
  var question4 = document.querySelector('input[name=q4]:checked').value;


                      if (question1 == "Norht") {
                        result += 0
                      }
                      else if (question1 == "West coast") {
                        result += 0
                      }

                      else if (question1 == "East coast") {
                          result += 0
                        }

                        else if (question1 == "South") {
                          result += 0
                        }
var question5 = document.querySelector('input[name=q5]:checked').value;


        if (question1 == "Drake") {
                result += 0
                      }
          else if (question1 == "Beyonce") {
                  result += 0
                        }

     else if (question1 == "Miley Cyrus") {
            result += 0
            }

          else if (question1 == "Jenifer Lawrence") {
                  result += 0
                      }

var question6 = document.querySelector('input[name=q6]:checked').value;


                    if (question1 == "nerdy") {
                      result += 2
                    }
                    else if (question1 == "out going") {
                      result += 4
                    }

                    else if (question1 == "boring") {
                        result += 3
                      }

                      else if (question1 == "goofy") {
                        result += 1
                      }
  resultfunction(result);

  }

function resultfunction(result) {

  if (result >=2) {
    document.getElementById("demo").innerHTML = "Pizza";

    }
  else if ( result == 5 || result == 6)
    {document.getElementById("demo").innerHTML= "Tacos";
  }
  else if ( result == 7 || result == 8)
      {document.getElementById("demo").innerHTML ="Pasta";
    }
  else if ( result == 9 || result == 10)
        {document.getElementById("demo").innerHTML ="Orange Chicken";
      }
   else if ( result == 11 || result == 12)
          {document.getElementById("demo").innerHTML= "Hot Dogs";
        }
    alert(result);
    }
