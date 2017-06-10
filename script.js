var op = "";
var num = "";
var newNum = "";
var result;


$(document).ready(function(){
var firstNum = $("#first-number");
var secondNum = $("#second-number");
var operator = $("#operator");
var totalDiv = $("#result");
var lo =$("#first-number");
    


/***********************  FUNCTIONS **********************************/
    
    function addition(x,y) {
        result = parseInt(x) + parseInt(y);
        totalDiv.text(result);
    }
    
    function subtract(x,y) {
        result = (parseInt(x) - parseInt(y));
       totalDiv.text(result);
    }
    
    function multiplcation(x,y){
        result = parseInt(x) * parseInt(y);
        return
    }
    
    function division(x,y){
        result = parseInt(x) / parseInt(y);
        return result;
    }
    
    function power(x,y){
        result = Math.pow(parseInt(x),parseInt(y));
        return result;
    }
    
    

    
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
    
    $(".equal").on("click", function(){
        if (op === "+"){
            addition(newNum,num);
        }else if(op === "&minus;"){
            subtract(newNum,num);
        }else if (op === "&times;"){
            multiplcation(newNum,num);
        }else if (op === "&divide;"){
            division(newNum,num);
        }else if (op === "^"){
            power(newNum,num);
        }
        
    });
});


// Clear Function//

$(".button-clear").click(function(){ 
    resetCalculator("0"); 
});

