// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched");
//     }, 1000);
// });

// promise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });





// dataFetchFromApi1()
// .then((data1) => dataFetchFromApi2(data1))
// .then((data2) => console.log("Success fetching data: ", data2))
// .catch(err => console.log(err));
// // console.log(promise);


// function dataFetchFromApi1() {
//     return new Promise((resolve, reject) =>{
//         const success = true;
//         if(success){
//             data1 = 'data1';
//             resolve(data1);
//         }
//         else{
//             error = 'Error fetching data from api1';
//             reject(error);
//         }
//     })
// }

// function dataFetchFromApi2() {
//     const success = true;
//     const promise = new Promise((resolve, reject) =>{
//         if(success){
//             data2 = 'data2';
//             resolve(data2);
//         }
//         else
//         {
//             error = 'Error fetching data from api2';
//             reject(error);
//         }
//     })

//     return promise;
// }




// promiseEx()
// .then(() => { console.log("Success")})
// .catch((err) => { console.log("error")});

// function promiseEx() {
//     const success = true;
//     const promise = new Promise((resolve, reject) => {
//         if(success){
//             setTimeout(() => {
//                 console.log("Hello World");
//                 resolve("successs");
//             }, 2000);
//         }
//         else{
//             error = "Error fetching data";
//             reject(error);
//         }
//     })
//     return promise;
// }
require("dotenv").config();

const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;


getData()
.then((res) => res.json())
.then((data) => console.log("Success", data))
.catch((err) => console.log("Error:", err));

function getData() {
    const promise = new Promise((resolve, reject) => {
        const data = fetch(`${baseUrl}/vendors/`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        });

        if(data) {
            resolve(data);
        }
        else{
            reject(data.error);
        }
    })

    return promise;
}