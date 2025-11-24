let a = 'let';
const b = 'const';
var c = 'var';

console.log(a);
console.log(b);
console.log(c);


a = 'Reassign let';  
// b = 'Reassign const'; // const can't be reassigned   Error: TypeError: Assignment to constant variable.
c = 'Reassign var';

console.log(a);
// console.log(b);
console.log(c);

var c = 10;
console.log(c);

// let a = 10;
// console.log(a); // Redeclaration in same scope is not allowed

{
    let a = 10;
    console.log(a); // Redeclaration is allowed in different scope due to let is block scoped
}






// Function Scope

let aa;
const bb = 'Must initialize during declaration';
var cc;

function function_scope(){
    let aa = 'let function scope';
    const bb = 'const function scope'; // const can't be reassigned   Error: TypeError: Assignment to constant variable.
    var cc = 'var function scope';

    if(true){
        
        let dd = 'let inside block';
        const ee = 'const inside block';
        var ff = 'var inside block';

        console.log(aa); 
        console.log(bb);
        console.log(cc);
    }
        // console.log(dd); // let block scope
        // console.log(ee); // const block scope
        // console.log(ff); // function scope
}

function_scope();






// Hoisting : 


// var
console.log(x); // undefined
var x=10;


var x;
console.log(x);
x = 10;

// let
// console.log(y); // ReferenceError: Cannot access 'a' before initialization
let y = 10;
console.log(a); // 10


// const
// console.log(z);
const z = 10; // ReferenceError: Cannot access 'a' before initialization

