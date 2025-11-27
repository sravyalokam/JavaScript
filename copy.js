// Shallow Copy

// const user = {
//   name: "Sravya",
//   address: {
//     city: "Vizag"
//   }
// };
// const copy = { ...user }; 
// copy.address.city = "Hyd";
// console.log(user.address.city); // "Hyd" 


// Deep Copy

// const user = {
//   name: "Sravya",
//   degree: "B.Tech",
//   address: { city: "Vizag" },
//   skills: ["JS", "React"]
// };

// const deep_copy = structuredClone(user);

// deep_copy.address.city = "Hyd";
// deep_copy.skills.push("Node");
// deep_copy.name = 'S';
// deep_copy.degree = "MBA";

// console.log(user.address.city); // "Vizag" 
// console.log(user.skills);       // ["JS", "React"] 
// console.log(user.name);
// console.log(user.degree);




const user = {
  name: "Sravya",
  number: 1,
  degree: "B.Tech",
  address: { city: "Vizag" },
  skills: ["JS", "React"]
};

const shallow_copy = {...user};
shallow_copy.address.city = 'hyd';
shallow_copy.skills.push("Node");
shallow_copy.name = 'S';
shallow_copy.degree = 'MBA';
shallow_copy.number = 2;

console.log("Shallow copy",shallow_copy.address.city); 
console.log("Shallow copy", shallow_copy.skills); 
console.log("Shallow copy", shallow_copy.name); 
console.log("Shallow copy", shallow_copy.degree);
console.log("Shallow copy", shallow_copy.number);

console.log(user.address.city); // Hyd
console.log(user.skills);  // [ 'JS', 'React', 'Node' ] 
console.log(user.name); // Sravya
console.log(user.degree);
console.log(user.number);

// const deep_copy = structuredClone(user);

// deep_copy.address.city = "Hyd";
// deep_copy.skills.push("Node");
// deep_copy.name = 'S';
// deep_copy.degree = "MBA";

// console.log(user.address.city); // "Vizag" 
// console.log(user.skills);       // ["JS", "React"] 
// console.log(user.name);
// console.log(user.degree);




// Only the first-level properties of the object are copied as new references.
// Nested objects or arrays (second level and deeper) are not copied, but their references are shared between the original and the copy.
//first-level properties are copied, nested objects/arrays are shared by reference.



