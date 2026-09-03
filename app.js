// logs to the console
console.log("Hello world!");
// variables
let a = 10;
let f = 3.14;
let name = "Dekisugi";
let age = 22;
let is_student = true;
console.log(`Hi,${name},you are ${age} years old`);

if(is_student){
    console.log(`${name} is a student`);
    
}
else{
    console.log(`${name} is not a student`);
    
}
// comparison operators (>,<,===,!==,>=,<=,==)
let x = 100;
let y = 200;
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x===y);
console.log(x!==y);
let z = '200';
console.log(y==z); //true
console.log(y!=z); //false

// manipulating strinsg
let fName = "Atherion";
let lName = "Valerius";
let fullName = fName + " " + lName;
console.log(`${fName} ${lName}`);
console.log(fullName);
// string concat()
let Name = fName.concat(" ",lName);
console.log(Name);

// append value
fName += " VX";
console.log(fName);

// check length
console.log(fName.length);
console.log(lName.length);
let Name1 = fName.concat(" ",lName);
console.log(Name1.length);

// cases
console.log(Name1.toLowerCase());
console.log(Name1.toUpperCase());

// slice
console.log(Name1.slice(0,2));
console.log(Name1.slice(9,11));
console.log(Name1.slice(15,));

// split & join
console.log(Name1.split(" ").join("-"));

// includes
console.log(Name1.includes("u"));
console.log(Name1.includes("x"));

// trim
let movie = "           iron man                   ";
console.log(movie);
console.log(movie.trim()); //iron man

let favCharFirstName = "L";
let favCharLastName = "Lawliet";
let favChar = favCharFirstName.concat(" ",favCharLastName);
let upperCase = favChar.toUpperCase();
let msg = `My favorite Anime character is ${upperCase} because he is intelligent`
msg += `. He is from anime "Death Note`;
console.log(msg);




