// /*for loops
// DRY - DON'T REPEAT YOURSELF
// for(let i = 1;i<=10;i++)
// {
//     console.log(i,"Omnix Codes");
// }

// let i = 10;
// while(i<=100){
//     console.log("Omnix codes",i);
//     i++;
// }
// let i = 1;
// do
// {
//     console.log(i);
//     i++;
// } while(i<=5);
// */
// /*
// LOGICAL OPERATORS
// AND (&&)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// OR(||)
// console.log(true || true );
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// NOT(!)
// console.log(!true);
// console.log(!false);
// */

// const { use } = require("react");

// // ARRAYS
// const favSingers = ["Me", "myself", "I"];
// // console.log(favSingers[0]);
// const favNumbers = [1, 2, 3, 4, 5, 6, 8, 9];
// const mixedArr = [
//   "hey",
//   ["bonjour", "salam", "Hola"],
//   "Anneyoeng haseayo",
//   123,
//   true,
// ];
// // for(let i =0;i<mixedArr.length;i++){
// //     console.log(mixedArr[i]);

// // }
// // ARRAY TECHNIQUES
// let a1 = [8, 9, 5, 6];
// a2 = a1.concat([4, 88, 99, 65]);
// // console.log(a2.includes(88));
// // console.log(a1.push([10,55],[12,88],990,88));
// // console.log(a1);
// // console.log(a1.unshift(13));

// // console.log(a1.pop());
// // console.log(a1.shift());
// // console.log(a1.sort());
// // console.log(a1.slice(3,5));
// // console.log(a1.join("*"));

// // console.log(a1.splice());

// // console.log(a1.reverse());

// // OBJECTS
// // const person = {
// //     name:"Humaira",
// //     age:21,
// //     hobbies:["coding","singing","sleeping","blogging"]
// // }
// // console.log(person["name"]);
// // console.log(person["hobbies"]);
// // console.log(person["age"]);

// // person.pets = "Oggy";
// // console.log(person);

// // delete person.age;
// // console.log(person);

// let car = {
//   type: "Toyota",
//   model: "xyz",
//   color: "white",
// };
// // console.log(typeof car);
// car.type = "BMW";
// car.wheels = 4;
// // console.log(car);

// // DRY - FUNCTION
// // function name(parameters){
// //     statements
// // }
// function greet(name) {
//   console.log("HELLO, " + name + " !!");
// }
// // greet("batman"); <- call
// function adder(x, y) {
//   let sum = Number(x) + Number(y);
//   return sum;
// }
// // console.log(adder("5",8));
// // console.log(adder("5","8"));
// // console.log(adder(5,"8"));
// // console.log(adder(5,8));
// // console.log(adder("a","b"));

// // function keyword is HEART

// // function multiplier(a: any, b: any): number
// function multiplier(a, b) {
//   return Number(a) * Number(b);
// }
// // console.log(multiplier(10,10));

// // FUNCTION DECLARATION VS FUNCTION EXPRESSION
// // DECLARATION
// // greetings("Light Yagamai");
// function greetings(name) {
//   console.log(`Hello there, ${name}`);
// }
// // EXPRESSION
// // greeting("L Lawliet"); - error
// const greeting = function (name) {
//   console.log(`Hey, ${name}`);
// };
// // greeting("L Lawliet");

// function showcALLBACK() {
//   const val = 100;
// }
// showcALLBACK();

// function baby() {
//   console.log("zx54zx5");
// }

// function take(name, fx) {
//   console.log(name);
//   fx();
// }
// function fx() {
//   console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
//   se();
// }
// function se() {
//   console.log("HELLO");
// }
// // take("Doraemon",fx);

// function showCalFunc(fn) {
//   const val = 10;
//   fn(val);
// }
// function fn(val) {
//   console.log(val);
// }
// // showCalFunc(fn);

