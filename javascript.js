/*
function Addition (num1, num2){
    var total = num1 + num2;
    return total;
}

txt = document.querySelector('.textfield');
txt.value = Addition(10, 15);
*/

/*
num1 = prompt('enter first value');
    if(num1){
        num2 = prompt('enter second value');
    }

function Addition(){ 
    //parsing to integer
    num1 = Number(num1);
    num2 = Number(num2);   
    res = num1 + num2;
    return res;
}

txt = document.querySelector('.textfield');
txt.value = Addition ();
*/

/*
do{
    var x = prompt('enter first value');
    if(x){
        var y = prompt('enter second value');
    }else{
        alert("You did not enter any value");
    }
}while(x == null || x == '');

function addition(num1, num2){
    var num1 = Number(num1);
    var num2 = Number(num2);
    var res = num1 + num2;
    return res;
}

newValue = addition(x, y);

txt = document.querySelector('.textfield');
txt.value = newValue;
alert(newValue);
*/

/*
function getName (){
    var nameElement = document.querySelector('.name');
    var newName = nameElement.value;
    //'Evans Mbithi'

    //convert to lowercase
    var lowerName = newName.toLowerCase();
    //'evans mbithi'

    //replace second name
    newSecond = lowerName.replace('mbithi', 'ikindu');
    console.log(newSecond);
    //'evans ikindu'

    return lowerName;
}

function getFirstName (){
    var name = getName();
    var firstName = name.split(" ");
    //console.log(firstName);
    // " " splitting a space separates words
    // "" without a space separates individual letters    

    return firstName[0];
}

firstName = getFirstName();
alert(firstName);
*/

/*
abc = prompt("what's your name?");

main = document.querySelector('#main');

for(i=1; i<=abc.length; i++){
        var xyz = abc.slice(0,i);
        main.innerHTML = xyz;
        alert("Hello " + xyz);
    }
*/

// GUESS GAME
//npm install math-random
// const random = require('math-random');
// console.log(random());
//Math.floor() function returns the largest integer less than or equal to a given number.
//Math.floor(5.05)) expected output: 5
// var abc = Math.floor(Math.random() * 10);
// var abc = Math.floor(random() * 10);
// console.log(abc);



function processor() {
    var abc = Math.floor(Math.random() * 10);
    while(abc>7){
            abc--;        
    }

    var proc = 2 ** abc;
    if(proc>=8){
        var xyz = proc;
    }else{
        for(i=proc; i<=8; i++){
            xyz = i;
        }
    }
    // console.log(xyz);
    xyz = Number(xyz);

    return xyz;
}


usr = prompt("what's your name?");

if(usr === 'null' || usr === '' || usr === null){
    hello = "Hello guest\nLet's play a game";
}else{
    usr = usr.toLowerCase();
    hello = "Hello " + usr + "\nLet's play a game";    
}

alert(hello);

var result;
while(result !== '1'){
    think = "Think of a number and note it down,\nyou will need the same number later on";
    alert(think);
    times = "Multiply the number by 2"
    alert(times);
    add_processor = processor();
    addition = "Add " + add_processor + " ...";
    alert(addition);
    divide = "Divide the result by two";
    alert(divide);
    subtract = "Finally,\nsubtract the number you noted down from the result";
    alert(subtract);
    result = prompt("Do you have an answer in mind?\n1. Yes\n2. No");
}

guess = add_processor / 2;
message = "Let me guess what you got...";
alert(message);
tension = "Your result is...";
alert(tension);

answer = "..." + guess;
for(i=1; i<=answer.length; i++){
    var zzz = answer.slice(0,i);
    main.innerHTML = tension + guess;
    alert(zzz);
}
