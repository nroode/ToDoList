//check off todo by clicking
$("ul").on("click", "li", function (){  //ul because can only add listener to elements that existed the first time
    $(this).toggleClass("strike"); 
})

//delete to do with x
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

//add new todo
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + toDoText + "</li>");
    }
})

//toggle list
$(".toggle").on("click", function () {
    $("input[type='text']").fadeToggle();
});

