/*for loops
DRY - DON'T REPEAT YOURSELF
for(let i = 1;i<=10;i++)
{
    console.log(i,"Omnix Codes");
}

let i = 10;
while(i<=100){
    console.log("Omnix codes",i);
    i++;
}
let i = 1;
do
{
    console.log(i);
    i++;
} while(i<=5);
*/
/*
LOGICAL OPERATORS
AND (&&)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

OR(||)
console.log(true || true );
console.log(true || false);
console.log(false || true);
console.log(false || false);

NOT(!)
console.log(!true);
console.log(!false);
*/

// ARRAYS
const favSingers = ["Me", "myself", "I"];
// console.log(favSingers[0]);
const favNumbers = [1, 2, 3, 4, 5, 6, 8, 9];
const mixedArr = [
  "hey",
  ["bonjour", "salam", "Hola"],
  "Anneyoeng haseayo",
  123,
  true,
];
// for(let i =0;i<mixedArr.length;i++){
//     console.log(mixedArr[i]);

// }
// ARRAY TECHNIQUES
let a1 = [8, 9, 5, 6];
a2 = a1.concat([4, 88, 99, 65]);
// console.log(a2.includes(88));
// console.log(a1.push([10,55],[12,88],990,88));
// console.log(a1);
// console.log(a1.unshift(13));

// console.log(a1.pop());
// console.log(a1.shift());
// console.log(a1.sort());
// console.log(a1.slice(3,5));
// console.log(a1.join("*"));

// console.log(a1.splice());

// console.log(a1.reverse());

// OBJECTS
// const person = {
//     name:"Humaira",
//     age:21,
//     hobbies:["coding","singing","sleeping","blogging"]
// }
// console.log(person["name"]);
// console.log(person["hobbies"]);
// console.log(person["age"]);

// person.pets = "Oggy";
// console.log(person);

// delete person.age;
// console.log(person);

let car = {
  type: "Toyota",
  model: "xyz",
  color: "white",
};
// console.log(typeof car);
car.type = "BMW";
car.wheels = 4;
// console.log(car);

// DRY - FUNCTION
// function name(parameters){
//     statements
// }
function greet(name) {
  console.log("HELLO, " + name + " !!");
}
// greet("batman"); <- call
function adder(x, y) {
  let sum = Number(x) + Number(y);
  return sum;
}
// console.log(adder("5",8));
// console.log(adder("5","8"));
// console.log(adder(5,"8"));
// console.log(adder(5,8));
// console.log(adder("a","b"));

// function keyword is HEART

// function multiplier(a: any, b: any): number
function multiplier(a, b) {
  return Number(a) * Number(b);
}
// console.log(multiplier(10,10));

// FUNCTION DECLARATION VS FUNCTION EXPRESSION
// DECLARATION
// greetings("Light Yagamai");
function greetings(name) {
  console.log(`Hello there, ${name}`);
}
// EXPRESSION
// greeting("L Lawliet"); - error
const greeting = function (name) {
  console.log(`Hey, ${name}`);
};
// greeting("L Lawliet");

function showcALLBACK() {
  const val = 100;
}
showcALLBACK();

function baby() {
  console.log("zx54zx5");
}

function take(name, fx) {
  console.log(name);
  fx();
}
function fx() {
  console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
  se();
}
function se() {
  console.log("HELLO");
}
// take("Doraemon",fx);

function showCalFunc(fn) {
  const val = 10;
  fn(val);
}
function fn(val) {
  console.log(val);
}
// showCalFunc(fn);

// SCOPE - global variable(decalred outside the block,accessible everywhere), local scope variable(declared and accessible inside a block)
let msg = "hello"; //global
{
  let msg2 = "hey"; //local
  // console.log(msg2);
  // console.log(msg);
}
// console.log(msg);
// console.log(msg2); ERROR

const person = {
  name: "Alex",
  age: 30,
  greet: function () {
    console.log(person.name);
    console.log(person.age);
  },
};
// person.greet();

// JSON
const person1 = {
  name: "John Doe",
  age: 20,
  hobbie: ["reading", "writing", "exercise", "coding"],
  employee: true,
  address: {
    city: "NY",
    "street no": 123,
    "pin code": 1010,
  },
};

// JSON.stringify()

const text2 = JSON.stringify(person1);
// console.log(text2);

// JSON.parse() : json to JS obj
const JSobj = JSON.parse(text2);
// console.log(JSobj);

// dates and time

// const d = new Date();
// console.log(d,d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds(),d.getTimezoneOffset(),d.getMonth(),d.getTime(),d.getUTCDate(),d.getUTCDay());
// console.log(d.toDateString());
// console.log(d.toISOString());
// console.log(d.toLocaleString());

// setInterval
// let count = 0;
// const id = setInterval(()=>{
//   count++;
//   console.log(count);
  
//   if(count==5){
//     clearInterval(id);
//     console.log("done");
    
//   }

// },1000)


// setTimeout
// console.log("loading...");

// let id = setTimeout(()=>{
//   console.log("loaded successfully");
  
// },3000)
// clearTimeout(id);


// template Strings - ``$
// let name1 = "Dora";
// console.log(`heyy`);
// console.log(`
//   hi
//   hola
//   te amo`);
// console.log(`hello, I am ${name1}`);
// console.log(`number : ${2+2*5/5}`);
const poem = `The quick
Brown fox
jumps over
the lazy dog`;
let fn1 = "Ash";
let ln1  = "Ketchum";
// console.log(poem);
// console.log(`Hello ${fn1} ${ln1}`);
// ARROW FUNCTIONS

function greetings(name){
  console.log(`hello ${name}`);
}

greetings1 = (name) => {
  console.log(`hello ${name}`);
}

// greetings1("Shinchan");


greetings3 = name => {
  console.log(`hello ${name}`);
}
// Uncaught TypeError: greetings4 is not a function
// greetings4 = name,age => {
//   console.log(`hello ${name}, you are ${age} years old`);
// }

// greetings4("Henry",20)
// greetings3("Barbie");

double = number  => number *2;
console.log(double(100));
