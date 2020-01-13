
$(document).ready(function () 
{
   
    // Time in Month Day, Year - set in header 
    $('#currentDay').text(moment().format('LL')); 
    
    // Gets object from local storage.
    let todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

    //Set textarea values here.
    $('textarea').each(function()
    {
        
        let textContent =  parseInt($(this).attr("value")); 
        
        switch(textContent)
        {
            case 9:
                $(this).html(todoArray[0])
                break;
            case 10:
                $(this).html(todoArray[1])
                break;
            case 11:
                $(this).html(todoArray[2])
                break;
            case 12:
                $(this).html(todoArray[3])
                break;
            case 13:
                $(this).html(todoArray[4])
                break;
            case 14:
                $(this).html(todoArray[5])
                break;
            case 15:
                $(this).html(todoArray[6])
                break;  
            case 16:
                $(this).html(todoArray[7])
                break;
            case 17:
                $(this).html(todoArray[8])
                break;           
        }
    });
    
    //need to append content to an array stored in local storage
    $(".saveBtn").click(function()
    {
        
        let save = parseInt($(this).attr("value"));
        
        switch(save)
        {
            case 9:
                todoArray[0] = $(this).prev().attr("value","9").val();
                break;
            case 10:
                todoArray[1] = $(this).prev().attr("value","10").val();
                break;
            case 11:
                todoArray[2] = $(this).prev().attr("value","11").val();
                break;
            case 12:
                todoArray[3] = $(this).prev().attr("value","12").val();
                break;
            case 1:
                todoArray[4] = $(this).prev().attr("value","13").val();
                break;
            case 2:
                todoArray[5] = $(this).prev().attr("value","14").val();
                break;
            case 3:
                todoArray[6] = $(this).prev().attr("value","15").val();
                break;    
            case 4:
                todoArray[7] = $(this).prev().attr("value","16").val();
                break; 
            case 5:
                todoArray[8] = $(this).prev().attr("value","17").val();
                break;            
        }
        // Save todosArray to local storage here.
        localStorage.setItem('todoArray', JSON.stringify(todoArray));
    });

    let currentHour = moment().format("HH");
     
    $("textarea").each(function(index) {
        
        let planerHour = parseInt($(this).attr("value"))
       
        if (planerHour == currentHour)
        {
            $(this).addClass("present");
        }
        else if (planerHour > currentHour)
        {
            $(this).addClass("future");
        }
        else
        {
            $(this).addClass("past");
        };
    });
});





