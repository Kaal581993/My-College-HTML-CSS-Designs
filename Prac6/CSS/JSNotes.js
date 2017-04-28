/*
There are 3 types of popup boxes:
JavaScript popup Boxes:
->alert:
->confirm Boxes
->Prompt Boxes



*/

function show_alert(){

  alert("I am an alert box!");

}

/*
alert("") is used to show a warning or an error message & is used for the debugging code

*/

function show_confirm(){
var r=confirm("Press a button");
if(r==true){document.value("You Pressed OK!");}else{document.value("You Pressed Cancel!");}

}

/*

show_confirm() is used to verify the form details before submitting form to the Server, it has 2 buttons
ok & cancel, ok returns trun & cancel is false as they are used for submit values
*/



function show_prompt() {

  var name=prompt("Please Enter your name");
  if(name!=null && name!=""){
    document.write("Hello "+name+", wake UP! Follow the white Rabbit");
  }
}
/*
prompt box, it is used to take a value from the user at runtime, brfore submitting the form, the value in the text
 field can be access by clicking the ok button & then the form is submitted!

A javascript objects are of 4 types- inbuilt object coming from java.lang such as arrays, Strings, Dates

DOM(Document Object model) it is been used to access the form elements

all the client side validations are done using dom objects

browser objects such as navigator, history & location to access the browser

user defined objects designed by users \



explain different types of javascript objects:






*/




var str ="Hello#";
var str1 ="123.89";
var len =str.length();
var ch =str.charAt(0);
var ch2 =str.indexOf("#");
var ch2 =str.lastIndexOf("#");
var d =str1.valueOf();
var str22=str1.toString();
var str1=str.substr(2,4);

/*String object has following functions:
charAt() : It is been used to extract the character of specific address

indexof() : It is used to return index of character as a String

lastIndexOf(): returns last index of character as a String
*/








//
