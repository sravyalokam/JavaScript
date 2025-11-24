// Function Declaration
fun();

function fun(){
    let a = '10';
    console.log(a);
}

// Hoisted



// Function Expression

const fun1 = function() {
    let a = '10';
    console.log(a);
}

fun1();


// Not Hoisted due to TDZ


// Arrow Function

const greet = () => {
    let a = '10';
    console.log(a);
}

greet();

// Not hoisted due to TDZ



// Anonymous Function: Function without a name:

setTimeout(function() {
  console.log("done");
}, 1000);
 
// Not hoisted


// function () {
//    console.log("hi");
// }


setTimeout(() => {
    console.log("Anonymous arrow function");
}, 1000);


setTimeout(function() {
    console.log("Anonymous normal function");
}, 1000);



const map_array = [1,2,3];
const copy_map_array = map_array.map((n) => {
    return n*5;
});
console.log(copy_map_array);


const filter_array = [1, 2, 3];
const copy_filter_array = filter_array.filter( function(n) {
    return n/1==3;
})
console.log(copy_filter_array);


const reduce_array = [1, 2, 3];
let curr = 0;
const copy_reduce_array = reduce_array.reduce(function(curr, n) {
    return curr + n ;
})
console.log(copy_reduce_array);







const reduce_array1 = [1, 2, 3];
const copy_reduce_array1 = reduce_array.reduce(function(curr, n) {
    return curr + n ;
}, 2) // initial value
console.log(copy_reduce_array1);




const array = [1, 2, 3, 4, 5];
const even_nums = array.filter((n) => {
    return n%2==0;
})
console.log(even_nums);



const nums1 = [4, 5, 3];
const max_num = nums1.reduce((curr,n) =>{
    if(n>curr){
        curr = n;
    }
    return curr;
}, nums1[0])
console.log(max_num);



const min_num = nums1.reduce((curr, n) => {
    return n < curr ? n : curr;
})
console.log(min_num);










numbers = [1, 2, 3, 4, 5];
function findMax(numbers) {
    return numbers.reduce((curr, n) => {
        return n > curr ? n : curr;
    })
}
console.log(findMax(numbers));





message = " Delay Message Task using setTimeout "
time = 1000;
function delayMessage(message, time) {
    setTimeout(() => {
        console.log(message);
    }, time);
}

delayMessage(message, time);




let f = function () {
  return "first";
};

f = function () {
  return "second";
};

console.log(f());
