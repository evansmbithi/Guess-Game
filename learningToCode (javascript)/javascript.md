# Learning to Code (JAVASCRIPT)

## Module 1
Use any text editor or javascript console window (node, browser console, etc)

### URL sanitizer
Variable declaration
> website = "https://mbithi.com/" 

<strong>Assume user input is not perfect</strong>




```
URL = "tHis is mY  fIrSt javascript trial"
```

Convert strings to lowercase
> URL = URL.toLowerCase() <br>
'this  is my first javascript trial'<br>

Replace extra spaces with regular spaces


```
 URL = URL.replace("  ", " ") 
'this is my first javascript trial'
```

Split the sentence to independent array of words (text blob)
> URL = URL.split(" ") <br>
  Splits all the spaces into an array<br>
[ 'this', 'is', 'my', 'first', 'javascript', 'trial' ]<br>

Join the pieces of the array with a dash
> URL = URL.join("-") <br>
'this-is-my-first-javascript-trial'<br>

Concatination
> website + URL <br>
'https://mbithi.com/this-is-my-first-javascript-trial'


## Module 2

### Assignment operators

Assign 25 to num1
> num1 = 25 <br>
25<br>

> num1 + 10<br>
35<br>

Any arithmetic operation on num1 is not stored unless it is assigned a variable
> num1<br>
25<br>
> num1 = num1 + 10<br>
35<br>
> num1<br>
35<br>

<strong>+= "Append" operator</strong><br>
Not only does the operator perform addition of num1, but it assigns the result to the variable
> num1 += 10<br>
45<br>
> num1<br>
45<br>

<strong>NB: Can apply to any other operator * / % + - .</strong>


## Module 3

### Comparison operators

== Equals,
=== Strict Equals,
!= Not Equals,
!== Strict does not Equal, >= Greater than or equal to, <= Lesser than or equal to, 
&& AND,
|| OR

#### Strict Comparison
Consider the following <br>
let age = 20;
> age == "20"  true <br>
This comparison shows the value of age to be true because it equates the string value "20" to the integer value assigned. However, this is not true!

Using <b>strict</b> comparison checks the data type and articulates a false because "20" is considered to be a string not a number.
> age === "20"
false<br>
> age === 20
true

## Module 4

### if condition
For instance <br>
var name = prompt("What's your name?"); <br>

if (name){ <br>
 alert("Hello" + name); <br>
}

If the user enters a name, it is going to return a <strong>true</strong> value. As long as the name variable is not null, undefined or false.

if(<em style="color: red">true</em>){....}

## Module 5

### Query Selectors
#### Adding Information to a page
For a div with id="main"<br>
< div id="main">

< /div>

var main = document.querySelector('#main')<br>
The dot notation means that the query selector is a function that is part of the page document.<br>
The query selector targets the div with id="main" similar to CSS ('#main'); ('.main') for div of class="main".

main.innerHTML = "Hello World";<br>
InnerHTML is NOT a function. Instead it changes what is held inside the HTML element; < div id="main"> for this case.

main.innerHTML += "edited";<br>
This appends the text "edited" on to the existing text.

var content = main.innerHTML; <br>
Stores page content in a variable called 'content'

<b>More operations</b><br>
main.innerHTML = "You win"<br>
'You win'<br>
content = main.innerHTML<br>
content = content.toUpperCase().replace(' ', '-')<br>
main.innerHTML = content<br>
'YOU-WIN'

#### Attribute manipulation
Consider an input element<br>
< input type="text" class="textfield" value="input text here">

var txt = document.querySelector('.textfield')<br>
Selects the input element of class="textfield"

txt.value = "Enter Email"<br>
'Enter Email'<br>
Replaces the text in the value attribute

<b>CSS styling</b><br>
txt.style.border = 0;

txt.style.marginTop = '50px';

txt.style.border = '1px solid #000';

txt.style.paddingTop = '50px';<br>
The styling attributes are written in camelCase rather than using dashes<br>e.g paddingTop instead of padding-top.

These creates a style attribute on the input element<br>
< input type="text" class="textfield" value="Enter Email" <span style="color: red">style="border: 1px solid rgb(0, 0, 0); margin-top: 50px; padding-top: 50px;"</span>>


## Module 6

### Functions
Don't Repeat Yourself (DRY) methodology

syntax:<br>
function Name() { <br>
    //statements<br>
}

Name(); //call the function

example: <br>



```
function Addition (num1, num2){
     var total = num1 + num2;
     
     return total;
 }
 
 Addition(10, 15);
```

<b>var</b> - declares a variable inside a scope. This means that variables can only exist inside of certain areas.

if you have a variable declared with a <em>var</em> inside a function, they can only be accessed inside that function.<br>Prevents variables from bleeding out of the function scope, unless called with a <b>return</b> keyword.

consider the following illustration


```
function Addition(){
    num1 = 15;
    num2 = 30;
    total = num1 + num2;
}

Addition();
alert(total);
```

The total variable bleeds out of the function and displays the result on alert(). <br>
Upon adding the var keyword before each variable declaration, the total variable is no longer accessible; 
nothing gets alerted!