// // SCOPE - global variable(decalred outside the block,accessible everywhere), local scope variable(declared and accessible inside a block)
// let msg = "hello"; //global
// {
//   let msg2 = "hey"; //local
//   // console.log(msg2);
//   // console.log(msg);
// }
// // console.log(msg);
// // console.log(msg2); ERROR

// const person = {
//   name: "Alex",
//   age: 30,
//   greet: function () {
//     console.log(person.name);
//     console.log(person.age);
//   },
// };
// // person.greet();

// // JSON
// const person1 = {
//   name: "John Doe",
//   age: 20,
//   hobbie: ["reading", "writing", "exercise", "coding"],
//   employee: true,
//   address: {
//     city: "NY",
//     "street no": 123,
//     "pin code": 1010,
//   },
// };

// // JSON.stringify()

// const text2 = JSON.stringify(person1);
// // console.log(text2);

// // JSON.parse() : json to JS obj
// const JSobj = JSON.parse(text2);
// // console.log(JSobj);

// // dates and time

// // const d = new Date();
// // console.log(d,d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds(),d.getTimezoneOffset(),d.getMonth(),d.getTime(),d.getUTCDate(),d.getUTCDay());
// // console.log(d.toDateString());
// // console.log(d.toISOString());
// // console.log(d.toLocaleString());

// // setInterval
// // let count = 0;
// // const id = setInterval(()=>{
// //   count++;
// //   console.log(count);

// //   if(count==5){
// //     clearInterval(id);
// //     console.log("done");

// //   }

// // },1000)

// // setTimeout
// // console.log("loading...");

// // let id = setTimeout(()=>{
// //   console.log("loaded successfully");

// // },3000)
// // clearTimeout(id);

// // template Strings - ``$
// // let name1 = "Dora";
// // console.log(`heyy`);
// // console.log(`
// //   hi
// //   hola
// //   te amo`);
// // console.log(`hello, I am ${name1}`);
// // console.log(`number : ${2+2*5/5}`);
// const poem = `The quick
// Brown fox
// jumps over
// the lazy dog`;
// let fn1 = "Ash";
// let ln1 = "Ketchum";
// // console.log(poem);
// // console.log(`Hello ${fn1} ${ln1}`);
// // ARROW FUNCTIONS

// function greetings(name) {
//   console.log(`hello ${name}`);
// }

// greetings1 = (name) => {
//   console.log(`hello ${name}`);
// };

// // greetings1("Shinchan");

// greetings3 = (name) => {
//   console.log(`hello ${name}`);
// };
// // Uncaught TypeError: greetings4 is not a function
// // greetings4 = name,age => {
// //   console.log(`hello ${name}, you are ${age} years old`);
// // }

// // greetings4("Henry",20)
// // greetings3("Barbie");

// double = (number) => number * 2;
// // console.log(double(100));

// // setTimeout(()=>{
// //   console.log("hello");
// //   setTimeout(()=>{
// //     console.log("hi");
// //     setTimeout(()=>{
// //       console.log("Hola");
// //     },2000)
// //   },2000)
// // },2000)

// // function user(name, age, work) {
// //   return {
// //     name: name,
// //     age: age,
// //     work: work
// //   };
// // }
// // const abc = user("ABC", 20, "coder");
// // console.log(abc.age);
// // console.log(abc.name);
// // console.log(abc.work);
// // console.log(abc);
// // const alex = user("alex",21,"Model");
// // console.log(alex);

// let a=1,b=2,c=3;
// const obj = {
//   a,
//   b,
//   c
// }
// console.log(obj);
// const getPerson = (name,age,work)=>{
//     return{
//       name,
//       age,
//       work
//     }
// }

// const alex1 = getPerson("Alex",23,"Programmer");

// console.log(alex1);

// const ratings = (rate=5) => {
//   if(rate === 5){
//     for(let i=1;i<=5;i++){
//       console.log(`count: ${i}`);
//     }
//   }
//   else if(rate === 0)
//   {
//     console.log("low");
//   }

