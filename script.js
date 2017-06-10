$(document).ready(function(){

    var num = "";
    var newNum = "";
    var op = "";
    var firstNum = $("#first-number");
    var secondNum = $("#second-number");
    var operator = $("#operator");
    var totalDiv = $("#result");
    var lo =$("#first-number");




    
    //When a button with class of number is clicked: Get the id of the button, the text of the button, and store it in a varable.
    $(".number").on("click", function(){
    
        num += $(this).text();
        lo.text(num);
    });
    
    $(".operator").on("click", function(){
    
        op = $(this).text();
        operator.text(op);
        newNum = num;
        num = "";
        lo = $("#second-number");
        
    
    });
});

