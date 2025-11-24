function myMap() {
    const array = [1, 2, 3];
    for(let i = 0; i < array.length; i++){
        array[i] = array[i] * 2;
    }
    return array;
}

const result = myMap();
console.log(result);






const array2 = [1,2,3];
const deep_clone_array2 = structuredClone(array2);
deep_clone_array2[0] = 5;
console.log(deep_clone_array2);
console.log(array2);





// using filter

const duplicates = [2, 2, 2, 2, 3];
// const copy_duplicates = structuredClone(duplicates);
const unique_items = [];
function removeDuplicates(duplicates) {
    return [...new Set(duplicates)];
}

console.log(removeDuplicates(duplicates));


const array_sum = [1, 2, 3];
let sum =0;
for(let i=0;i<array_sum.length;i++){
    sum+=array_sum[i];
}
console.log(sum);