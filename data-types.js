// Primitive Data Types

let number = 10;
let number1 = 10.5;
let name2 = "John";
let isLoggedIn = true;
let xyz;
let yz = null;
let bigInt = 999999999999999999999999n;
let id1 = Symbol("123");


console.log(typeof isLoggedIn); // "boolean"
console.log(typeof name2); // "string"
console.log(typeof a); // "number"
console.log(typeof b); // "number"
console.log(xyz);            // undefined
console.log(typeof xyz);     // "undefined"
console.log(yz);            // null
console.log(typeof yz);     // "object" 
console.log(bigInt);
console.log(typeof bigInt);   // "bigint"
console.log(id1);
console.log(typeof id1); // "symbol"


// Non Primitive Data Types

let person = { name: "Alice", age: 20 };
console.log(person);
console.log(typeof person); // "object"

let arr = [1, 2, 3];
console.log(arr);
console.log(typeof arr);  // "object"
console.log(Array.isArray(arr)); // true

function HelloWorld() {
  console.log("Hello World");
}
console.log(typeof HelloWorld); // "function"





let name = "Sravya";
name = "P" + name.slice(1);  // creates a new string
console.log(name); // "Pravya"


let name1 = "Sravya";
name1 = "Pushpa";  // assigning a NEW string


name[2] = 'x'; // You cannot change characters individually.




let long = "";
for (let i = 0; i < 100000; i++) {
  long += "a";
}


let str = 'Sravya';
console.log(str);

str[0]='p';
console.log(str);
console.log(str[0]); // Sravya
console.log(str.toLocaleUpperCase()); // SRAVYA
console.log(str); // Sravya




let a1 = "Sravya";
a1 = "Pushpa";

console.log(a1);



let user = { name: "Sravya" };
user.name = "Pushpa";


// Shallow Copy

const user4 = {
  name: "Sravya",
  address: {
    city: "Vizag"
  }
};
const copy = { ...user4 }; 
copy.address.city = "Hyd";
console.log(user4.address.city); // "Hyd" 

// Deep Copy

const user1 = {
  name: "Sravya",
  address: { city: "Vizag" },
  skills: ["JS", "React"]
};

const deep = structuredClone(user1);

deep.address.city = "Hyd";
deep.skills.push("Node");

console.log(user1.address.city); 
console.log(user1.skills);





let x = { score: 50 };
let y = x;
y.score = 100;
console.log(x.score); // 100



let s = "Hello";
s[0] = "Y";
console.log(s); // Hello



const user2 = { name: "Sravya", skills: ["JS"] };
const copy1 = structuredClone(user2);
copy1.skills.push("React");
console.log(user2.skills); // JS



const obj = {
  name: "Sravya",
  education: { degree: "B.Tech" }
};
const copy2 = { ...obj };
copy2.education.degree = "MBA";
console.log(obj.education.degree); // MBA


const user3 = {
  name: "Sravya",
  skills: ["JS"]
};
const deep_copy = structuredClone(user3);
deep_copy.skills.push("React");
console.log(user3.skills); // JS



// Type Coercion Confusion 

console.log("2" + 2); // "22" + prioritizes string concatenation


console.log("2" - 2); // 0
console.log("6" * "2"); // 12
console.log("10" / "2"); // 5


// Because - * / force number conversion.



// null vs undefined Confusion
// undefined

console.log(p);
var p = 10;

// null

var p1 = null;
console.log(p1);
console.log(typeof(p1));



// BigInt Issues 
const big = 9007199254740993n;
// console.log(big + 1); // TypeError





