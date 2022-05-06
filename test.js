/*var per = prompt("what is your name?");

if(per <= 1){
    document.write("good afternoon<br>");
}else if(per > 1 && per <= 4){
    document.write("good afternoon");
}else if(per > 4 && per <= 8){
    document.write("good evening ");
}else if(per > 8 && per <= 12){
    document.write("good night");
}else if(per <33){
    document.write("you are fail");
}else{
    document.write("please enter valid time");
}




var a = 200;
var  b;

b = 'value is ' + (a > 200 ? "true" : "false");

document.write(b);




var day = 4;

switch (day) {
    case 0:
        document.write("Todat is monday");
        break;
        case 1:
            document.write("Todat is Tuesday");
        break;
        case 2:
            document.write("Todat is wednesday");
        break;
        case 3:
            document.write("Todat is Thursday");
        break;
        case 4:
            document.write("Todat is friday");
        break;
        case 5:
            document.write("Todat is saturday");
        break;
        case 6:
            document.write("Todat is sunday");
        break;
    default:
        document.write("Enatr the valid week day")
        break;
}


var a = 40;
var b = 30;

if(a > b){
    alert("A is great");
}else{
    alert("B is great");
}



var a = confirm("do you like website ?");

if(a){
    alert("thank");
}else{
    alert("sorry");
}

var a = prompt("what is your name?");

document.write("a");


//function
function hello(){
    document.write("hello monu");
}

hello();    
hello();    
hello();    


//function return
function hello(fname, lname){
    document.write("hello" + fname + lname);
}

hello("ram","sign");




function sum(math,eng,sc){
var s = math + eng + sc; 

return s;
}

function percentage(tt){
    var par = tt/300 * 100
    document.write(par);
}
var total = sum(56,67,78);

percentage(total);



function hello(math,sci,geo){
    var x=math+sci+geo;
    y=x/300*100;
    document.write(y);
}

hello(55,65,89);


//Global & Local Variable

var a = "hello world";

function hello(){
    document.write(a)
}

hello();
document.write(a);



function hello(){
    alert("hello everyone");
}


//While Loop
var a = 1;

while(a <= 10){
    document.write(a + " hello everyone<br>");
    a = a + 1;
}


//Do While Loop
var a = 1;

do{
    document.write("hello everyone<br>"); 
    a++;
}while(a <= 10);


 
//For Loop
for(var a = 10; a >= 1; a--){
    document.write(a + " hello everyone<br>");
}



//Break & Continue
for(var a = 1; a <=10; a++){
    if(a==4){
        document.write("hello : " + a + "<br>");
        continue;
    }
    document.write("number : " + a + "<br>");
}

//Even & Odd Numbers

for(var a = 1; a<= 10; a++){
    if(a % 2 != 0){
        document.write(a + "<br>");
    }
}


//Nested Loop
for(var a = 1;a <= 100; a = a+10){
    for(var b = a; b < a+10; b++){
        document.write(b + " ");
    }
    document.write("<br>");
}

//Nested Loop - II
for(var a = 1;a <= 5; a++){
    for(var b = 1;b <= a; b++){
        document.write(b + " ");
    }
    document.write("<br>");
}

for(var a = 1;a <= 5; a++){
    for(var b = 1;b <= a; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}

for(var a = 5;a >= 1; a--){
    for(var b = 1;b <= a; b++){
        document.write(a + " ");
    }
    document.write("<br>");
}

for(var a = 5;a >= 1; a--){
    for(var b = a;b >= 1; b--){
        document.write(b + " ");
    }
    document.write("<br>");
}

//Arrays

var are = [10,20,30,40,50];

for (var a = 0;a <= 4;a++){
    document.write(are[a] + "<br>");
}

var are = new Array(3);
for(var g = 0; g < 3;g++){
    are[g] = prompt("enter the value : ");
}

for (var a = 0;a < 3 ;a++){
    document.write(are[a] + "<br>");
}

//Multidimensional Arrays

var are = [
    ["name","age","gender","calss"],
    ["herry",17,"male","B.COM"],
    ["tom",20,"male","CA"],
    ["sunny",24,"female","CA"],
    ["jay",23,"male","BAC"]
];
document.write("<table border='1px' cellspacing='0'>");z
for(var a = 0;a < 5;a++ ){
    document.write("<tr>");
    for(var b = 0;b < 4;b++){
        document.write("<td>" + are[a][b] +  "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


//Modify & Delete Array

var a = ["herry",17,"male","B.COM"];
 
document.write(a + "<br>");
a[0] = "sunny";
document.write(a + "<br>");
delete a [1];
document.write(a + "<br>");

//Array Sort & Reverse

var a = ["Ajay","Raj","Jay","Karan"];

document.write(a + "<br>");
a.sort();
document.write(a + "<br>");
a.reverse();
document.write(a + "<br>");

//Array Pop & Push 
var a = ["Ajay","Raj","Jay","Karan"];

document.write(a + "<br>");
a.pop();
document.write(a + "<br>");
a.push("Rahul");
document.write(a + "<br>");*/

//Array Shift & Unshift
var a = ["Ajay","Raj","Jay","Karan"];

document.write(a + "<br>");
a.shift();
document.write(a + "<br>");
a.unshift("Rahul");
document.write(a + "<br>");