// }
// ratings()

// const multiply = (a,b=1) => a*b;

// console.log(multiply(5));

// spread operator

// const getMe4 = (a,b,c,d) =>{
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// }

// const colors = ["red","black","green","pink"];
// getMe4(...colors);
// const list = ["Alex","Satoru","Elias","Michael"]
// const all = ["Jack",...list,"Jake"]
// console.log(all);
// const obj1 = {name:"Barbie",age:19};
// const obj2 = {hobbies:["Singing","Dancing","Reading","Surfing","Modelling","Travelling","Storytelling","Painting","Fashion Designing"]}
// const obj3 = {address:"NY street 123"}
// const obj4 = {quote:"Anything is Possible"}
// const obj5 = {siblings:12}
// const obj6 = {...obj1,...obj2,...obj3,...obj4,...obj5}
// const obj8 = {obj1,obj2,obj3,obj4}
// console.log(obj6);
// console.log(obj8);

// let arr = [1,2,3];
// let arr2 = [4,5];
// let clone1 = [...arr,...arr2];
// console.log(clone1);

// const user ={
//     name:"Jen",
//     age:23
// }
// const clone ={...user};
// console.log(clone);

// function users_spot(name, ...data) {
//   console.log(name);
//   console.log(data);
// }
// users_spot("Barbie", 19,"singing", "dancing","Actress",
// );

// const data = [1,2,3,4,5,6];
// const [a,b,c,d,...e] =data;
// const [a,,,d,...e] =data;
// console.log(a,b,c,d,e);

// function f(){
//     return [56,99]
// }
// const [a,b,c] = f();
// console.log(a,b,c);

// const colors = ["r","g","b","y","o"];
// const [c1,c2,...c3] = colors;
// console.log(c1,c2,c3);

// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "M",
//   country: "USA",
// };
// const { name, gender, age, country } = person;
// console.log(name, gender, age, country);

// const data = {x:100,y:200};
// const {x:d1,y:d2}=data;
// console.log(d1,d2);


// condition ? true : false
// let pswd = 22;
// const ret = pswd>=8?"strong":"weak";

// console.log(ret);

// let p = {
//     name:"ABC",
//     age:20
// }
// for(let key in p){
//     console.log(key,":",p[key]);
// }
// let l = ["gsfjk","rweat","dzT","siuytrb"]
// for(let i in l){
//     console.log(i,":",l[i]);
    
// }

// const obj = {
//     a:1,b:2,c:3
// };
// for(let i in obj){
//     console.log(i,":",obj[i]);
// }

// let people = ["Humaira","Huxn","Alex","Jason"]
// for(let p of people){
//     console.log(p);  
// }

// const text = "Omnix";
// for(let t of text){
//     console.log(t);
    
// }
// let a = [1,2,3];
// for(let i of a){
//     console.log(i);
// }

// const colors = ["teal","blue","green","pink"]

// for(let c of colors){
//     console.log(c);
// }
// colors.forEach((color)=>{
// console.log(color);
// })

// const words = [
//   "apple", "banana", "cherry", "date", "elderberry", 
//   "fig", "grape", "honeydew", "kiwi", "lemon", 
//   "mango", "nectarine", "orange", "papaya", "quince"
// ];
// const newCapWords = words.forEach((w,i,arr)=>{
//     arr[i] = w.toUpperCase();
// })
// console.log(words);
// 
// const x = [1,2,3,4,5,6,7,8,9,10];
// // 10(11)/2=5*11=55

// let sum = 0;

// x.forEach((num)=>{
//     sum+=num;
// })
// console.log(sum);
// let arr = [1,2,3,4,5];
// let dub = arr.map((x)=>{
//     return x*2;
// })
// console.log(dub);
// let a = [99,101,199,300,200,46,59,83,49,50,28,46,58,13];
// let m10 = a.map((aa)=>{
// return aa * 10;
// })
// console.log(m10);


