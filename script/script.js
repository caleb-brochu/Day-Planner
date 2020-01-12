
$(document).ready(function () {
   
    // Time in Month Day, Year - set in header 
    $('#currentDay').text(moment().format('LL')); 
    console.log(moment().format("HH"));
    
    //need to append content to an array stored in local storage
    $(".saveBtn").click(function(){
        let save = parseInt($(this).attr("value"));
        switch(save){
            case 9:
                console.log("9am")
                break;
            case 10:
                console.log("10am")
                break;
            case 11:
                console.log("11am")
                break;
            case 12:
                console.log("12pm")
                break;
            case 1:
                console.log("1pm")
                break;
            case 2:
                console.log("2pm")
                break;
            case 3:
                console.log("3pm")
                break;     
            case 4:
                console.log("4pm")
                break; 
            case 5:
                console.log("5pm")
                break;            
        }
    });

    let currentHour = moment().format("HH")
     
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





