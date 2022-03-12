// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x > 50);

// Write Your JavaScript Code Here
//It's done when the message "True ✅ True ✅" is logged when both `expression1` and `expression2` are true.
//It's done when the message "True ✅ False ❌" is logged when `expression1` is true. 
//It's done when the message "False ❌ True ✅" is logged when `expression2` is true.
//It's done when the message "False ❌ False ❌" is logged when both `expression1` and `expression2` are false. 

if (expression2 && expression1) {
console.log("True ✅ True ✅")
}

if (!expression2 && !expression1) {
    console.log("False ❌ False ❌")
    }

if (expression1 && !expression2) {
    console.log("True ✅ False ❌")
    }    
   
if (!expression1 && expression2) {
    console.log("False ❌ True ✅")
    }        