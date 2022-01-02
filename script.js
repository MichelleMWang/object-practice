/*Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/ 
//coderunner: ctrl+alt+n to run code 
let user = {}; 
user.name = "John"; 
user.surname = "Smith"; 
user.name = "Pete";  
delete user.name; 

/* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */ 

function isEmpty(obj){ 
    for (let key in obj){
      return false; 
    }
    return true; 
  }

/*Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.*/ 
let sum = 0; 
for (let key in salaries){
    sum += salaries[key]; 
}

/*Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.*/ 
function multiplyNumeric(obj) {
    for (let key in obj){
      if (typeof obj[key] == "number"){
        obj[key] = obj[key] * 2; 
      }
    }
  }

