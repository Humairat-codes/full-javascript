console.log("control flow");
// check greatest among 3 numbers

let a = 20;
let b = 20;
let c = 20;
if(a>b && a>c){
    console.log(`${a} is greater than ${b} and ${c}`);
}
else if(b>a && b>c){
    console.log(`${b} is greater than ${a} and ${c}`);
}
else if(c>a && c>b){
    console.log(`${c} is greater than ${a} and ${b}`);
}
else if(a==b && b==c){
    console.log(`${a} = ${b} = ${c}`);
}
// time based greeting
// let time = Number(prompt("Enter time"));
time = 0;
let greeting ="";
if(time >=0 && time <12){
    greeting = "Good Morning";
}
else if(time >=12 && time <17){
    greeting = "Good Afternoon";
}
else if(time > 17 && time <= 24){
    greeting = "Good Evening";
}
else{
    greeting = "Hello";
}
// console.log(greeting);

// password validation
let password = prompt("Enter password");
if(password.length == 8){
    console.log("Welcome");    
}
else if(password.length <8){
    alert("PASSWORD IS TOO SHORT");
}
else if(password.length > 8){
    alert("password is TOO LONG");
}
else{
    console.log("Enter a valud password");
    
}