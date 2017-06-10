


$(document).ready(function(){

/************************** Variables ********************************/
    
    
    var op = "";
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
        console.log( parseInt(x) + " " + parseInt(y));
        totalDiv.text(result);
        return result;
    }
    
    function subtract(x,y) {
        result = parseInt(x) - parseInt(y);
        console.log( parseInt(x) + " " + parseInt(y));
        totalDiv.text(result);
        return result;
    }
    
    function multiplcation(x,y){
        result = parseInt(x) * parseInt(y);
        console.log( parseInt(x) + " " + parseInt(y));
        totalDiv.text(result);
        return result;
    }
    
    function division(x,y){
        result = parseInt(x) / parseInt(y);
            console.log( parseInt(x) + " " + parseInt(y));
        totalDiv.text(result);
        return result;
    }
    
    function power(x,y){
        result = Math.pow(parseInt(x),parseInt(y));
                console.log( parseInt(x) + " " + parseInt(y));
        totalDiv.text(result);
        return result;
    }
    
    
  /******************** EVENT HANDLERS ***********************/  

    
    //When a button with class of number is clicked: Get the id of the button, the text of the button, and store it in a varable.
    $(".number").on("click", function(){
    
        num += $(this).text();//string 
        lo.text(num);
    });
    
    //When button with class of operator is clicked: Get id of button, the text of the button, and store it in a variable;
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
        }
        else if(op === "−"){
            subtract(newNum,num);
        }
        else if (op === "&times;"){
            multiplcation(newNum,num);
        }
        else if (op === "&divide;"){
            division(newNum,num);
        }
        else if (op === "^"){
            power(newNum,num);
        }
        
        totalDiv.text(result);
        
    });
    
    
    // Clear Function//

    $("#button-clear").on("click", function(){ 
        op = "";
        num = "";
        newNum = ""; 
        firstNum.text(newNum);
        secondNum.text(num);
        operator.text(op);
        totalDiv.text(" ");
        lo = $("#first-number");


    });

});



