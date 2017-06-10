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
    
        num += $(this).text();//string 
        lo.text(num);
    });
    
    $(".operator").on("click", function(){
    
        op = $(this).text();// operator is only one 
        operator.text(op);
        newNum = num;// num is the num from 19
        num = "";//clearing 
        lo = $("#second-number");
        
    
    });
});