```
function Addition(){
    var num1 = 15;
    var num2 = 30;
    var total = num1 + num2;
}

Addition();
alert(total);
```

The total can only be displayed through a return statement inside the function scope.<br> 
Return displays the result of whatever the function does in form of a variable definition. new_total = Addition();


```
function Addition(){
    var num1 = 15;
    var num2 = 30;
    var total = num1 + num2;
    
    return total;
}

new_total = Addition();
alert(new_total);
```

<u>Hands-on examples</u>


```
/****1****/

function Addition (num1, num2){ 
    var total = num1 + num2; 
    return total;
}

txt = document.querySelector('.textfield');
txt.value = Addition(10, 15);
```


```
/****2****/

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
```


```
/****3****/

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
```


```
/****4****/

function getName (){
    var nameElement = document.querySelector('.name');
    var newName = nameElement.value;
    >'Evans Mbithi'

    //convert to lowercase
    var lowerName = newName.toLowerCase();
    >'evans mbithi'

    //replace second name
    newSecond = lowerName.replace('mbithi', 'ikindu');
    console.log(newSecond);
    >'evans ikindu'

    return lowerName;
}

function getFirstName (){
    var name = getName();
    var firstName = name.split(" ");
    //console.log(firstName);
    // " " splitting a space separates words
    // "" without a space separates individual letters 'e', 'v', 'a', 'n', 's'    

    return firstName[0];
    >'evans'
}

firstName = getFirstName();
alert(firstName);
```

## Module 7

### Objects and Arrays
#### Objects
syntax:

> obj = {"key":"value","key2":"another value"}<br>
<em>{ key: 'value', key2: 'another value' }</em>

> obj.key<br>
<em>'value'</em>

> obj.key2<br>
<em>'another value'</em>

example of a person object 


```
person = {
    //the quotes "" in the key definition are not really necessary
    "name":"evans",
     location:"nairobi",
     age: 27,
}

console.log(person.name);
>'evans'

console.log(person.location);
>'nairobi'

console.log(person.age);
>27
```

#### Array operations

Declare a bunch of strings, int, floats etc in a list (separated by commas) inside a pair of square brackets

syntax

arrayName = ['0','1','2', int, float]

Example




```
friends = ['kelvin', 'evans', 'terry', 'mercy', 'ken'];
```

These items are often arranged in indexes starting from zero [0] to represent the first element

To access 'kelvin' use
>friends[0]


```
friends[1]
'evans'
```

<b>IndexOf()</b><br>
Searches the array for an element and returns its position


```
friends.indexOf('ken')
> 4

friends.indexOf('kelvin')
> 0
```

Ken is in index [4] whereas kelvin is in index [0]<br>
Undefined elements will be shown to have index [-1]


```
friends.indexOf('ben')
> -1
```

<b>Push()</b><br>
Say we have a list of group members in an array. To add members to the array, we use push().<br>
Adds one or more elements at the end of an array


```
Declare an empty array
group1 = [];

Add new members
group1.push('evans','terry');

list of members in the array
console.log(group1);
>[ 'evans', 'terry' ]
```

<b>Pop()</b><br>
Removes the last element from an array (Last In First Out)


```
group1.pop('terry');

list of members in the array
console.log(group1);
>[ 'evans' ]
```

<b>Reverse()</b><br>
Reverse the order of elements in an array


```
friends = ['kelvin', 'evans', 'terry', 'mercy', 'ken'];

friends.reverse()
[ 'ken', 'mercy', 'terry', 'evans', 'kelvin' ]
```

<b>Join()</b><br>
Returns a new string by concatenating all the elements in an array.


```
 friends.join()
'ken,mercy,terry,evans,kelvin'

friends.join("")
'kenmercyterryevanskelvin'

friends.join(" ")
'ken mercy terry evans kelvin'

friends.join("-")
'ken-mercy-terry-evans-kelvin'
```

## Module 8

### String manipulation



```
str = "Hello world. I am Learning javascript"

str.indexOf("Learning");
> 18
str.indexOf("learning");
> -1
```

<b>indexOf()</b> shows the position of an item in a string. For this instance, it shows the word "Learning" to be in the 18th position<br>
It is case sensitive, that's why it could not find "learning", hence -1.

<b>str.toLowerCase()</b> transforms all letters in a string to lowercase. <br>
<b>str.toUpperCase()</b> capitalizes all words of a string

<b>substr()</b><br>


```
str.substr(5, 5)
> ' worl'
```

<b>substr()</b> technically starts from the 6th character and shows the next five characters after it.


```
str.substr(0, 10)
'Hello worl'

This would show the first character up to the tenth.
```

<b>slice()</b><br>


```
str.slice(5, 20)
> ' world. I am Le'
```

<b>slice()</b> is similar to substr(5,20). However, while the latter would start from the 6th character and show the next 20 characters after, slice(5,20) would start at the 6th character and show upto the 20th character from zero [0].


```
str.slice(5, 11)
> ' world'
```
