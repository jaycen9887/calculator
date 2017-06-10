var op = "";
$(document).ready(function(){

    var num = "";
    var newNum = "";
    
    var result;
    var firstNum = $("#first-number");
    var secondNum = $("#second-number");
    var operator = $("#operator");
    var totalDiv = $("#result");
    var lo =$("#first-number");


/***********************  FUNCTIONS **********************************/
    
    function addition(x,y) {
        result = parseInt(x) + parseInt(y);
        return result;
    }
    
    function subtract(x,y) {
        result = parseInt(x) - parseInt(y);
        return result;
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
    
    $(".equal").on("click", function(){
        if (op === "+"){
            addition(newNum,num);
        }else if(op === "-" || op === "&sub;"){
            subtract(newNum,num);
        }else if (op === "*"){
            multiplcation(newNum,num);
        }else if (op === "/"){
            division(newNum,num);
        }else if (op === "^"){
            power(newNum,num);
        }
        
        totalDiv.text(result);
    });
});

