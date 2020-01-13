
$(document).ready(function () {
   
    // Time in Month Day, Year - set in header 
    $('#currentDay').text(moment().format('LL')); 
    console.log(moment().format("HH"));
    
    
//     let todos = JSON.parse(localStorage.getItem("todos")) || [];


//   for (var i = 0; i < scores.length; i++) {
//     var score = scores[i];

//     var li = document.createElement("li");

//     li.textContent = score;
//     highscores.appendChild(li);
//   }

  let todoArray = [];
  console.log($('textarea').attr("value","9").text());
    //need to append content to an array stored in local storage
    $(".saveBtn").click(function(){
        let save = parseInt($(this).attr("value"));
        switch(save){
            case 9:
                todoArray[0] = $(this).prev().attr("value","9").val();
                console.log("9am")
                break;
            case 10:
                todoArray[1] = $(this).prev().attr("value","10").val();
                console.log("10am")
                break;
            case 11:
                todoArray[2] = $(this).prev().attr("value","11").val();
                console.log("11am")
                break;
            case 12:
                todoArray[3] = $(this).prev().attr("value","12").val();
                console.log("12pm")
                break;
            case 1:
                todoArray[4] = $(this).prev().attr("value","1").val();
                console.log("1pm")
                break;
            case 2:
                todoArray[5] = $(this).prev().attr("value","2").val();
                console.log("2pm")
                break;
            case 3:
                todoArray[6] = $(this).prev().attr("value","3").val();
                console.log("3pm")
                break;    
            case 4:
                todoArray[7] = $(this).prev().attr("value","4").val();
                console.log("4pm")
                break; 
            case 5:
                todoArray[8] = $(this).prev().attr("value","5").text();
                console.log("5pm")
                break;            
        }
        console.log(todoArray);
    });

    let currentHour = moment().format("HH");
     
    $("textarea").each(function(index) {
        
        let planerHour = parseInt($(this).attr("value"))
        if (planerHour == currentHour){
            $(this).addClass("present");
        }
        else if (planerHour > currentHour){
            $(this).addClass("future");
        }
        else{
            $(this).addClass("past");
        };
    });


});





